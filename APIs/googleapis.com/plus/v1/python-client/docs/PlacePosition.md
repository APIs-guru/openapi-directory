# PlacePosition

The position of the place.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **float** | The latitude of this position. | [optional] 
**longitude** | **float** | The longitude of this position. | [optional] 

## Example

```python
from openapi_client.models.place_position import PlacePosition

# TODO update the JSON string below
json = "{}"
# create an instance of PlacePosition from a JSON string
place_position_instance = PlacePosition.from_json(json)
# print the JSON string representation of the object
print(PlacePosition.to_json())

# convert the object into a dict
place_position_dict = place_position_instance.to_dict()
# create an instance of PlacePosition from a dict
place_position_from_dict = PlacePosition.from_dict(place_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


