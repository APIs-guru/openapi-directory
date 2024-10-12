# CompanyProfileDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity** | [**ArrayOfActivityDTO**](ArrayOfActivityDTO.md) |  | [optional] 
**activity_declaration** | [**ArrayOfActivityDeclarationDTO**](ArrayOfActivityDeclarationDTO.md) |  | [optional] 
**addresses** | [**ArrayOfAddressDTO**](ArrayOfAddressDTO.md) |  | [optional] 
**agent_address** | **str** |  | [optional] 
**agent_name** | **str** |  | [optional] 
**aliases** | [**ArrayOfString**](ArrayOfString.md) |  | [optional] 
**appointment_date_of_official** | **str** |  | [optional] 
**capital** | [**ArrayOfCapitalDTO**](ArrayOfCapitalDTO.md) |  | [optional] 
**code** | **str** |  | [optional] 
**company_name_in_english** | **str** |  | [optional] 
**var_date** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**fax_number** | **str** |  | [optional] 
**fiscal_code** | **str** |  | [optional] 
**foundation_date** | **str** |  | [optional] 
**functions** | [**ArrayOfString**](ArrayOfString.md) |  | [optional] 
**headquarters** | **str** |  | [optional] 
**key_figures** | [**ArrayOfString**](ArrayOfString.md) |  | [optional] 
**last_annual_account_date** | **str** |  | [optional] 
**legal_form** | **str** |  | [optional] 
**legal_form_declaration** | **str** |  | [optional] 
**legal_form_details** | [**LegalFormDTO**](LegalFormDTO.md) |  | [optional] 
**legal_status** | **str** |  | [optional] 
**mailing_address** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**official** | **bool** |  | [optional] 
**registration_authority** | **str** |  | [optional] 
**registration_authority_code** | **str** |  | [optional] 
**registration_date** | **str** |  | [optional] 
**registration_number** | **str** |  | [optional] 
**signing_declaration** | **str** |  | [optional] 
**signing_declaration_description** | **str** |  | [optional] 
**signing_language** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**state_of_incorporation** | **str** |  | [optional] 
**telephone_number** | **str** |  | [optional] 
**vat_number** | **str** |  | [optional] 
**virtual_id** | **str** |  | [optional] 
**website_url** | **str** |  | [optional] 
**director_and_share_details** | [**DirectorAndShareDetails**](DirectorAndShareDetails.md) |  | [optional] 
**officers** | [**ArrayOfUSOfficerDTO**](ArrayOfUSOfficerDTO.md) |  | [optional] 

## Example

```python
from openapi_client.models.company_profile_dto import CompanyProfileDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CompanyProfileDTO from a JSON string
company_profile_dto_instance = CompanyProfileDTO.from_json(json)
# print the JSON string representation of the object
print(CompanyProfileDTO.to_json())

# convert the object into a dict
company_profile_dto_dict = company_profile_dto_instance.to_dict()
# create an instance of CompanyProfileDTO from a dict
company_profile_dto_from_dict = CompanyProfileDTO.from_dict(company_profile_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


