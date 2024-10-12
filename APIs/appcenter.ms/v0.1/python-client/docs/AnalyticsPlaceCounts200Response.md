# AnalyticsPlaceCounts200Response

Places and count during the time range in descending order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**places** | [**List[AnalyticsPlaceCounts200ResponsePlacesInner]**](AnalyticsPlaceCounts200ResponsePlacesInner.md) |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.analytics_place_counts200_response import AnalyticsPlaceCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsPlaceCounts200Response from a JSON string
analytics_place_counts200_response_instance = AnalyticsPlaceCounts200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsPlaceCounts200Response.to_json())

# convert the object into a dict
analytics_place_counts200_response_dict = analytics_place_counts200_response_instance.to_dict()
# create an instance of AnalyticsPlaceCounts200Response from a dict
analytics_place_counts200_response_from_dict = AnalyticsPlaceCounts200Response.from_dict(analytics_place_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


