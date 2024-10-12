# ResourceOperation

Resource operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**ResourceOperationDisplay**](ResourceOperationDisplay.md) |  | [optional] 
**name** | **str** | Name of this operation. | [optional] 
**origin** | **str** | The operation origin | [optional] 

## Example

```python
from openapi_client.models.resource_operation import ResourceOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceOperation from a JSON string
resource_operation_instance = ResourceOperation.from_json(json)
# print the JSON string representation of the object
print(ResourceOperation.to_json())

# convert the object into a dict
resource_operation_dict = resource_operation_instance.to_dict()
# create an instance of ResourceOperation from a dict
resource_operation_from_dict = ResourceOperation.from_dict(resource_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


