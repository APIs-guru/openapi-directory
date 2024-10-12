# CredentialProperties

Definition of the credential properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets the creation time. | [optional] [readonly] 
**description** | **str** | Gets or sets the description. | [optional] 
**last_modified_time** | **datetime** | Gets the last modified time. | [optional] [readonly] 
**user_name** | **str** | Gets the user name of the credential. | [optional] [readonly] 

## Example

```python
from openapi_client.models.credential_properties import CredentialProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialProperties from a JSON string
credential_properties_instance = CredentialProperties.from_json(json)
# print the JSON string representation of the object
print(CredentialProperties.to_json())

# convert the object into a dict
credential_properties_dict = credential_properties_instance.to_dict()
# create an instance of CredentialProperties from a dict
credential_properties_from_dict = CredentialProperties.from_dict(credential_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


