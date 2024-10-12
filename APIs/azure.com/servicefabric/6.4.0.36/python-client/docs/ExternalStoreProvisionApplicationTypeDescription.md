# ExternalStoreProvisionApplicationTypeDescription

Describes the operation to register or provision an application type using an application package from an external store instead of a package uploaded to the Service Fabric image store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_package_download_uri** | **str** | The path to the &#39;.sfpkg&#39; application package from where the application package can be downloaded using HTTP or HTTPS protocols. The application package can be stored in an external store that provides GET operation to download the file. Supported protocols are HTTP and HTTPS, and the path must allow READ access. | 
**application_type_name** | **str** | The application type name represents the name of the application type found in the application manifest. | 
**application_type_version** | **str** | The application type version represents the version of the application type found in the application manifest. | 

## Example

```python
from openapi_client.models.external_store_provision_application_type_description import ExternalStoreProvisionApplicationTypeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalStoreProvisionApplicationTypeDescription from a JSON string
external_store_provision_application_type_description_instance = ExternalStoreProvisionApplicationTypeDescription.from_json(json)
# print the JSON string representation of the object
print(ExternalStoreProvisionApplicationTypeDescription.to_json())

# convert the object into a dict
external_store_provision_application_type_description_dict = external_store_provision_application_type_description_instance.to_dict()
# create an instance of ExternalStoreProvisionApplicationTypeDescription from a dict
external_store_provision_application_type_description_from_dict = ExternalStoreProvisionApplicationTypeDescription.from_dict(external_store_provision_application_type_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


