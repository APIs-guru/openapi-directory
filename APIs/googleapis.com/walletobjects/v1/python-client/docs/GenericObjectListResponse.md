# GenericObjectListResponse

List response which contains the list of all generic objects for a given issuer ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[GenericObject]**](GenericObject.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.generic_object_list_response import GenericObjectListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenericObjectListResponse from a JSON string
generic_object_list_response_instance = GenericObjectListResponse.from_json(json)
# print the JSON string representation of the object
print(GenericObjectListResponse.to_json())

# convert the object into a dict
generic_object_list_response_dict = generic_object_list_response_instance.to_dict()
# create an instance of GenericObjectListResponse from a dict
generic_object_list_response_from_dict = GenericObjectListResponse.from_dict(generic_object_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


