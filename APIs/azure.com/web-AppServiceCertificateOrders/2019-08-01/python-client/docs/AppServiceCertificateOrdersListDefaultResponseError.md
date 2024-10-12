# AppServiceCertificateOrdersListDefaultResponseError

Error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**details** | [**List[AppServiceCertificateOrdersListDefaultResponseErrorDetailsInner]**](AppServiceCertificateOrdersListDefaultResponseErrorDetailsInner.md) |  | [optional] 
**innererror** | **str** | More information to debug error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_certificate_orders_list_default_response_error import AppServiceCertificateOrdersListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceCertificateOrdersListDefaultResponseError from a JSON string
app_service_certificate_orders_list_default_response_error_instance = AppServiceCertificateOrdersListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(AppServiceCertificateOrdersListDefaultResponseError.to_json())

# convert the object into a dict
app_service_certificate_orders_list_default_response_error_dict = app_service_certificate_orders_list_default_response_error_instance.to_dict()
# create an instance of AppServiceCertificateOrdersListDefaultResponseError from a dict
app_service_certificate_orders_list_default_response_error_from_dict = AppServiceCertificateOrdersListDefaultResponseError.from_dict(app_service_certificate_orders_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


