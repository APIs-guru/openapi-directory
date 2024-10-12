# CompanyDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**ArrayOfAddressDTO**](ArrayOfAddressDTO.md) |  | [optional] 
**aliases** | [**ArrayOfString**](ArrayOfString.md) |  | [optional] 
**code** | **str** |  | [optional] 
**company_id** | **str** |  | [optional] 
**var_date** | **str** |  | [optional] 
**function** | **str** |  | [optional] 
**legal_form** | **str** |  | [optional] 
**legal_status** | **str** |  | [optional] 
**more_key** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**official** | **bool** |  | [optional] 
**registration_authority** | **str** |  | [optional] 
**registration_authority_code** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**virtual_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.company_dto import CompanyDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CompanyDTO from a JSON string
company_dto_instance = CompanyDTO.from_json(json)
# print the JSON string representation of the object
print(CompanyDTO.to_json())

# convert the object into a dict
company_dto_dict = company_dto_instance.to_dict()
# create an instance of CompanyDTO from a dict
company_dto_from_dict = CompanyDTO.from_dict(company_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


