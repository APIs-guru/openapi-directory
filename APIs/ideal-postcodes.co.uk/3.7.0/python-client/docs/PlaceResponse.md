# PlaceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**PlaceResponseResult**](PlaceResponseResult.md) |  | 

## Example

```python
from openapi_client.models.place_response import PlaceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlaceResponse from a JSON string
place_response_instance = PlaceResponse.from_json(json)
# print the JSON string representation of the object
print(PlaceResponse.to_json())

# convert the object into a dict
place_response_dict = place_response_instance.to_dict()
# create an instance of PlaceResponse from a dict
place_response_from_dict = PlaceResponse.from_dict(place_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


