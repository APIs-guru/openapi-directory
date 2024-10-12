# PostPaymentsCrossBorderCreditTransfersParamsBodyRequestInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspsp_id** | **str** | Identification of ASPSP | 
**authorization** | **str** | The authorization query / data received after PSU has authorized the consent | 
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**x_request_id** | **str** | Request id given by the client | 

## Example

```python
from openapi_client.models.post_payments_cross_border_credit_transfers_params_body_request_info import PostPaymentsCrossBorderCreditTransfersParamsBodyRequestInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsCrossBorderCreditTransfersParamsBodyRequestInfo from a JSON string
post_payments_cross_border_credit_transfers_params_body_request_info_instance = PostPaymentsCrossBorderCreditTransfersParamsBodyRequestInfo.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsCrossBorderCreditTransfersParamsBodyRequestInfo.to_json())

# convert the object into a dict
post_payments_cross_border_credit_transfers_params_body_request_info_dict = post_payments_cross_border_credit_transfers_params_body_request_info_instance.to_dict()
# create an instance of PostPaymentsCrossBorderCreditTransfersParamsBodyRequestInfo from a dict
post_payments_cross_border_credit_transfers_params_body_request_info_from_dict = PostPaymentsCrossBorderCreditTransfersParamsBodyRequestInfo.from_dict(post_payments_cross_border_credit_transfers_params_body_request_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


