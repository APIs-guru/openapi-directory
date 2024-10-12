# GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponse

Response message for ListSubpropertyEventFilter RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**subproperty_event_filters** | [**List[GoogleAnalyticsAdminV1alphaSubpropertyEventFilter]**](GoogleAnalyticsAdminV1alphaSubpropertyEventFilter.md) | List of subproperty event filters. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_subproperty_event_filters_response import GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponse from a JSON string
google_analytics_admin_v1alpha_list_subproperty_event_filters_response_instance = GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_subproperty_event_filters_response_dict = google_analytics_admin_v1alpha_list_subproperty_event_filters_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponse from a dict
google_analytics_admin_v1alpha_list_subproperty_event_filters_response_from_dict = GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponse.from_dict(google_analytics_admin_v1alpha_list_subproperty_event_filters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


