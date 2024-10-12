# GoogleCloudSecuritycenterV2Resource

Information related to the Google Cloud resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The human readable name of the resource. | [optional] 
**name** | **str** | The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name | [optional] 
**type** | **str** | The full resource type of the resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_resource import GoogleCloudSecuritycenterV2Resource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Resource from a JSON string
google_cloud_securitycenter_v2_resource_instance = GoogleCloudSecuritycenterV2Resource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Resource.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_resource_dict = google_cloud_securitycenter_v2_resource_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Resource from a dict
google_cloud_securitycenter_v2_resource_from_dict = GoogleCloudSecuritycenterV2Resource.from_dict(google_cloud_securitycenter_v2_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


