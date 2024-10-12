# GoogleCloudSecuritycenterV2Role

Kubernetes Role or ClusterRole.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Role type. | [optional] 
**name** | **str** | Role name. | [optional] 
**ns** | **str** | Role namespace. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_role import GoogleCloudSecuritycenterV2Role

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Role from a JSON string
google_cloud_securitycenter_v2_role_instance = GoogleCloudSecuritycenterV2Role.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Role.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_role_dict = google_cloud_securitycenter_v2_role_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Role from a dict
google_cloud_securitycenter_v2_role_from_dict = GoogleCloudSecuritycenterV2Role.from_dict(google_cloud_securitycenter_v2_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


