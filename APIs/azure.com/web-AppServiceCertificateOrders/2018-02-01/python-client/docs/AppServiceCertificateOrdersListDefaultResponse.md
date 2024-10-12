# AppServiceCertificateOrdersListDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AppServiceCertificateOrdersListDefaultResponseError**](AppServiceCertificateOrdersListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_service_certificate_orders_list_default_response import AppServiceCertificateOrdersListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceCertificateOrdersListDefaultResponse from a JSON string
app_service_certificate_orders_list_default_response_instance = AppServiceCertificateOrdersListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AppServiceCertificateOrdersListDefaultResponse.to_json())

# convert the object into a dict
app_service_certificate_orders_list_default_response_dict = app_service_certificate_orders_list_default_response_instance.to_dict()
# create an instance of AppServiceCertificateOrdersListDefaultResponse from a dict
app_service_certificate_orders_list_default_response_from_dict = AppServiceCertificateOrdersListDefaultResponse.from_dict(app_service_certificate_orders_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


