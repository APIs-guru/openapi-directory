# AnalyticsDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_property** | [**AnalyticsProperty**](AnalyticsProperty.md) |  | [optional] 
**stream_mappings** | [**List[StreamMapping]**](StreamMapping.md) |  - For &#x60;AndroidApps&#x60; and &#x60;IosApps&#x60;: a map of &#x60;app&#x60; to &#x60;streamId&#x60; for each Firebase App in the specified &#x60;FirebaseProject&#x60;. Each &#x60;app&#x60; and &#x60;streamId&#x60; appears only once. - For &#x60;WebApps&#x60;: a map of &#x60;app&#x60; to &#x60;streamId&#x60; and &#x60;measurementId&#x60; for each &#x60;WebApp&#x60; in the specified &#x60;FirebaseProject&#x60;. Each &#x60;app&#x60;, &#x60;streamId&#x60;, and &#x60;measurementId&#x60; appears only once. | [optional] 

## Example

```python
from openapi_client.models.analytics_details import AnalyticsDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsDetails from a JSON string
analytics_details_instance = AnalyticsDetails.from_json(json)
# print the JSON string representation of the object
print(AnalyticsDetails.to_json())

# convert the object into a dict
analytics_details_dict = analytics_details_instance.to_dict()
# create an instance of AnalyticsDetails from a dict
analytics_details_from_dict = AnalyticsDetails.from_dict(analytics_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


