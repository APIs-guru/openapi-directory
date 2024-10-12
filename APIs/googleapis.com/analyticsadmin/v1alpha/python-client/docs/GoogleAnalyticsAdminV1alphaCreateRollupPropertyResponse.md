# GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponse

Response message for CreateRollupProperty RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rollup_property** | [**GoogleAnalyticsAdminV1alphaProperty**](GoogleAnalyticsAdminV1alphaProperty.md) |  | [optional] 
**rollup_property_source_links** | [**List[GoogleAnalyticsAdminV1alphaRollupPropertySourceLink]**](GoogleAnalyticsAdminV1alphaRollupPropertySourceLink.md) | The created roll-up property source links. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_create_rollup_property_response import GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponse from a JSON string
google_analytics_admin_v1alpha_create_rollup_property_response_instance = GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_create_rollup_property_response_dict = google_analytics_admin_v1alpha_create_rollup_property_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponse from a dict
google_analytics_admin_v1alpha_create_rollup_property_response_from_dict = GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponse.from_dict(google_analytics_admin_v1alpha_create_rollup_property_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


