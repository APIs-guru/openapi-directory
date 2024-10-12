# PersonalApplicationPolicy

Policies for apps in the personal profile of a company-owned device with a work profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**install_type** | **str** | The type of installation to perform. | [optional] 
**package_name** | **str** | The package name of the application. | [optional] 

## Example

```python
from openapi_client.models.personal_application_policy import PersonalApplicationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalApplicationPolicy from a JSON string
personal_application_policy_instance = PersonalApplicationPolicy.from_json(json)
# print the JSON string representation of the object
print(PersonalApplicationPolicy.to_json())

# convert the object into a dict
personal_application_policy_dict = personal_application_policy_instance.to_dict()
# create an instance of PersonalApplicationPolicy from a dict
personal_application_policy_from_dict = PersonalApplicationPolicy.from_dict(personal_application_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


