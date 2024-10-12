# GoogleCloudRetailV2betaUserEventInlineSource

The inline source for the input config for ImportUserEvents method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_events** | [**List[GoogleCloudRetailV2betaUserEvent]**](GoogleCloudRetailV2betaUserEvent.md) | Required. A list of user events to import. Recommended max of 10k items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_user_event_inline_source import GoogleCloudRetailV2betaUserEventInlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaUserEventInlineSource from a JSON string
google_cloud_retail_v2beta_user_event_inline_source_instance = GoogleCloudRetailV2betaUserEventInlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaUserEventInlineSource.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_user_event_inline_source_dict = google_cloud_retail_v2beta_user_event_inline_source_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaUserEventInlineSource from a dict
google_cloud_retail_v2beta_user_event_inline_source_from_dict = GoogleCloudRetailV2betaUserEventInlineSource.from_dict(google_cloud_retail_v2beta_user_event_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


