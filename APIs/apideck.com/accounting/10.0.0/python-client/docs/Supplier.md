# Supplier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**bank_accounts** | [**List[BankAccount]**](BankAccount.md) |  | [optional] 
**channel** | **str** | The channel through which the transaction is processed. | [optional] 
**company_name** | **str** | The name of the company. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**display_id** | **str** | Display ID | [optional] 
**display_name** | **str** | Display name | [optional] 
**downstream_id** | **str** | The third-party API ID of original entity | [optional] [readonly] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**first_name** | **str** | The first name of the person. | [optional] 
**id** | **str** | A unique identifier for an object. | [readonly] 
**individual** | **bool** | Is this an individual or business supplier | [optional] 
**last_name** | **str** | The last name of the person. | [optional] 
**middle_name** | **str** | Middle name of the person. | [optional] 
**notes** | **str** | Some notes about this supplier | [optional] 
**payment_method** | **str** | Payment method used for the transaction, such as cash, credit card, bank transfer, or check | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**status** | **str** | Supplier status | [optional] 
**suffix** | **str** |  | [optional] 
**tax_number** | **str** |  | [optional] 
**tax_rate** | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
**title** | **str** | The job title of the person. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 
**websites** | [**List[Website]**](Website.md) |  | [optional] 

## Example

```python
from openapi_client.models.supplier import Supplier

# TODO update the JSON string below
json = "{}"
# create an instance of Supplier from a JSON string
supplier_instance = Supplier.from_json(json)
# print the JSON string representation of the object
print(Supplier.to_json())

# convert the object into a dict
supplier_dict = supplier_instance.to_dict()
# create an instance of Supplier from a dict
supplier_from_dict = Supplier.from_dict(supplier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


