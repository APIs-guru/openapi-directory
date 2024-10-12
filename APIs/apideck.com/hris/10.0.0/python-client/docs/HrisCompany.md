# HrisCompany


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**company_number** | **str** | An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**debtor_id** | **str** |  | [optional] 
**deleted** | **bool** |  | [optional] [readonly] 
**display_name** | **str** |  | [optional] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**legal_name** | **str** |  | 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**status** | **str** |  | [optional] 
**subdomain** | **str** |  | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 
**websites** | [**List[Website]**](Website.md) |  | [optional] 

## Example

```python
from openapi_client.models.hris_company import HrisCompany

# TODO update the JSON string below
json = "{}"
# create an instance of HrisCompany from a JSON string
hris_company_instance = HrisCompany.from_json(json)
# print the JSON string representation of the object
print(HrisCompany.to_json())

# convert the object into a dict
hris_company_dict = hris_company_instance.to_dict()
# create an instance of HrisCompany from a dict
hris_company_from_dict = HrisCompany.from_dict(hris_company_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


