# PostLocationsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] [default to True]
**address** | [**PostDriversRequestAddress**](PostDriversRequestAddress.md) |  | 
**chargestations** | **List[object]** |  | [optional] 
**coordinates** | [**PatchLocationRequestCoordinates**](PatchLocationRequestCoordinates.md) |  | 
**operator_name** | **str** |  | 

## Example

```python
from openapi_client.models.post_locations_request import PostLocationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostLocationsRequest from a JSON string
post_locations_request_instance = PostLocationsRequest.from_json(json)
# print the JSON string representation of the object
print(PostLocationsRequest.to_json())

# convert the object into a dict
post_locations_request_dict = post_locations_request_instance.to_dict()
# create an instance of PostLocationsRequest from a dict
post_locations_request_from_dict = PostLocationsRequest.from_dict(post_locations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


