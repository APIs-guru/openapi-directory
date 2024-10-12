# EnterpriseTopazSidekickCommonPerson

Common representation of a person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**birthday** | [**EnterpriseTopazSidekickCommonPersonBirthday**](EnterpriseTopazSidekickCommonPersonBirthday.md) |  | [optional] 
**cell_phone** | **str** | Cell phone number. | [optional] 
**department** | **str** | The department the person works in (e.g. Engineering). | [optional] 
**desk_location** | **str** | Desk location (e.g. US-MTV-PR55-5-5B1I). | [optional] 
**desk_phone** | **str** | Work desk phone number. | [optional] 
**display_name** | **str** | The full name. | [optional] 
**email** | **str** | Email. | [optional] 
**family_name** | **str** | The last name. | [optional] 
**full_address** | **str** | The fully formatted address (e.g. 1255 Pear Avenue, Mountain View 94043, United States). | [optional] 
**gaia_id** | **str** | This field is deprecated. The obfuscated_id should be used instead. | [optional] 
**given_name** | **str** | The first name. | [optional] 
**job_title** | **str** | The person&#39;s job title (e.g. Software Engineer). | [optional] 
**manager** | [**EnterpriseTopazSidekickCommonPerson**](EnterpriseTopazSidekickCommonPerson.md) |  | [optional] 
**obfuscated_id** | **str** | The obfuscated GAIA ID. | [optional] 
**photo_url** | **str** | The URL for the Focus profile picture. | [optional] 
**street_address** | **str** | The street address (e.g. 1255 Pear Avenue). | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_common_person import EnterpriseTopazSidekickCommonPerson

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickCommonPerson from a JSON string
enterprise_topaz_sidekick_common_person_instance = EnterpriseTopazSidekickCommonPerson.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickCommonPerson.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_common_person_dict = enterprise_topaz_sidekick_common_person_instance.to_dict()
# create an instance of EnterpriseTopazSidekickCommonPerson from a dict
enterprise_topaz_sidekick_common_person_from_dict = EnterpriseTopazSidekickCommonPerson.from_dict(enterprise_topaz_sidekick_common_person_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


