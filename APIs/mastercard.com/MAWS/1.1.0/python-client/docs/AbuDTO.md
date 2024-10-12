# AbuDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discretionary_data** | **str** | Optional data that can be used by the requested for matching to the original inquiry. | [optional] 
**ica** | **str** | &lt;p class&#x3D;&#39;suffix-required&#39; style&#x3D;&#39;margin-bottom:5px&#39;&gt;[This field is required when the multiple ICAs are registered under the same client key.]&lt;/p&gt;Data that can be used to inform the ICA number: Interbank Card Association. | [optional] 
**merchant_id** | **str** | Registered merchant ID that is mapped to the Customer ID. | 
**old_account_number** | **str** | Account number on file provided by merchant. | 
**old_expiration_date** | **str** | Account number expiration date on file provided by merchant that must be in MMYY format. | 
**sub_merchant_id** | **str** | Optionally populated when the merchant ID is actually a previously populated payment facilitator or payment aggregator. | [optional] 
**subscribe** | **str** | &lt;p class&#x3D;\&quot;suffix-required\&quot; style&#x3D;\&quot;margin-bottom:5px\&quot;&gt;[Field used by Push Model only - REQUIRED]&lt;/p&gt;Optional data that can be used to subscribe, un-subscribe or query subscription status for PAN updates. Valid values are \&quot;subscribe\&quot;, \&quot;un-subscribe\&quot; and \&quot;query\&quot;. | [optional] 

## Example

```python
from openapi_client.models.abu_dto import AbuDTO

# TODO update the JSON string below
json = "{}"
# create an instance of AbuDTO from a JSON string
abu_dto_instance = AbuDTO.from_json(json)
# print the JSON string representation of the object
print(AbuDTO.to_json())

# convert the object into a dict
abu_dto_dict = abu_dto_instance.to_dict()
# create an instance of AbuDTO from a dict
abu_dto_from_dict = AbuDTO.from_dict(abu_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


