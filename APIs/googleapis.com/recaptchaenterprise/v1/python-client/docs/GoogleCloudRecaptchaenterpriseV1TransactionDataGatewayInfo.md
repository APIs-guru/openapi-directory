# GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo

Details about the transaction from the gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avs_response_code** | **str** | Optional. AVS response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization). | [optional] 
**cvv_response_code** | **str** | Optional. CVV response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization). | [optional] 
**gateway_response_code** | **str** | Optional. Gateway response code describing the state of the transaction. | [optional] 
**name** | **str** | Optional. Name of the gateway service (for example, stripe, square, paypal). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_transaction_data_gateway_info import GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo from a JSON string
google_cloud_recaptchaenterprise_v1_transaction_data_gateway_info_instance = GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_transaction_data_gateway_info_dict = google_cloud_recaptchaenterprise_v1_transaction_data_gateway_info_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo from a dict
google_cloud_recaptchaenterprise_v1_transaction_data_gateway_info_from_dict = GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo.from_dict(google_cloud_recaptchaenterprise_v1_transaction_data_gateway_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


