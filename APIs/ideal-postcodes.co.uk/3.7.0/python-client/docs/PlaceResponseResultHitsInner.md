# PlaceResponseResultHitsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_iso** | **str** |   3 letter country code (ISO 3166-1)  | 
**descriptive_name** | **str** | Longer form description of the place.  | 
**id** | **str** | Unique identifier for place  | 
**name** | **str** | Place name  | 

## Example

```python
from openapi_client.models.place_response_result_hits_inner import PlaceResponseResultHitsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PlaceResponseResultHitsInner from a JSON string
place_response_result_hits_inner_instance = PlaceResponseResultHitsInner.from_json(json)
# print the JSON string representation of the object
print(PlaceResponseResultHitsInner.to_json())

# convert the object into a dict
place_response_result_hits_inner_dict = place_response_result_hits_inner_instance.to_dict()
# create an instance of PlaceResponseResultHitsInner from a dict
place_response_result_hits_inner_from_dict = PlaceResponseResultHitsInner.from_dict(place_response_result_hits_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


