# PlaceAddress

The physical address of the place.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted** | **str** | The formatted address for display. | [optional] 

## Example

```python
from openapi_client.models.place_address import PlaceAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PlaceAddress from a JSON string
place_address_instance = PlaceAddress.from_json(json)
# print the JSON string representation of the object
print(PlaceAddress.to_json())

# convert the object into a dict
place_address_dict = place_address_instance.to_dict()
# create an instance of PlaceAddress from a dict
place_address_from_dict = PlaceAddress.from_dict(place_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


