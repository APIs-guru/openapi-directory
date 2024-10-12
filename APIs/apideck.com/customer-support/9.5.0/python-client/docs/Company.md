# Company


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abn_branch** | **str** | An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity. | [optional] 
**abn_or_tfn** | **str** | An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia. | [optional] 
**acn** | **str** | The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank. | [optional] 
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**annual_revenue** | **str** | Annual revenue | [optional] 
**bank_accounts** | [**List[BankAccount]**](BankAccount.md) |  | [optional] 
**birthday** | **date** | The date of birth of the person. | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**created_by** | **str** |  | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**deleted** | **bool** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**fax** | **str** |  | [optional] 
**first_name** | **str** | The first name of the person. | [optional] 
**id** | **str** |  | [optional] [readonly] 
**image** | **str** |  | [optional] 
**industry** | **str** | Industry | [optional] 
**interaction_count** | **int** |  | [optional] [readonly] 
**last_activity_at** | **datetime** |  | [optional] [readonly] 
**last_name** | **str** | The last name of the person. | [optional] 
**name** | **str** |  | 
**number_of_employees** | **str** | Number of employees | [optional] 
**owner_id** | **str** |  | [optional] 
**ownership** | **str** | Ownership | [optional] 
**parent_id** | **str** | Parent ID | [optional] [readonly] 
**payee_number** | **str** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**read_only** | **bool** |  | [optional] 
**row_type** | [**CompanyRowType**](CompanyRowType.md) |  | [optional] 
**sales_tax_number** | **str** |  | [optional] 
**salutation** | **str** | A formal salutation for the person. For example, &#39;Mr&#39;, &#39;Mrs&#39; | [optional] 
**social_links** | [**List[SocialLink]**](SocialLink.md) |  | [optional] 
**status** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**updated_by** | **str** |  | [optional] [readonly] 
**vat_number** | **str** | VAT number | [optional] 
**websites** | [**List[Website]**](Website.md) |  | [optional] 

## Example

```python
from openapi_client.models.company import Company

# TODO update the JSON string below
json = "{}"
# create an instance of Company from a JSON string
company_instance = Company.from_json(json)
# print the JSON string representation of the object
print(Company.to_json())

# convert the object into a dict
company_dict = company_instance.to_dict()
# create an instance of Company from a dict
company_from_dict = Company.from_dict(company_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


