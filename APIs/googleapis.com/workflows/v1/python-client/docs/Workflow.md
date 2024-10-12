# Workflow

Workflow program to be executed by Workflows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**call_log_level** | **str** | Optional. Describes the level of platform logging to apply to calls and call responses during executions of this workflow. If both the workflow and the execution specify a logging level, the execution level takes precedence. | [optional] 
**create_time** | **str** | Output only. The timestamp for when the workflow was created. This is a workflow-wide field and is not tied to a specific revision. | [optional] [readonly] 
**crypto_key_name** | **str** | Optional. The resource name of a KMS crypto key used to encrypt or decrypt the data associated with the workflow. Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} Using &#x60;-&#x60; as a wildcard for the &#x60;{project}&#x60; or not providing one at all will infer the project from the account. If not provided, data associated with the workflow will not be CMEK-encrypted. | [optional] 
**description** | **str** | Description of the workflow provided by the user. Must be at most 1000 Unicode characters long. This is a workflow-wide field and is not tied to a specific revision. | [optional] 
**labels** | **Dict[str, str]** | Labels associated with this workflow. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed. This is a workflow-wide field and is not tied to a specific revision. | [optional] 
**name** | **str** | The resource name of the workflow. Format: projects/{project}/locations/{location}/workflows/{workflow}. This is a workflow-wide field and is not tied to a specific revision. | [optional] 
**revision_create_time** | **str** | Output only. The timestamp for the latest revision of the workflow&#39;s creation. | [optional] [readonly] 
**revision_id** | **str** | Output only. The revision of the workflow. A new revision of a workflow is created as a result of updating the following properties of a workflow: - Service account - Workflow code to be executed The format is \&quot;000001-a4d\&quot;, where the first six characters define the zero-padded revision ordinal number. They are followed by a hyphen and three hexadecimal random characters. | [optional] [readonly] 
**service_account** | **str** | The service account associated with the latest workflow version. This service account represents the identity of the workflow and determines what permissions the workflow has. Format: projects/{project}/serviceAccounts/{account} or {account} Using &#x60;-&#x60; as a wildcard for the &#x60;{project}&#x60; or not providing one at all will infer the project from the account. The &#x60;{account}&#x60; value can be the &#x60;email&#x60; address or the &#x60;unique_id&#x60; of the service account. If not provided, workflow will use the project&#39;s default service account. Modifying this field for an existing workflow results in a new workflow revision. | [optional] 
**source_contents** | **str** | Workflow code to be executed. The size limit is 128KB. | [optional] 
**state** | **str** | Output only. State of the workflow deployment. | [optional] [readonly] 
**state_error** | [**StateError**](StateError.md) |  | [optional] 
**update_time** | **str** | Output only. The timestamp for when the workflow was last updated. This is a workflow-wide field and is not tied to a specific revision. | [optional] [readonly] 
**user_env_vars** | **Dict[str, str]** | Optional. User-defined environment variables associated with this workflow revision. This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with \&quot;GOOGLE\&quot; or \&quot;WORKFLOWS\&quot;. | [optional] 

## Example

```python
from openapi_client.models.workflow import Workflow

# TODO update the JSON string below
json = "{}"
# create an instance of Workflow from a JSON string
workflow_instance = Workflow.from_json(json)
# print the JSON string representation of the object
print(Workflow.to_json())

# convert the object into a dict
workflow_dict = workflow_instance.to_dict()
# create an instance of Workflow from a dict
workflow_from_dict = Workflow.from_dict(workflow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


