# SearchRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**b_address1** | **str** |  | [optional] 
**b_address2** | **str** |  | [optional] 
**b_city** | **str** |  | [optional] 
**b_country** | **str** |  | [optional] 
**b_email** | **str** |  | [optional] 
**b_name** | **str** |  | [optional] 
**b_phone** | **str** |  | [optional] 
**b_postal** | **str** |  | [optional] 
**b_province** | **str** |  | [optional] 
**customer_code** | **str** | The PaymentProfile ID used in this transaction, if appropriate. | [optional] 
**message_id** | **float** |  | [optional] 
**message_text** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**product_name** | **str** |  | [optional] 
**ref1** | **str** |  | [optional] 
**ref2** | **str** |  | [optional] 
**ref3** | **str** |  | [optional] 
**ref4** | **str** |  | [optional] 
**ref5** | **str** |  | [optional] 
**row_id** | **float** |  | [optional] 
**s_address1** | **str** |  | [optional] 
**s_address2** | **str** |  | [optional] 
**s_city** | **str** |  | [optional] 
**s_country** | **str** |  | [optional] 
**s_email** | **str** |  | [optional] 
**s_name** | **str** |  | [optional] 
**s_phone** | **str** |  | [optional] 
**s_postal** | **str** |  | [optional] 
**s_province** | **str** |  | [optional] 
**trn_amount** | **float** |  | [optional] 
**trn_approval_code** | **str** |  | [optional] 
**trn_avs_result** | **str** | Address Verification Service | [optional] 
**trn_batch_no** | **float** |  | [optional] 
**trn_card_expiry** | **str** |  | [optional] 
**trn_card_owner** | **str** |  | [optional] 
**trn_card_type** | **str** | MC VI etc | [optional] 
**trn_completions** | **float** |  | [optional] 
**trn_cvd_result** | **float** |  | [optional] 
**trn_date_time** | **str** | 2015-04-22T10:03:19.323-07:00 | [optional] 
**trn_id** | **float** |  | [optional] 
**trn_ip** | **str** |  | [optional] 
**trn_masked_card** | **str** | The credit card with the middle digits redacted with X&#39;s | [optional] 
**trn_order_number** | **str** |  | [optional] 
**trn_payment_method** | **str** |  | [optional] 
**trn_reference** | **float** |  | [optional] 
**trn_response** | **float** |  | [optional] 
**trn_returns** | **float** |  | [optional] 
**trn_type** | **str** |  | [optional] 
**trn_voided** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.search_record import SearchRecord

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRecord from a JSON string
search_record_instance = SearchRecord.from_json(json)
# print the JSON string representation of the object
print(SearchRecord.to_json())

# convert the object into a dict
search_record_dict = search_record_instance.to_dict()
# create an instance of SearchRecord from a dict
search_record_from_dict = SearchRecord.from_dict(search_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


