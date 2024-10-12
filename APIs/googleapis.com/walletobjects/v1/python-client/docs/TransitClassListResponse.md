# TransitClassListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[TransitClass]**](TransitClass.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.transit_class_list_response import TransitClassListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransitClassListResponse from a JSON string
transit_class_list_response_instance = TransitClassListResponse.from_json(json)
# print the JSON string representation of the object
print(TransitClassListResponse.to_json())

# convert the object into a dict
transit_class_list_response_dict = transit_class_list_response_instance.to_dict()
# create an instance of TransitClassListResponse from a dict
transit_class_list_response_from_dict = TransitClassListResponse.from_dict(transit_class_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


