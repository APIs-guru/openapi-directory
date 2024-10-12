# Applicant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**anonymized** | **bool** |  | [optional] 
**application_ids** | **List[str]** |  | [optional] 
**applications** | **List[str]** |  | [optional] 
**archived** | **bool** |  | [optional] 
**birthday** | **date** | The date of birth of the person. | [optional] 
**confidential** | **bool** |  | [optional] 
**coordinator_id** | **str** |  | [optional] 
**cover_letter** | **str** |  | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**cv_url** | **str** |  | [optional] [readonly] 
**deleted** | **bool** | Flag to indicate if the object is deleted. | [optional] 
**deleted_at** | **datetime** | The time at which the object was deleted. | [optional] [readonly] 
**deleted_by** | **str** | The user who deleted the object. | [optional] [readonly] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**first_name** | **str** | The first name of the person. | [optional] 
**followers** | **List[str]** |  | [optional] 
**headline** | **str** | Typically a list of previous companies where the contact has worked or schools that the contact has attended | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**initials** | **str** | The initials of the person, usually derived from their first, middle, and last names. | [optional] 
**job_url** | **str** |  | [optional] [readonly] 
**last_interaction_at** | **datetime** |  | [optional] [readonly] 
**last_name** | **str** | The last name of the person. | [optional] 
**middle_name** | **str** | Middle name of the person. | [optional] 
**name** | **str** | The name of an applicant. | [optional] 
**owner_id** | **str** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**photo_url** | **str** | The URL of the photo of a person. | [optional] 
**position_id** | **str** | The PositionId the applicant applied for. | [optional] 
**record_url** | **str** |  | [optional] 
**recruiter_id** | **str** |  | [optional] 
**rejected_at** | **datetime** |  | [optional] [readonly] 
**social_links** | [**List[ApplicantSocialLinksInner]**](ApplicantSocialLinksInner.md) |  | [optional] 
**source_id** | **str** |  | [optional] [readonly] 
**sourced_by** | **str** |  | [optional] [readonly] 
**sources** | **List[str]** |  | [optional] 
**stage_id** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**title** | **str** | The job title of the person. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 
**websites** | [**List[ApplicantWebsitesInner]**](ApplicantWebsitesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.applicant import Applicant

# TODO update the JSON string below
json = "{}"
# create an instance of Applicant from a JSON string
applicant_instance = Applicant.from_json(json)
# print the JSON string representation of the object
print(Applicant.to_json())

# convert the object into a dict
applicant_dict = applicant_instance.to_dict()
# create an instance of Applicant from a dict
applicant_from_dict = Applicant.from_dict(applicant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


