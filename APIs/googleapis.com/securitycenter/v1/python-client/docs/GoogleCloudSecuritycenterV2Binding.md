# GoogleCloudSecuritycenterV2Binding

Represents a Kubernetes RoleBinding or ClusterRoleBinding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name for the binding. | [optional] 
**ns** | **str** | Namespace for the binding. | [optional] 
**role** | [**GoogleCloudSecuritycenterV2Role**](GoogleCloudSecuritycenterV2Role.md) |  | [optional] 
**subjects** | [**List[GoogleCloudSecuritycenterV2Subject]**](GoogleCloudSecuritycenterV2Subject.md) | Represents one or more subjects that are bound to the role. Not always available for PATCH requests. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_binding import GoogleCloudSecuritycenterV2Binding

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Binding from a JSON string
google_cloud_securitycenter_v2_binding_instance = GoogleCloudSecuritycenterV2Binding.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Binding.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_binding_dict = google_cloud_securitycenter_v2_binding_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Binding from a dict
google_cloud_securitycenter_v2_binding_from_dict = GoogleCloudSecuritycenterV2Binding.from_dict(google_cloud_securitycenter_v2_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


