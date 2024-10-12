# Merchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**language** | **str** | language code according to ISO 639-1. For the United States - EN | [optional] 
**main_location_id** | **str** | The main location ID of the merchant | [optional] 
**name** | **str** | The name of the merchant | [optional] 
**owner_id** | **str** |  | [optional] 
**service_charges** | [**List[ServiceCharge]**](ServiceCharge.md) |  | [optional] 
**status** | **str** | Status of this merchant. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.merchant import Merchant

# TODO update the JSON string below
json = "{}"
# create an instance of Merchant from a JSON string
merchant_instance = Merchant.from_json(json)
# print the JSON string representation of the object
print(Merchant.to_json())

# convert the object into a dict
merchant_dict = merchant_instance.to_dict()
# create an instance of Merchant from a dict
merchant_from_dict = Merchant.from_dict(merchant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


