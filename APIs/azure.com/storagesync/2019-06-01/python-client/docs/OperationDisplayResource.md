# OperationDisplayResource

Operation Display Resource object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Operation Display Resource Description. | [optional] 
**operation** | **str** | Operation Display Resource Operation. | [optional] 
**provider** | **str** | Operation Display Resource Provider. | [optional] 
**resource** | **str** | Operation Display Resource. | [optional] 

## Example

```python
from openapi_client.models.operation_display_resource import OperationDisplayResource

# TODO update the JSON string below
json = "{}"
# create an instance of OperationDisplayResource from a JSON string
operation_display_resource_instance = OperationDisplayResource.from_json(json)
# print the JSON string representation of the object
print(OperationDisplayResource.to_json())

# convert the object into a dict
operation_display_resource_dict = operation_display_resource_instance.to_dict()
# create an instance of OperationDisplayResource from a dict
operation_display_resource_from_dict = OperationDisplayResource.from_dict(operation_display_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


