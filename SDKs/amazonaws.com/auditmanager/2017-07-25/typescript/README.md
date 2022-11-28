# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AssociateAssessmentReportEvidenceFolderRequest, AssociateAssessmentReportEvidenceFolderResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateAssessmentReportEvidenceFolderRequest = {
  pathParams: {
    assessmentId: "quo",
  },
  headers: {
    xAmzAlgorithm: "minus",
    xAmzContentSha256: "facilis",
    xAmzCredential: "facilis",
    xAmzDate: "officia",
    xAmzSecurityToken: "vel",
    xAmzSignature: "magni",
    xAmzSignedHeaders: "saepe",
  },
  request: {
    evidenceFolderId: "ut",
  },
};

sdk.sdk.associateAssessmentReportEvidenceFolder(req).then((res: AssociateAssessmentReportEvidenceFolderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateAssessmentReportEvidenceFolder` -  Associates an evidence folder to the specified assessment report in Audit Manager. 
* `batchAssociateAssessmentReportEvidence` -  Associates a list of evidence to an assessment report in an Audit Manager assessment. 
* `batchCreateDelegationByAssessment` -  Create a batch of delegations for a specified assessment in Audit Manager. 
* `batchDeleteDelegationByAssessment` -  Deletes the delegations in the specified Audit Manager assessment. 
* `batchDisassociateAssessmentReportEvidence` -  Disassociates a list of evidence from the specified assessment report in Audit Manager. 
* `batchImportEvidenceToAssessmentControl` -  Uploads one or more pieces of evidence to the specified control in the assessment in Audit Manager. 
* `createAssessment` -  Creates an assessment in Audit Manager. 
* `createAssessmentFramework` -  Creates a custom framework in Audit Manager. 
* `createAssessmentReport` -  Creates an assessment report for the specified assessment. 
* `createControl` -  Creates a new custom control in Audit Manager. 
* `deleteAssessment` -  Deletes an assessment in Audit Manager. 
* `deleteAssessmentFramework` -  Deletes a custom framework in Audit Manager. 
* `deleteAssessmentReport` -  Deletes an assessment report from an assessment in Audit Manager. 
* `deleteControl` -  Deletes a custom control in Audit Manager. 
* `deregisterAccount` -  Deregisters an account in Audit Manager. 
* `deregisterOrganizationAdminAccount` - <p>Removes the specified member account as a delegated administrator for Audit Manager. </p> <important> <p>When you remove a delegated administrator from your Audit Manager settings, or when you deregister a delegated administrator from Organizations, you continue to have access to the evidence that you previously collected under that account. However, Audit Manager will stop collecting and attaching evidence to that delegated administrator account moving forward.</p> </important>
* `disassociateAssessmentReportEvidenceFolder` -  Disassociates an evidence folder from the specified assessment report in Audit Manager. 
* `getAccountStatus` -  Returns the registration status of an account in Audit Manager. 
* `getAssessment` -  Returns an assessment from Audit Manager. 
* `getAssessmentFramework` -  Returns a framework from Audit Manager. 
* `getAssessmentReportUrl` -  Returns the URL of a specified assessment report in Audit Manager. 
* `getChangeLogs` -  Returns a list of changelogs from Audit Manager. 
* `getControl` -  Returns a control from Audit Manager. 
* `getDelegations` -  Returns a list of delegations from an audit owner to a delegate. 
* `getEvidence` -  Returns evidence from Audit Manager. 
* `getEvidenceByEvidenceFolder` -  Returns all evidence from a specified evidence folder in Audit Manager. 
* `getEvidenceFolder` -  Returns an evidence folder from the specified assessment in Audit Manager. 
* `getEvidenceFoldersByAssessment` -  Returns the evidence folders from a specified assessment in Audit Manager. 
* `getEvidenceFoldersByAssessmentControl` -  Returns a list of evidence folders associated with a specified control of an assessment in Audit Manager. 
* `getOrganizationAdminAccount` -  Returns the name of the delegated Amazon Web Services administrator account for the organization. 
* `getServicesInScope` -  Returns a list of the in-scope Amazon Web Services services for the specified assessment. 
* `getSettings` -  Returns the settings for the specified account. 
* `listAssessmentFrameworks` -  Returns a list of the frameworks available in the Audit Manager framework library. 
* `listAssessmentReports` -  Returns a list of assessment reports created in Audit Manager. 
* `listAssessments` -  Returns a list of current and past assessments from Audit Manager. 
* `listControls` -  Returns a list of controls from Audit Manager. 
* `listKeywordsForDataSource` -  Returns a list of keywords that pre-mapped to the specified control data source. 
* `listNotifications` -  Returns a list of all Audit Manager notifications. 
* `listTagsForResource` -  Returns a list of tags for the specified resource in Audit Manager. 
* `registerAccount` -  Enables Audit Manager for the specified account. 
* `registerOrganizationAdminAccount` -  Enables an account within the organization as the delegated administrator for Audit Manager. 
* `tagResource` -  Tags the specified resource in Audit Manager. 
* `untagResource` -  Removes a tag from a resource in Audit Manager. 
* `updateAssessment` -  Edits an Audit Manager assessment. 
* `updateAssessmentControl` -  Updates a control within an assessment in Audit Manager. 
* `updateAssessmentControlSetStatus` -  Updates the status of a control set in an Audit Manager assessment. 
* `updateAssessmentFramework` -  Updates a custom framework in Audit Manager. 
* `updateAssessmentStatus` -  Updates the status of an assessment in Audit Manager. 
* `updateControl` -  Updates a custom control in Audit Manager. 
* `updateSettings` -  Updates Audit Manager settings for the current user account. 
* `validateAssessmentReportIntegrity` -  Validates the integrity of an assessment report in Audit Manager. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
