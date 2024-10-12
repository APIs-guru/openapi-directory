# AzureFilesIdentityBasedAuthentication

Settings for Azure Files identity based authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_directory_properties** | [**ActiveDirectoryProperties**](ActiveDirectoryProperties.md) |  | [optional] 
**directory_service_options** | **str** | Indicates the directory service used. | 

## Example

```python
from openapi_client.models.azure_files_identity_based_authentication import AzureFilesIdentityBasedAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFilesIdentityBasedAuthentication from a JSON string
azure_files_identity_based_authentication_instance = AzureFilesIdentityBasedAuthentication.from_json(json)
# print the JSON string representation of the object
print(AzureFilesIdentityBasedAuthentication.to_json())

# convert the object into a dict
azure_files_identity_based_authentication_dict = azure_files_identity_based_authentication_instance.to_dict()
# create an instance of AzureFilesIdentityBasedAuthentication from a dict
azure_files_identity_based_authentication_from_dict = AzureFilesIdentityBasedAuthentication.from_dict(azure_files_identity_based_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


