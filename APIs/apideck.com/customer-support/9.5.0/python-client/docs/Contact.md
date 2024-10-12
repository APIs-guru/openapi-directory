# Contact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**birthday** | **str** |  | [optional] 
**company_id** | **str** |  | [optional] 
**company_name** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**current_balance** | **float** |  | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**department** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**email_domain** | **str** |  | [optional] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**fax** | **str** |  | [optional] 
**first_call_at** | **datetime** |  | [optional] [readonly] 
**first_email_at** | **datetime** |  | [optional] [readonly] 
**first_name** | **str** |  | [optional] 
**gender** | **str** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**image** | **str** |  | [optional] 
**language** | **str** | language code according to ISO 639-1. For the United States - EN | [optional] 
**last_activity_at** | **datetime** |  | [optional] [readonly] 
**last_name** | **str** |  | [optional] 
**lead_id** | **str** |  | [optional] 
**lead_source** | **str** |  | [optional] 
**middle_name** | **str** |  | [optional] 
**name** | **str** |  | 
**owner_id** | **str** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**photo_url** | **str** | The URL of the photo of a person. | [optional] 
**prefix** | **str** |  | [optional] 
**social_links** | [**List[SocialLink]**](SocialLink.md) |  | [optional] 
**status** | **str** |  | [optional] 
**suffix** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**websites** | [**List[Website]**](Website.md) |  | [optional] 

## Example

```python
from openapi_client.models.contact import Contact

# TODO update the JSON string below
json = "{}"
# create an instance of Contact from a JSON string
contact_instance = Contact.from_json(json)
# print the JSON string representation of the object
print(Contact.to_json())

# convert the object into a dict
contact_dict = contact_instance.to_dict()
# create an instance of Contact from a dict
contact_from_dict = Contact.from_dict(contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


