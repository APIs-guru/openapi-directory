# ConfigManagementOciConfig

OCI repo configuration for a single cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcp_service_account_email** | **str** | The Google Cloud Service Account Email used for auth when secret_type is gcpServiceAccount. | [optional] 
**policy_dir** | **str** | The absolute path of the directory that contains the local resources. Default: the root directory of the image. | [optional] 
**secret_type** | **str** | Type of secret configured for access to the Git repo. | [optional] 
**sync_repo** | **str** | The OCI image repository URL for the package to sync from. e.g. &#x60;LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME&#x60;. | [optional] 
**sync_wait_secs** | **str** | Period in seconds between consecutive syncs. Default: 15. | [optional] 

## Example

```python
from openapi_client.models.config_management_oci_config import ConfigManagementOciConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementOciConfig from a JSON string
config_management_oci_config_instance = ConfigManagementOciConfig.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementOciConfig.to_json())

# convert the object into a dict
config_management_oci_config_dict = config_management_oci_config_instance.to_dict()
# create an instance of ConfigManagementOciConfig from a dict
config_management_oci_config_from_dict = ConfigManagementOciConfig.from_dict(config_management_oci_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


