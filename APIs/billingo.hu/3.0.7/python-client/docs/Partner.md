# Partner


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
**id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.partner import Partner

# TODO update the JSON string below
json = "{}"
# create an instance of Partner from a JSON string
partner_instance = Partner.from_json(json)
# print the JSON string representation of the object
print(Partner.to_json())

# convert the object into a dict
partner_dict = partner_instance.to_dict()
# create an instance of Partner from a dict
partner_from_dict = Partner.from_dict(partner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


