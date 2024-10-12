# GoogleCloudRetailV2alphaUserEventInlineSource

The inline source for the input config for ImportUserEvents method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_events** | [**List[GoogleCloudRetailV2alphaUserEvent]**](GoogleCloudRetailV2alphaUserEvent.md) | Required. A list of user events to import. Recommended max of 10k items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_user_event_inline_source import GoogleCloudRetailV2alphaUserEventInlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaUserEventInlineSource from a JSON string
google_cloud_retail_v2alpha_user_event_inline_source_instance = GoogleCloudRetailV2alphaUserEventInlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaUserEventInlineSource.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_user_event_inline_source_dict = google_cloud_retail_v2alpha_user_event_inline_source_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaUserEventInlineSource from a dict
google_cloud_retail_v2alpha_user_event_inline_source_from_dict = GoogleCloudRetailV2alphaUserEventInlineSource.from_dict(google_cloud_retail_v2alpha_user_event_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


