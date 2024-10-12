# Contact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | The active status of the contact. | [optional] 
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**birthday** | **str** | The birthday of the contact. | [optional] 
**company_id** | **str** | The company the contact is associated with. | [optional] 
**company_name** | **str** | The name of the company the contact is associated with. | [optional] 
**created_at** | **datetime** | The creation date of the contact. | [optional] [readonly] 
**current_balance** | **float** | The current balance of the contact. | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**department** | **str** | The department of the contact. | [optional] 
**description** | **str** | The description of the contact. | [optional] 
**email_domain** | **str** |  | [optional] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**fax** | **str** | The fax number of the contact. | [optional] 
**first_call_at** | **datetime** | The first call date of the contact. | [optional] [readonly] 
**first_email_at** | **datetime** | The first email date of the contact. | [optional] [readonly] 
**first_name** | **str** | The first name of the contact. | [optional] 
**gender** | **str** | The gender of the contact. | [optional] 
**id** | **str** | Unique identifier for the contact. | [optional] [readonly] 
**image** | **str** |  | [optional] 
**language** | **str** | language code according to ISO 639-1. For the United States - EN | [optional] 
**last_activity_at** | **datetime** | The last activity date of the contact. | [optional] [readonly] 
**last_name** | **str** | The last name of the contact. | [optional] 
**lead_id** | **str** | The lead the contact is associated with. | [optional] 
**lead_source** | **str** | The lead source of the contact. | [optional] 
**middle_name** | **str** | The middle name of the contact. | [optional] 
**name** | **str** | Full name of the contact. | 
**owner_id** | **str** | The owner of the contact. | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**photo_url** | **str** | The URL of the photo of a person. | [optional] 
**prefix** | **str** | The prefix of the contact. | [optional] 
**social_links** | [**List[SocialLink]**](SocialLink.md) |  | [optional] 
**status** | **str** | The status of the contact. | [optional] 
**suffix** | **str** | The suffix of the contact. | [optional] 
**tags** | **List[str]** |  | [optional] 
**title** | **str** | The job title of the contact. | [optional] 
**type** | **str** | The type of the contact. | [optional] 
**updated_at** | **datetime** | The last update date of the contact. | [optional] [readonly] 
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


