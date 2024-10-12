# GoogleAnalyticsAdminV1alphaCreateRollupPropertyRequest

Request message for CreateRollupProperty RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rollup_property** | [**GoogleAnalyticsAdminV1alphaProperty**](GoogleAnalyticsAdminV1alphaProperty.md) |  | [optional] 
**source_properties** | **List[str]** | Optional. The resource names of properties that will be sources to the created roll-up property. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_create_rollup_property_request import GoogleAnalyticsAdminV1alphaCreateRollupPropertyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaCreateRollupPropertyRequest from a JSON string
google_analytics_admin_v1alpha_create_rollup_property_request_instance = GoogleAnalyticsAdminV1alphaCreateRollupPropertyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaCreateRollupPropertyRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_create_rollup_property_request_dict = google_analytics_admin_v1alpha_create_rollup_property_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaCreateRollupPropertyRequest from a dict
google_analytics_admin_v1alpha_create_rollup_property_request_from_dict = GoogleAnalyticsAdminV1alphaCreateRollupPropertyRequest.from_dict(google_analytics_admin_v1alpha_create_rollup_property_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


