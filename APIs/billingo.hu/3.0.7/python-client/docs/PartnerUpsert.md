# PartnerUpsert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** |  | [optional] 
**address** | [**Address**](Address.md) |  | 
**emails** | **List[str]** |  | [optional] 
**general_ledger_number** | **str** |  | [optional] 
**iban** | **str** |  | [optional] 
**name** | **str** |  | 
**phone** | **str** |  | [optional] 
**swift** | **str** |  | [optional] 
**taxcode** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.partner_upsert import PartnerUpsert

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerUpsert from a JSON string
partner_upsert_instance = PartnerUpsert.from_json(json)
# print the JSON string representation of the object
print(PartnerUpsert.to_json())

# convert the object into a dict
partner_upsert_dict = partner_upsert_instance.to_dict()
# create an instance of PartnerUpsert from a dict
partner_upsert_from_dict = PartnerUpsert.from_dict(partner_upsert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


