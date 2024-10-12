# GenericClassListResponse

List response which contains the list of all generic classes for a given issuer ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[GenericClass]**](GenericClass.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.generic_class_list_response import GenericClassListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenericClassListResponse from a JSON string
generic_class_list_response_instance = GenericClassListResponse.from_json(json)
# print the JSON string representation of the object
print(GenericClassListResponse.to_json())

# convert the object into a dict
generic_class_list_response_dict = generic_class_list_response_instance.to_dict()
# create an instance of GenericClassListResponse from a dict
generic_class_list_response_from_dict = GenericClassListResponse.from_dict(generic_class_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


