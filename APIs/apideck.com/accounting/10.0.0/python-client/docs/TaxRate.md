# TaxRate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Tax code assigned to identify this tax rate. | [optional] 
**components** | [**List[TaxComponentsInner]**](TaxComponentsInner.md) |  | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**description** | **str** | Description of tax rate | [optional] 
**effective_tax_rate** | **float** | Effective tax rate | [optional] 
**id** | **str** | ID assigned to identify this tax rate. | [optional] 
**name** | **str** | Name assigned to identify this tax rate. | [optional] 
**original_tax_rate_id** | **str** | ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities. | [optional] 
**report_tax_type** | **str** | Report Tax type to aggregate tax collected or paid for reporting purposes | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**status** | **str** | Tax rate status | [optional] 
**tax_payable_account_id** | **str** | Unique identifier for the account for tax collected. | [optional] 
**tax_remitted_account_id** | **str** | Unique identifier for the account for tax remitted. | [optional] 
**total_tax_rate** | **float** | Not compounded sum of the components of a tax rate | [optional] 
**type** | **str** | Tax type used to indicate the source of tax collected or paid | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tax_rate import TaxRate

# TODO update the JSON string below
json = "{}"
# create an instance of TaxRate from a JSON string
tax_rate_instance = TaxRate.from_json(json)
# print the JSON string representation of the object
print(TaxRate.to_json())

# convert the object into a dict
tax_rate_dict = tax_rate_instance.to_dict()
# create an instance of TaxRate from a dict
tax_rate_from_dict = TaxRate.from_dict(tax_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


