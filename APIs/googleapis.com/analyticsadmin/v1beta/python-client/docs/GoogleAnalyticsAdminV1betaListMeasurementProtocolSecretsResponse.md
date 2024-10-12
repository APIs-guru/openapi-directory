# GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse

Response message for ListMeasurementProtocolSecret RPC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**measurement_protocol_secrets** | [**List[GoogleAnalyticsAdminV1betaMeasurementProtocolSecret]**](GoogleAnalyticsAdminV1betaMeasurementProtocolSecret.md) | A list of secrets for the parent stream specified in the request. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_list_measurement_protocol_secrets_response import GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse from a JSON string
google_analytics_admin_v1beta_list_measurement_protocol_secrets_response_instance = GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_list_measurement_protocol_secrets_response_dict = google_analytics_admin_v1beta_list_measurement_protocol_secrets_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse from a dict
google_analytics_admin_v1beta_list_measurement_protocol_secrets_response_from_dict = GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse.from_dict(google_analytics_admin_v1beta_list_measurement_protocol_secrets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


