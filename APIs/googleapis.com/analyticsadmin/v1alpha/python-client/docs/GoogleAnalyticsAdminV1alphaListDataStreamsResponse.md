# GoogleAnalyticsAdminV1alphaListDataStreamsResponse

Response message for ListDataStreams RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_streams** | [**List[GoogleAnalyticsAdminV1alphaDataStream]**](GoogleAnalyticsAdminV1alphaDataStream.md) | List of DataStreams. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_data_streams_response import GoogleAnalyticsAdminV1alphaListDataStreamsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListDataStreamsResponse from a JSON string
google_analytics_admin_v1alpha_list_data_streams_response_instance = GoogleAnalyticsAdminV1alphaListDataStreamsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListDataStreamsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_data_streams_response_dict = google_analytics_admin_v1alpha_list_data_streams_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListDataStreamsResponse from a dict
google_analytics_admin_v1alpha_list_data_streams_response_from_dict = GoogleAnalyticsAdminV1alphaListDataStreamsResponse.from_dict(google_analytics_admin_v1alpha_list_data_streams_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


