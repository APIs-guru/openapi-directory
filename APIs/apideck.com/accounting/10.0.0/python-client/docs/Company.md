# Company


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abn_branch** | **str** | An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity. | [optional] 
**abn_or_tfn** | **str** | An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia. | [optional] 
**acn** | **str** | The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank. | [optional] 
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**annual_revenue** | **str** | The annual revenue of the company | [optional] 
**bank_accounts** | [**List[BankAccount]**](BankAccount.md) |  | [optional] 
**birthday** | **date** | The date of birth of the person. | [optional] 
**created_at** | **datetime** | Creation date | [optional] [readonly] 
**created_by** | **str** | Created by user ID | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**deleted** | **bool** | Whether the company is deleted or not | [optional] [readonly] 
**description** | **str** | A description of the company | [optional] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**fax** | **str** | The fax number of the company | [optional] 
**first_name** | **str** | The first name of the person. | [optional] 
**id** | **str** | Unique identifier for the company | [optional] [readonly] 
**image** | **str** | The Image URL of the company | [optional] 
**industry** | **str** | The industry represents the type of business the company is in. | [optional] 
**interaction_count** | **int** | Number of interactions | [optional] [readonly] 
**last_activity_at** | **datetime** | Last activity date | [optional] [readonly] 
**last_name** | **str** | The last name of the person. | [optional] 
**name** | **str** | Name of the company | 
**number_of_employees** | **str** | Number of employees | [optional] 
**owner_id** | **str** | Owner ID | [optional] 
**ownership** | **str** | The ownership indicates the type of ownership of the company. | [optional] 
**parent_id** | **str** | Parent ID | [optional] [readonly] 
**payee_number** | **str** | A payee number is a unique number that identifies a payee for tax purposes. | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**read_only** | **bool** | Whether the company is read-only or not | [optional] 
**row_type** | [**CompanyRowType**](CompanyRowType.md) |  | [optional] 
**sales_tax_number** | **str** | A sales tax number is a unique number that identifies a company for tax purposes. | [optional] 
**salutation** | **str** | A formal salutation for the person. For example, &#39;Mr&#39;, &#39;Mrs&#39; | [optional] 
**social_links** | [**List[SocialLink]**](SocialLink.md) |  | [optional] 
**status** | **str** | The status of the company | [optional] 
**tags** | **List[str]** |  | [optional] 
**updated_at** | **datetime** | Last updated date | [optional] [readonly] 
**updated_by** | **str** | Updated by user ID | [optional] [readonly] 
**vat_number** | **str** | The VAT number of the company | [optional] 
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


