# AppServiceCertificateOrdersResendRequestEmailsRequest

Identifies an object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the object. | [optional] 

## Example

```python
from openapi_client.models.app_service_certificate_orders_resend_request_emails_request import AppServiceCertificateOrdersResendRequestEmailsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceCertificateOrdersResendRequestEmailsRequest from a JSON string
app_service_certificate_orders_resend_request_emails_request_instance = AppServiceCertificateOrdersResendRequestEmailsRequest.from_json(json)
# print the JSON string representation of the object
print(AppServiceCertificateOrdersResendRequestEmailsRequest.to_json())

# convert the object into a dict
app_service_certificate_orders_resend_request_emails_request_dict = app_service_certificate_orders_resend_request_emails_request_instance.to_dict()
# create an instance of AppServiceCertificateOrdersResendRequestEmailsRequest from a dict
app_service_certificate_orders_resend_request_emails_request_from_dict = AppServiceCertificateOrdersResendRequestEmailsRequest.from_dict(app_service_certificate_orders_resend_request_emails_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


