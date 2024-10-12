# Lead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**company_id** | **str** |  | [optional] 
**company_name** | **str** |  | 
**contact_id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**description** | **str** |  | [optional] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**fax** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**language** | **str** | language code according to ISO 639-1. For the United States - EN | [optional] 
**last_name** | **str** |  | [optional] 
**lead_source** | **str** |  | [optional] 
**monetary_amount** | **float** |  | [optional] 
**name** | **str** |  | 
**owner_id** | **str** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**prefix** | **str** |  | [optional] 
**social_links** | [**List[SocialLink]**](SocialLink.md) |  | [optional] 
**status** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**title** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] [readonly] 
**websites** | [**List[Website]**](Website.md) |  | [optional] 

## Example

```python
from openapi_client.models.lead import Lead

# TODO update the JSON string below
json = "{}"
# create an instance of Lead from a JSON string
lead_instance = Lead.from_json(json)
# print the JSON string representation of the object
print(Lead.to_json())

# convert the object into a dict
lead_dict = lead_instance.to_dict()
# create an instance of Lead from a dict
lead_from_dict = Lead.from_dict(lead_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


