# WorkflowSecretKeys


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_secret_key** | **str** | Gets the primary secret key. | [optional] [readonly] 
**secondary_secret_key** | **str** | Gets the secondary secret key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_secret_keys import WorkflowSecretKeys

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowSecretKeys from a JSON string
workflow_secret_keys_instance = WorkflowSecretKeys.from_json(json)
# print the JSON string representation of the object
print(WorkflowSecretKeys.to_json())

# convert the object into a dict
workflow_secret_keys_dict = workflow_secret_keys_instance.to_dict()
# create an instance of WorkflowSecretKeys from a dict
workflow_secret_keys_from_dict = WorkflowSecretKeys.from_dict(workflow_secret_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


