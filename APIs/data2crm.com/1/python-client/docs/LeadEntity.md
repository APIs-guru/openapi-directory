# LeadEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**List[Address]**](Address.md) | Address | [optional] 
**annual_revenue** | **str** | Annual Revenue | [optional] 
**birth_date** | **date** | Birth Date | [optional] 
**company** | **str** | Company | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**department** | **str** | Department | [optional] 
**description** | **str** | Description | [optional] 
**do_not_call** | **bool** | Do Not Call | [optional] 
**email** | [**List[Email]**](Email.md) | Email | [optional] 
**first_name** | **str** | First Name | [optional] 
**id** | **str** | Lead Identifier | [optional] 
**industry** | **List[str]** | Industry | [optional] 
**last_name** | **str** | Last Name | [optional] 
**messenger** | [**List[Messenger]**](Messenger.md) | Messenger | [optional] 
**middle_name** | **str** | Middle Name | [optional] 
**name_suffix** | **str** | Name Suffix | [optional] 
**phone** | [**List[Phone]**](Phone.md) | Phone | [optional] 
**position** | **str** | Position (job) | [optional] 
**rating** | **str** | Rating | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**salutation** | **str** | Salutation | [optional] 
**source** | **str** | Lead Source | [optional] 
**source_description** | **str** | Lead Source Description | [optional] 
**status** | **str** | Status | [optional] 
**status_description** | **str** | Status Description | [optional] 
**type** | **str** | Type | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 
**website** | [**List[Website]**](Website.md) | Website | [optional] 

## Example

```python
from openapi_client.models.lead_entity import LeadEntity

# TODO update the JSON string below
json = "{}"
# create an instance of LeadEntity from a JSON string
lead_entity_instance = LeadEntity.from_json(json)
# print the JSON string representation of the object
print(LeadEntity.to_json())

# convert the object into a dict
lead_entity_dict = lead_entity_instance.to_dict()
# create an instance of LeadEntity from a dict
lead_entity_from_dict = LeadEntity.from_dict(lead_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


