# SubContractor3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address2**](Address2.md) |  | [optional] 
**bank_account** | [**BankAccount2**](BankAccount2.md) |  | [optional] 
**business_type** | **str** | The sub contractors&#39; business type | [optional] 
**company_name** | **str** | The sub contractors&#39; company name | [optional] 
**company_registration_number** | **str** | The sub contractors&#39; company registration number | [optional] 
**deactivated** | **bool** | The sub contractors&#39; deactivated | [optional] 
**effective_date** | **date** | The sub contractors&#39; effective date | [optional] 
**first_name** | **str** | The sub contractors&#39; first name | [optional] 
**initials** | **str** | The sub contractors&#39; initials | [optional] 
**last_name** | **str** | The sub contractors&#39; last name | [optional] 
**meta_data** | **object** | The sub contractors&#39; meta data | [optional] 
**middle_name** | **str** | The sub contractors&#39; middle name | [optional] 
**next_revision_date** | **date** | The sub contractors&#39; next revision date | [optional] 
**ni_number** | **str** | The sub contractors&#39; ni number | [optional] 
**partnership_name** | **str** | The sub contractors&#39; partnership name | [optional] 
**partnership_unique_tax_reference** | **str** | The sub contractors&#39; partnership unique tax reference | [optional] 
**pay_frequency** | **str** | The sub contractors&#39; pay frequency | [optional] 
**payment_method** | **str** | The sub contractors&#39; payment method | [optional] 
**region** | **str** | The sub contractors&#39; region | [optional] 
**revision** | **int** | The sub contractors&#39; revision | [optional] 
**taxation_status** | **str** | The sub contractors&#39; taxation status | [optional] 
**telephone** | **str** | The sub contractors&#39; telephone | [optional] 
**territory** | **str** | The sub contractors&#39; territory | [optional] 
**title** | **str** | The sub contractors&#39; title | [optional] 
**trading_name** | **str** | The sub contractors&#39; trading name | [optional] 
**unique_tax_reference** | **str** | The sub contractors&#39; unique tax reference | [optional] 
**vat_registered** | **bool** | The sub contractors&#39; vat registered | [optional] 
**vat_registration_number** | **str** | The sub contractors&#39; vat registration number | [optional] 
**verification_date** | **datetime** | The sub contractors&#39; verification date | [optional] 
**verification_number** | **str** | The sub contractors&#39; verification number | [optional] 
**works_number** | **str** | The sub contractors&#39; works number | [optional] 

## Example

```python
from openapi_client.models.sub_contractor3 import SubContractor3

# TODO update the JSON string below
json = "{}"
# create an instance of SubContractor3 from a JSON string
sub_contractor3_instance = SubContractor3.from_json(json)
# print the JSON string representation of the object
print(SubContractor3.to_json())

# convert the object into a dict
sub_contractor3_dict = sub_contractor3_instance.to_dict()
# create an instance of SubContractor3 from a dict
sub_contractor3_from_dict = SubContractor3.from_dict(sub_contractor3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


