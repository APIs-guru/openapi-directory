# ResourceUpdateError

Output only. If errors are generated during update of the resource, this field will be populated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[OperationErrorErrorsInner]**](OperationErrorErrorsInner.md) | [Output Only] The array of errors encountered while processing this operation. | [optional] 

## Example

```python
from openapi_client.models.resource_update_error import ResourceUpdateError

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceUpdateError from a JSON string
resource_update_error_instance = ResourceUpdateError.from_json(json)
# print the JSON string representation of the object
print(ResourceUpdateError.to_json())

# convert the object into a dict
resource_update_error_dict = resource_update_error_instance.to_dict()
# create an instance of ResourceUpdateError from a dict
resource_update_error_from_dict = ResourceUpdateError.from_dict(resource_update_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


