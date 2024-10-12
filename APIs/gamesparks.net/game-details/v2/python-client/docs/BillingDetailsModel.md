# BillingDetailsModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**building** | **str** |  | 
**city** | **str** |  | 
**company_name** | **str** |  | 
**country** | **str** |  | 
**email1** | **str** |  | 
**email2** | **str** |  | [optional] 
**email3** | **str** |  | [optional] 
**first_name1** | **str** |  | 
**first_name2** | **str** |  | [optional] 
**first_name3** | **str** |  | [optional] 
**last_name1** | **str** |  | 
**last_name2** | **str** |  | [optional] 
**last_name3** | **str** |  | [optional] 
**postcode** | **str** |  | 
**state** | **str** |  | [optional] 
**street** | **str** |  | 
**tax_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.billing_details_model import BillingDetailsModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillingDetailsModel from a JSON string
billing_details_model_instance = BillingDetailsModel.from_json(json)
# print the JSON string representation of the object
print(BillingDetailsModel.to_json())

# convert the object into a dict
billing_details_model_dict = billing_details_model_instance.to_dict()
# create an instance of BillingDetailsModel from a dict
billing_details_model_from_dict = BillingDetailsModel.from_dict(billing_details_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


