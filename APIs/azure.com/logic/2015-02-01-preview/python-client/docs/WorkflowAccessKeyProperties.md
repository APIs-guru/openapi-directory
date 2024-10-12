# WorkflowAccessKeyProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**not_after** | **datetime** | Gets or sets the not-after time. | [optional] 
**not_before** | **datetime** | Gets or sets the not-before time. | [optional] 

## Example

```python
from openapi_client.models.workflow_access_key_properties import WorkflowAccessKeyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowAccessKeyProperties from a JSON string
workflow_access_key_properties_instance = WorkflowAccessKeyProperties.from_json(json)
# print the JSON string representation of the object
print(WorkflowAccessKeyProperties.to_json())

# convert the object into a dict
workflow_access_key_properties_dict = workflow_access_key_properties_instance.to_dict()
# create an instance of WorkflowAccessKeyProperties from a dict
workflow_access_key_properties_from_dict = WorkflowAccessKeyProperties.from_dict(workflow_access_key_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


