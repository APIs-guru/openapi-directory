# PlaceInfo

Defines an area that's represented by a place ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The localized name of the place. For example, &#x60;Scottsdale, AZ&#x60;. | [optional] 
**place_id** | **str** | The ID of the place. Must correspond to a [region.] (https://developers.google.com/places/web-service/supported_types#table3) | [optional] 

## Example

```python
from openapi_client.models.place_info import PlaceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PlaceInfo from a JSON string
place_info_instance = PlaceInfo.from_json(json)
# print the JSON string representation of the object
print(PlaceInfo.to_json())

# convert the object into a dict
place_info_dict = place_info_instance.to_dict()
# create an instance of PlaceInfo from a dict
place_info_from_dict = PlaceInfo.from_dict(place_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


