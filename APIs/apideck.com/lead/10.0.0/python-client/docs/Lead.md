# Lead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**company_id** | **str** | The company the lead is associated with. | [optional] 
**company_name** | **str** | The name of the company the lead is associated with. | 
**created_at** | **str** | Date created in ISO 8601 format | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**description** | **str** | The description of the lead. | [optional] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**fax** | **str** | The fax number of the lead. | [optional] 
**first_name** | **str** | The first name of the lead. | [optional] 
**id** | **str** | Unique identifier for the contact. | [optional] [readonly] 
**language** | **str** | language code according to ISO 639-1. For the United States - EN | [optional] 
**last_name** | **str** | The last name of the lead. | [optional] 
**lead_id** | **str** | The identifier of the lead. | [optional] 
**lead_source** | **str** | The source of the lead. | [optional] 
**monetary_amount** | **float** | The monetary amount of the lead. | [optional] 
**name** | **str** | Full name of the lead. | 
**owner_id** | **str** | The owner of the lead. | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**prefix** | **str** | The prefix of the lead. | [optional] 
**social_links** | [**List[SocialLink]**](SocialLink.md) |  | [optional] 
**status** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**title** | **str** | The job title of the lead. | [optional] 
**updated_at** | **str** | Date updated in ISO 8601 format | [optional] [readonly] 
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


