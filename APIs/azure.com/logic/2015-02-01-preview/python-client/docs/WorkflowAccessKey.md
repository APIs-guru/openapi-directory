# WorkflowAccessKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets the workflow access key name. | [optional] [readonly] 
**properties** | [**WorkflowAccessKeyProperties**](WorkflowAccessKeyProperties.md) |  | [optional] 
**type** | **str** | Gets the workflow access key type. | [optional] [readonly] 
**id** | **str** | Gets or sets the resource id. | [optional] 

## Example

```python
from openapi_client.models.workflow_access_key import WorkflowAccessKey

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowAccessKey from a JSON string
workflow_access_key_instance = WorkflowAccessKey.from_json(json)
# print the JSON string representation of the object
print(WorkflowAccessKey.to_json())

# convert the object into a dict
workflow_access_key_dict = workflow_access_key_instance.to_dict()
# create an instance of WorkflowAccessKey from a dict
workflow_access_key_from_dict = WorkflowAccessKey.from_dict(workflow_access_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


