# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AssociateAssessmentReportEvidenceFolderRequest(
    path_params=operations.AssociateAssessmentReportEvidenceFolderPathParams(
        assessment_id="quo",
    ),
    headers=operations.AssociateAssessmentReportEvidenceFolderHeaders(
        x_amz_algorithm="minus",
        x_amz_content_sha256="facilis",
        x_amz_credential="facilis",
        x_amz_date="officia",
        x_amz_security_token="vel",
        x_amz_signature="magni",
        x_amz_signed_headers="saepe",
    ),
    request=operations.AssociateAssessmentReportEvidenceFolderRequestBody(
        evidence_folder_id="ut",
    ),
)
    
res = s.sdk.associate_assessment_report_evidence_folder(req)

if res.associate_assessment_report_evidence_folder_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associate_assessment_report_evidence_folder` -  Associates an evidence folder to the specified assessment report in Audit Manager. 
* `batch_associate_assessment_report_evidence` -  Associates a list of evidence to an assessment report in an Audit Manager assessment. 
* `batch_create_delegation_by_assessment` -  Create a batch of delegations for a specified assessment in Audit Manager. 
* `batch_delete_delegation_by_assessment` -  Deletes the delegations in the specified Audit Manager assessment. 
* `batch_disassociate_assessment_report_evidence` -  Disassociates a list of evidence from the specified assessment report in Audit Manager. 
* `batch_import_evidence_to_assessment_control` -  Uploads one or more pieces of evidence to the specified control in the assessment in Audit Manager. 
* `create_assessment` -  Creates an assessment in Audit Manager. 
* `create_assessment_framework` -  Creates a custom framework in Audit Manager. 
* `create_assessment_report` -  Creates an assessment report for the specified assessment. 
* `create_control` -  Creates a new custom control in Audit Manager. 
* `delete_assessment` -  Deletes an assessment in Audit Manager. 
* `delete_assessment_framework` -  Deletes a custom framework in Audit Manager. 
* `delete_assessment_report` -  Deletes an assessment report from an assessment in Audit Manager. 
* `delete_control` -  Deletes a custom control in Audit Manager. 
* `deregister_account` -  Deregisters an account in Audit Manager. 
* `deregister_organization_admin_account` - <p>Removes the specified member account as a delegated administrator for Audit Manager. </p> <important> <p>When you remove a delegated administrator from your Audit Manager settings, or when you deregister a delegated administrator from Organizations, you continue to have access to the evidence that you previously collected under that account. However, Audit Manager will stop collecting and attaching evidence to that delegated administrator account moving forward.</p> </important>
* `disassociate_assessment_report_evidence_folder` -  Disassociates an evidence folder from the specified assessment report in Audit Manager. 
* `get_account_status` -  Returns the registration status of an account in Audit Manager. 
* `get_assessment` -  Returns an assessment from Audit Manager. 
* `get_assessment_framework` -  Returns a framework from Audit Manager. 
* `get_assessment_report_url` -  Returns the URL of a specified assessment report in Audit Manager. 
* `get_change_logs` -  Returns a list of changelogs from Audit Manager. 
* `get_control` -  Returns a control from Audit Manager. 
* `get_delegations` -  Returns a list of delegations from an audit owner to a delegate. 
* `get_evidence` -  Returns evidence from Audit Manager. 
* `get_evidence_by_evidence_folder` -  Returns all evidence from a specified evidence folder in Audit Manager. 
* `get_evidence_folder` -  Returns an evidence folder from the specified assessment in Audit Manager. 
* `get_evidence_folders_by_assessment` -  Returns the evidence folders from a specified assessment in Audit Manager. 
* `get_evidence_folders_by_assessment_control` -  Returns a list of evidence folders associated with a specified control of an assessment in Audit Manager. 
* `get_organization_admin_account` -  Returns the name of the delegated Amazon Web Services administrator account for the organization. 
* `get_services_in_scope` -  Returns a list of the in-scope Amazon Web Services services for the specified assessment. 
* `get_settings` -  Returns the settings for the specified account. 
* `list_assessment_frameworks` -  Returns a list of the frameworks available in the Audit Manager framework library. 
* `list_assessment_reports` -  Returns a list of assessment reports created in Audit Manager. 
* `list_assessments` -  Returns a list of current and past assessments from Audit Manager. 
* `list_controls` -  Returns a list of controls from Audit Manager. 
* `list_keywords_for_data_source` -  Returns a list of keywords that pre-mapped to the specified control data source. 
* `list_notifications` -  Returns a list of all Audit Manager notifications. 
* `list_tags_for_resource` -  Returns a list of tags for the specified resource in Audit Manager. 
* `register_account` -  Enables Audit Manager for the specified account. 
* `register_organization_admin_account` -  Enables an account within the organization as the delegated administrator for Audit Manager. 
* `tag_resource` -  Tags the specified resource in Audit Manager. 
* `untag_resource` -  Removes a tag from a resource in Audit Manager. 
* `update_assessment` -  Edits an Audit Manager assessment. 
* `update_assessment_control` -  Updates a control within an assessment in Audit Manager. 
* `update_assessment_control_set_status` -  Updates the status of a control set in an Audit Manager assessment. 
* `update_assessment_framework` -  Updates a custom framework in Audit Manager. 
* `update_assessment_status` -  Updates the status of an assessment in Audit Manager. 
* `update_control` -  Updates a custom control in Audit Manager. 
* `update_settings` -  Updates Audit Manager settings for the current user account. 
* `validate_assessment_report_integrity` -  Validates the integrity of an assessment report in Audit Manager. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
