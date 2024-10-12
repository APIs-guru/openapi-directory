# PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspsp_id** | **str** | Identification of ASPSP | 
**flags** | **List[str]** | Request information flags which can influence the behaviour or returned data | [optional] 
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**tpp_redirect_uri** | **str** | Call back uri | 
**x_request_id** | **str** | Request id given by the client | 

## Example

```python
from openapi_client.models.post_payments_cross_border_credit_transfers_consents_params_body_request_info import PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo from a JSON string
post_payments_cross_border_credit_transfers_consents_params_body_request_info_instance = PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo.to_json())

# convert the object into a dict
post_payments_cross_border_credit_transfers_consents_params_body_request_info_dict = post_payments_cross_border_credit_transfers_consents_params_body_request_info_instance.to_dict()
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo from a dict
post_payments_cross_border_credit_transfers_consents_params_body_request_info_from_dict = PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo.from_dict(post_payments_cross_border_credit_transfers_consents_params_body_request_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


