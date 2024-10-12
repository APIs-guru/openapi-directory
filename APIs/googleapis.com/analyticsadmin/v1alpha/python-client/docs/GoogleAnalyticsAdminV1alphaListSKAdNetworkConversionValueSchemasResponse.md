# GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponse

Response message for ListSKAdNetworkConversionValueSchemas RPC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one SKAdNetworkConversionValueSchema per dataStream, so this will never be populated. | [optional] 
**skadnetwork_conversion_value_schemas** | [**List[GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema]**](GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema.md) | List of SKAdNetworkConversionValueSchemas. This will have at most one value. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_skad_network_conversion_value_schemas_response import GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponse from a JSON string
google_analytics_admin_v1alpha_list_skad_network_conversion_value_schemas_response_instance = GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_skad_network_conversion_value_schemas_response_dict = google_analytics_admin_v1alpha_list_skad_network_conversion_value_schemas_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponse from a dict
google_analytics_admin_v1alpha_list_skad_network_conversion_value_schemas_response_from_dict = GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponse.from_dict(google_analytics_admin_v1alpha_list_skad_network_conversion_value_schemas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


