# TransitObjectListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[TransitObject]**](TransitObject.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.transit_object_list_response import TransitObjectListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransitObjectListResponse from a JSON string
transit_object_list_response_instance = TransitObjectListResponse.from_json(json)
# print the JSON string representation of the object
print(TransitObjectListResponse.to_json())

# convert the object into a dict
transit_object_list_response_dict = transit_object_list_response_instance.to_dict()
# create an instance of TransitObjectListResponse from a dict
transit_object_list_response_from_dict = TransitObjectListResponse.from_dict(transit_object_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


