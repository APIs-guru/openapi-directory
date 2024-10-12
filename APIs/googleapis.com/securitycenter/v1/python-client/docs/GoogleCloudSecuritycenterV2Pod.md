# GoogleCloudSecuritycenterV2Pod

A Kubernetes Pod.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers** | [**List[GoogleCloudSecuritycenterV2Container]**](GoogleCloudSecuritycenterV2Container.md) | Pod containers associated with this finding, if any. | [optional] 
**labels** | [**List[GoogleCloudSecuritycenterV2Label]**](GoogleCloudSecuritycenterV2Label.md) | Pod labels. For Kubernetes containers, these are applied to the container. | [optional] 
**name** | **str** | Kubernetes Pod name. | [optional] 
**ns** | **str** | Kubernetes Pod namespace. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_pod import GoogleCloudSecuritycenterV2Pod

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Pod from a JSON string
google_cloud_securitycenter_v2_pod_instance = GoogleCloudSecuritycenterV2Pod.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Pod.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_pod_dict = google_cloud_securitycenter_v2_pod_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Pod from a dict
google_cloud_securitycenter_v2_pod_from_dict = GoogleCloudSecuritycenterV2Pod.from_dict(google_cloud_securitycenter_v2_pod_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


