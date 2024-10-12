# GoogleCloudSecuritycenterV2Container

Container associated with the finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time that the container was created. | [optional] 
**image_id** | **str** | Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest. | [optional] 
**labels** | [**List[GoogleCloudSecuritycenterV2Label]**](GoogleCloudSecuritycenterV2Label.md) | Container labels, as provided by the container runtime. | [optional] 
**name** | **str** | Name of the container. | [optional] 
**uri** | **str** | Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_container import GoogleCloudSecuritycenterV2Container

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Container from a JSON string
google_cloud_securitycenter_v2_container_instance = GoogleCloudSecuritycenterV2Container.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Container.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_container_dict = google_cloud_securitycenter_v2_container_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Container from a dict
google_cloud_securitycenter_v2_container_from_dict = GoogleCloudSecuritycenterV2Container.from_dict(google_cloud_securitycenter_v2_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


