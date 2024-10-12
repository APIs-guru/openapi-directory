# Places

Places and count during the time range in descending order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**places** | [**List[AnalyticsPlaceCounts200ResponsePlacesInner]**](AnalyticsPlaceCounts200ResponsePlacesInner.md) |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.places import Places

# TODO update the JSON string below
json = "{}"
# create an instance of Places from a JSON string
places_instance = Places.from_json(json)
# print the JSON string representation of the object
print(Places.to_json())

# convert the object into a dict
places_dict = places_instance.to_dict()
# create an instance of Places from a dict
places_from_dict = Places.from_dict(places_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


