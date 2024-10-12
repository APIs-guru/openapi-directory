# CompanyInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**automated_sales_tax** | **bool** | Whether sales tax is calculated automatically for the company | [optional] 
**company_name** | **str** | The name of the company. | [optional] 
**company_start_date** | **date** | Date when company file was created | [optional] 
**country** | **str** | country code according to ISO 3166-1 alpha-2. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**default_sales_tax** | [**TaxRate**](TaxRate.md) |  | [optional] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**fiscal_year_start_month** | **str** | The start month of fiscal year. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**language** | **str** | language code according to ISO 639-1. For the United States - EN | [optional] 
**legal_name** | **str** | The legal name of the company | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**sales_tax_enabled** | **bool** | Whether sales tax is enabled for the company | [optional] 
**sales_tax_number** | **str** |  | [optional] 
**status** | **str** | Based on the status some functionality is enabled or disabled. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.company_info import CompanyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CompanyInfo from a JSON string
company_info_instance = CompanyInfo.from_json(json)
# print the JSON string representation of the object
print(CompanyInfo.to_json())

# convert the object into a dict
company_info_dict = company_info_instance.to_dict()
# create an instance of CompanyInfo from a dict
company_info_from_dict = CompanyInfo.from_dict(company_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


