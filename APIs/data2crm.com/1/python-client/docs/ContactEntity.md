# ContactEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**List[Address]**](Address.md) | Address | [optional] 
**birth_date** | **date** | Birth Date | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**department** | **str** | Department | [optional] 
**description** | **str** | Description | [optional] 
**do_not_call** | **bool** | Do Not Call | [optional] 
**email** | [**List[Email]**](Email.md) | Email | [optional] 
**first_name** | **str** | First Name | [optional] 
**id** | **str** | Contact Identifier | [optional] 
**last_name** | **str** | Last Name | [optional] 
**lead_source** | **str** | Lead Source | [optional] 
**messenger** | [**List[Messenger]**](Messenger.md) | Messenger | [optional] 
**middle_name** | **str** | Middle Name | [optional] 
**name_suffix** | **str** | Name Suffix | [optional] 
**phone** | [**List[Phone]**](Phone.md) | Phone | [optional] 
**position** | **str** | Position (job) | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**salutation** | **str** | Salutation | [optional] 
**sync_to_outlook** | **bool** | Sync To Outlook | [optional] 
**type** | **str** | Type | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 
**website** | [**List[Website]**](Website.md) | Website | [optional] 

## Example

```python
from openapi_client.models.contact_entity import ContactEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ContactEntity from a JSON string
contact_entity_instance = ContactEntity.from_json(json)
# print the JSON string representation of the object
print(ContactEntity.to_json())

# convert the object into a dict
contact_entity_dict = contact_entity_instance.to_dict()
# create an instance of ContactEntity from a dict
contact_entity_from_dict = ContactEntity.from_dict(contact_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


