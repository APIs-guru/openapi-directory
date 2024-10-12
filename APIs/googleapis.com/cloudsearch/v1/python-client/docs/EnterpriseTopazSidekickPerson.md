# EnterpriseTopazSidekickPerson

Person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity_level** | **str** | The level of affinity this person has with the requesting user. | [optional] 
**attending_status** | **str** | Attendance status of the person when included in a meeting event. | [optional] 
**email** | **str** | Email. | [optional] 
**gaia_id** | **str** | Gaia id. | [optional] 
**is_group** | **bool** | Whether the invitee is a group. | [optional] 
**name** | **str** | Name. | [optional] 
**obfuscated_gaia_id** | **str** | Obfuscated Gaia id. | [optional] 
**photo_url** | **str** | Absolute URL to the profile photo of the person. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_person import EnterpriseTopazSidekickPerson

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickPerson from a JSON string
enterprise_topaz_sidekick_person_instance = EnterpriseTopazSidekickPerson.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickPerson.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_person_dict = enterprise_topaz_sidekick_person_instance.to_dict()
# create an instance of EnterpriseTopazSidekickPerson from a dict
enterprise_topaz_sidekick_person_from_dict = EnterpriseTopazSidekickPerson.from_dict(enterprise_topaz_sidekick_person_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


