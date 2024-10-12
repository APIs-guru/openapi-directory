# CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation

Metadata describing a long running folder operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_parent** | **str** | The resource name of the folder or organization we are either creating the folder under or moving the folder to. | [optional] 
**display_name** | **str** | The display name of the folder. | [optional] 
**operation_type** | **str** | The type of this operation. | [optional] 
**source_parent** | **str** | The resource name of the folder&#39;s parent. Only applicable when the operation_type is MOVE. | [optional] 

## Example

```python
from openapi_client.models.cloudresourcemanager_google_cloud_resourcemanager_v2alpha1_folder_operation import CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation

# TODO update the JSON string below
json = "{}"
# create an instance of CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation from a JSON string
cloudresourcemanager_google_cloud_resourcemanager_v2alpha1_folder_operation_instance = CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation.from_json(json)
# print the JSON string representation of the object
print(CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation.to_json())

# convert the object into a dict
cloudresourcemanager_google_cloud_resourcemanager_v2alpha1_folder_operation_dict = cloudresourcemanager_google_cloud_resourcemanager_v2alpha1_folder_operation_instance.to_dict()
# create an instance of CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation from a dict
cloudresourcemanager_google_cloud_resourcemanager_v2alpha1_folder_operation_from_dict = CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation.from_dict(cloudresourcemanager_google_cloud_resourcemanager_v2alpha1_folder_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


