# ApplicationPackageContact

The application package contact information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_name** | **str** | The contact name. | [optional] 
**email** | **str** | The contact email. | 
**phone** | **str** | The contact phone number. | 

## Example

```python
from openapi_client.models.application_package_contact import ApplicationPackageContact

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPackageContact from a JSON string
application_package_contact_instance = ApplicationPackageContact.from_json(json)
# print the JSON string representation of the object
print(ApplicationPackageContact.to_json())

# convert the object into a dict
application_package_contact_dict = application_package_contact_instance.to_dict()
# create an instance of ApplicationPackageContact from a dict
application_package_contact_from_dict = ApplicationPackageContact.from_dict(application_package_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


