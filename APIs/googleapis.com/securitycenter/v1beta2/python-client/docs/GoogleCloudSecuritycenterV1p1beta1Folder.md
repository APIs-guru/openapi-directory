# GoogleCloudSecuritycenterV1p1beta1Folder

Message that contains the resource name and display name of a folder resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_folder** | **str** | Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name | [optional] 
**resource_folder_display_name** | **str** | The user defined display name for this folder. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1p1beta1_folder import GoogleCloudSecuritycenterV1p1beta1Folder

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1p1beta1Folder from a JSON string
google_cloud_securitycenter_v1p1beta1_folder_instance = GoogleCloudSecuritycenterV1p1beta1Folder.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1p1beta1Folder.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1p1beta1_folder_dict = google_cloud_securitycenter_v1p1beta1_folder_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1p1beta1Folder from a dict
google_cloud_securitycenter_v1p1beta1_folder_from_dict = GoogleCloudSecuritycenterV1p1beta1Folder.from_dict(google_cloud_securitycenter_v1p1beta1_folder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


