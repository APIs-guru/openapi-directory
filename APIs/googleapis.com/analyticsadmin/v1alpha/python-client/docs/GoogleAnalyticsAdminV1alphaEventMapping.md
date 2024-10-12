# GoogleAnalyticsAdminV1alphaEventMapping

Event setting conditions to match an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_name** | **str** | Required. Name of the GA4 event. It must always be set. The max allowed display name length is 40 UTF-16 code units. | [optional] 
**max_event_count** | **str** | The maximum number of times the event occurred. If not set, maximum event count won&#39;t be checked. | [optional] 
**max_event_value** | **float** | The maximum revenue generated due to the event. Revenue currency will be defined at the property level. If not set, maximum event value won&#39;t be checked. | [optional] 
**min_event_count** | **str** | At least one of the following four min/max values must be set. The values set will be ANDed together to qualify an event. The minimum number of times the event occurred. If not set, minimum event count won&#39;t be checked. | [optional] 
**min_event_value** | **float** | The minimum revenue generated due to the event. Revenue currency will be defined at the property level. If not set, minimum event value won&#39;t be checked. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_event_mapping import GoogleAnalyticsAdminV1alphaEventMapping

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaEventMapping from a JSON string
google_analytics_admin_v1alpha_event_mapping_instance = GoogleAnalyticsAdminV1alphaEventMapping.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaEventMapping.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_event_mapping_dict = google_analytics_admin_v1alpha_event_mapping_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaEventMapping from a dict
google_analytics_admin_v1alpha_event_mapping_from_dict = GoogleAnalyticsAdminV1alphaEventMapping.from_dict(google_analytics_admin_v1alpha_event_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


