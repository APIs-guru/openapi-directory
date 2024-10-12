# GoogleAnalyticsAdminV1alphaCreateSubpropertyRequest

Request message for CreateSubproperty RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Required. The ordinary property for which to create a subproperty. Format: properties/property_id Example: properties/123 | [optional] 
**subproperty** | [**GoogleAnalyticsAdminV1alphaProperty**](GoogleAnalyticsAdminV1alphaProperty.md) |  | [optional] 
**subproperty_event_filter** | [**GoogleAnalyticsAdminV1alphaSubpropertyEventFilter**](GoogleAnalyticsAdminV1alphaSubpropertyEventFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_create_subproperty_request import GoogleAnalyticsAdminV1alphaCreateSubpropertyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaCreateSubpropertyRequest from a JSON string
google_analytics_admin_v1alpha_create_subproperty_request_instance = GoogleAnalyticsAdminV1alphaCreateSubpropertyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaCreateSubpropertyRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_create_subproperty_request_dict = google_analytics_admin_v1alpha_create_subproperty_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaCreateSubpropertyRequest from a dict
google_analytics_admin_v1alpha_create_subproperty_request_from_dict = GoogleAnalyticsAdminV1alphaCreateSubpropertyRequest.from_dict(google_analytics_admin_v1alpha_create_subproperty_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


