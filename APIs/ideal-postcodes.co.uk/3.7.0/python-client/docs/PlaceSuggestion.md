# PlaceSuggestion

Represents a possible place given an autocomplete query. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_iso** | **str** |   3 letter country code (ISO 3166-1)  | 
**descriptive_name** | **str** | Longer form description of the place.  | 
**id** | **str** | Unique identifier for place  | 
**name** | **str** | Place name  | 

## Example

```python
from openapi_client.models.place_suggestion import PlaceSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of PlaceSuggestion from a JSON string
place_suggestion_instance = PlaceSuggestion.from_json(json)
# print the JSON string representation of the object
print(PlaceSuggestion.to_json())

# convert the object into a dict
place_suggestion_dict = place_suggestion_instance.to_dict()
# create an instance of PlaceSuggestion from a dict
place_suggestion_from_dict = PlaceSuggestion.from_dict(place_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


