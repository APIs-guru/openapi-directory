# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateAssessmentReportEvidenceFolderRequest{
        PathParams: operations.AssociateAssessmentReportEvidenceFolderPathParams{
            AssessmentID: "quo",
        },
        Headers: operations.AssociateAssessmentReportEvidenceFolderHeaders{
            XAmzAlgorithm: "minus",
            XAmzContentSha256: "facilis",
            XAmzCredential: "facilis",
            XAmzDate: "officia",
            XAmzSecurityToken: "vel",
            XAmzSignature: "magni",
            XAmzSignedHeaders: "saepe",
        },
        Request: operations.AssociateAssessmentReportEvidenceFolderRequestBody{
            EvidenceFolderID: "ut",
        },
    }
    
    res, err := s.Sdk.AssociateAssessmentReportEvidenceFolder(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAssessmentReportEvidenceFolderResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateAssessmentReportEvidenceFolder` -  Associates an evidence folder to the specified assessment report in Audit Manager. 
* `BatchAssociateAssessmentReportEvidence` -  Associates a list of evidence to an assessment report in an Audit Manager assessment. 
* `BatchCreateDelegationByAssessment` -  Create a batch of delegations for a specified assessment in Audit Manager. 
* `BatchDeleteDelegationByAssessment` -  Deletes the delegations in the specified Audit Manager assessment. 
* `BatchDisassociateAssessmentReportEvidence` -  Disassociates a list of evidence from the specified assessment report in Audit Manager. 
* `BatchImportEvidenceToAssessmentControl` -  Uploads one or more pieces of evidence to the specified control in the assessment in Audit Manager. 
* `CreateAssessment` -  Creates an assessment in Audit Manager. 
* `CreateAssessmentFramework` -  Creates a custom framework in Audit Manager. 
* `CreateAssessmentReport` -  Creates an assessment report for the specified assessment. 
* `CreateControl` -  Creates a new custom control in Audit Manager. 
* `DeleteAssessment` -  Deletes an assessment in Audit Manager. 
* `DeleteAssessmentFramework` -  Deletes a custom framework in Audit Manager. 
* `DeleteAssessmentReport` -  Deletes an assessment report from an assessment in Audit Manager. 
* `DeleteControl` -  Deletes a custom control in Audit Manager. 
* `DeregisterAccount` -  Deregisters an account in Audit Manager. 
* `DeregisterOrganizationAdminAccount` - <p>Removes the specified member account as a delegated administrator for Audit Manager. </p> <important> <p>When you remove a delegated administrator from your Audit Manager settings, or when you deregister a delegated administrator from Organizations, you continue to have access to the evidence that you previously collected under that account. However, Audit Manager will stop collecting and attaching evidence to that delegated administrator account moving forward.</p> </important>
* `DisassociateAssessmentReportEvidenceFolder` -  Disassociates an evidence folder from the specified assessment report in Audit Manager. 
* `GetAccountStatus` -  Returns the registration status of an account in Audit Manager. 
* `GetAssessment` -  Returns an assessment from Audit Manager. 
* `GetAssessmentFramework` -  Returns a framework from Audit Manager. 
* `GetAssessmentReportURL` -  Returns the URL of a specified assessment report in Audit Manager. 
* `GetChangeLogs` -  Returns a list of changelogs from Audit Manager. 
* `GetControl` -  Returns a control from Audit Manager. 
* `GetDelegations` -  Returns a list of delegations from an audit owner to a delegate. 
* `GetEvidence` -  Returns evidence from Audit Manager. 
* `GetEvidenceByEvidenceFolder` -  Returns all evidence from a specified evidence folder in Audit Manager. 
* `GetEvidenceFolder` -  Returns an evidence folder from the specified assessment in Audit Manager. 
* `GetEvidenceFoldersByAssessment` -  Returns the evidence folders from a specified assessment in Audit Manager. 
* `GetEvidenceFoldersByAssessmentControl` -  Returns a list of evidence folders associated with a specified control of an assessment in Audit Manager. 
* `GetOrganizationAdminAccount` -  Returns the name of the delegated Amazon Web Services administrator account for the organization. 
* `GetServicesInScope` -  Returns a list of the in-scope Amazon Web Services services for the specified assessment. 
* `GetSettings` -  Returns the settings for the specified account. 
* `ListAssessmentFrameworks` -  Returns a list of the frameworks available in the Audit Manager framework library. 
* `ListAssessmentReports` -  Returns a list of assessment reports created in Audit Manager. 
* `ListAssessments` -  Returns a list of current and past assessments from Audit Manager. 
* `ListControls` -  Returns a list of controls from Audit Manager. 
* `ListKeywordsForDataSource` -  Returns a list of keywords that pre-mapped to the specified control data source. 
* `ListNotifications` -  Returns a list of all Audit Manager notifications. 
* `ListTagsForResource` -  Returns a list of tags for the specified resource in Audit Manager. 
* `RegisterAccount` -  Enables Audit Manager for the specified account. 
* `RegisterOrganizationAdminAccount` -  Enables an account within the organization as the delegated administrator for Audit Manager. 
* `TagResource` -  Tags the specified resource in Audit Manager. 
* `UntagResource` -  Removes a tag from a resource in Audit Manager. 
* `UpdateAssessment` -  Edits an Audit Manager assessment. 
* `UpdateAssessmentControl` -  Updates a control within an assessment in Audit Manager. 
* `UpdateAssessmentControlSetStatus` -  Updates the status of a control set in an Audit Manager assessment. 
* `UpdateAssessmentFramework` -  Updates a custom framework in Audit Manager. 
* `UpdateAssessmentStatus` -  Updates the status of an assessment in Audit Manager. 
* `UpdateControl` -  Updates a custom control in Audit Manager. 
* `UpdateSettings` -  Updates Audit Manager settings for the current user account. 
* `ValidateAssessmentReportIntegrity` -  Validates the integrity of an assessment report in Audit Manager. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
