# AbuResultDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discretionary_data** | **str** | Discretionary data as in the request. | [optional] 
**ica** | **str** | ICA number as in the request. | [optional] 
**merchant_id** | **str** | Merchant ID as in the request. | [optional] 
**new_account_number** | **str** | New account number. | [optional] 
**new_expiration_date** | **str** | New account number expiration date, in MMYY format. | [optional] 
**old_account_number** | **str** | Account number on file as in the request. | [optional] 
**old_expiration_date** | **str** | Expiration date on file as in the request. | [optional] 
**reason_identifier** | **str** | Response Type based on requested account. | [optional] 
**response_indicator** | **str** | One character additional data, returned bases on  reasonIdentifier.(Note- ResponseIndicator displayed only when ReasonIdentifier is VALID or UNKNWN) | [optional] 
**sub_merchant_id** | **str** | SubMerchantID as in the request. | [optional] 
**subscription_identifier** | **str** | &lt;p class&#x3D;\&quot;suffix-required\&quot; style&#x3D;\&quot;margin-bottom:5px\&quot;&gt;[Field used by Push Model only]&lt;/p&gt; Response Type based on the status of subscribe/un-subscribe or query subscription status for PAN. | [optional] 
**subscription_indicator** | **str** | &lt;p class&#x3D;\&quot;suffix-required\&quot; style&#x3D;\&quot;margin-bottom:5px\&quot;&gt;[Field used by Push Model only]&lt;/p&gt; One character additional data, returned based on subscriptionIdentifier:&lt;ul&gt;&lt;li&gt;\&quot;S\&quot; for success&lt;/li&gt;&lt;li&gt;\&quot;F\&quot; for failures&lt;/li&gt;&lt;li&gt;\&quot;T\&quot; for token results.&lt;/li&gt;&lt;/ul&gt; | [optional] 

## Example

```python
from openapi_client.models.abu_result_dto import AbuResultDTO

# TODO update the JSON string below
json = "{}"
# create an instance of AbuResultDTO from a JSON string
abu_result_dto_instance = AbuResultDTO.from_json(json)
# print the JSON string representation of the object
print(AbuResultDTO.to_json())

# convert the object into a dict
abu_result_dto_dict = abu_result_dto_instance.to_dict()
# create an instance of AbuResultDTO from a dict
abu_result_dto_from_dict = AbuResultDTO.from_dict(abu_result_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


