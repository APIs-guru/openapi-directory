# PGApiExpireTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Fixed length, 32 AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Card ID received from a tokenization request. | 
**developer_id** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 32 AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.  | [optional] 
**echo_fields** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;This field contains a JSON array of field data that will be echoed back in the response message. | [optional] 
**loc_id** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 4 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request. | [optional] 
**merchant_id** | **int** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 12 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Unique identifier on the Qualpay system. | 
**profile_id** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Fixed length, 20 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Explicitly identifies which Payment Gateway profile should be used for the request. | [optional] 
**report_data** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager. | [optional] 
**retry_attempt** | **int** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 4 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;This field contains a number greater than zero (0). When the value is one (1), the payment gateway treats the message as a new message. If the value is greater than one (1), then the payment gateway will return the result of the original message. If the original message did not complete, the payment gateway treats the message as a new message.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;This field is required when the retry_id is present in the request message. | [optional] 
**retry_id** | **int** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 15 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;This field contains a merchant generated number used to identify the request. This value must be unique within the last 24 hours. When present, the payment gateway will use the retry_attempt to determine whether the message is new or a retry of a previous message. | [optional] 
**session_id** | **str** | INTERNAL USE ONLY. | [optional] 
**user_id** | **int** | INTERNAL USE ONLY. | [optional] 
**vendor_id** | **int** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 12 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Identifies the vendor to which this expire token request applies. | [optional] 

## Example

```python
from openapi_client.models.pg_api_expire_token_request import PGApiExpireTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PGApiExpireTokenRequest from a JSON string
pg_api_expire_token_request_instance = PGApiExpireTokenRequest.from_json(json)
# print the JSON string representation of the object
print(PGApiExpireTokenRequest.to_json())

# convert the object into a dict
pg_api_expire_token_request_dict = pg_api_expire_token_request_instance.to_dict()
# create an instance of PGApiExpireTokenRequest from a dict
pg_api_expire_token_request_from_dict = PGApiExpireTokenRequest.from_dict(pg_api_expire_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


