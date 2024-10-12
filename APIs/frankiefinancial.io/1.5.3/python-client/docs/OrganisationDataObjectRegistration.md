# OrganisationDataObjectRegistration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** |  | [optional] 
**previous_number** | **str** |  | [optional] 
**state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.organisation_data_object_registration import OrganisationDataObjectRegistration

# TODO update the JSON string below
json = "{}"
# create an instance of OrganisationDataObjectRegistration from a JSON string
organisation_data_object_registration_instance = OrganisationDataObjectRegistration.from_json(json)
# print the JSON string representation of the object
print(OrganisationDataObjectRegistration.to_json())

# convert the object into a dict
organisation_data_object_registration_dict = organisation_data_object_registration_instance.to_dict()
# create an instance of OrganisationDataObjectRegistration from a dict
organisation_data_object_registration_from_dict = OrganisationDataObjectRegistration.from_dict(organisation_data_object_registration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


