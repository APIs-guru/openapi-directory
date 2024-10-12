# PrivateCloud

Represents a private cloud resource. Private clouds of type `STANDARD` and `TIME_LIMITED` are zonal resources, `STRETCHED` private clouds are regional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of this resource. | [optional] [readonly] 
**delete_time** | **str** | Output only. Time when the resource was scheduled for deletion. | [optional] [readonly] 
**description** | **str** | User-provided description for this private cloud. | [optional] 
**expire_time** | **str** | Output only. Time when the resource will be irreversibly deleted. | [optional] [readonly] 
**hcx** | [**Hcx**](Hcx.md) |  | [optional] 
**management_cluster** | [**ManagementCluster**](ManagementCluster.md) |  | [optional] 
**name** | **str** | Output only. The resource name of this private cloud. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/us-central1-a/privateClouds/my-cloud&#x60; | [optional] [readonly] 
**network_config** | [**NetworkConfig**](NetworkConfig.md) |  | [optional] 
**nsx** | [**Nsx**](Nsx.md) |  | [optional] 
**state** | **str** | Output only. State of the resource. New values may be added to this enum when appropriate. | [optional] [readonly] 
**type** | **str** | Optional. Type of the private cloud. Defaults to STANDARD. | [optional] 
**uid** | **str** | Output only. System-generated unique identifier for the resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time of this resource. | [optional] [readonly] 
**vcenter** | [**Vcenter**](Vcenter.md) |  | [optional] 

## Example

```python
from openapi_client.models.private_cloud import PrivateCloud

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateCloud from a JSON string
private_cloud_instance = PrivateCloud.from_json(json)
# print the JSON string representation of the object
print(PrivateCloud.to_json())

# convert the object into a dict
private_cloud_dict = private_cloud_instance.to_dict()
# create an instance of PrivateCloud from a dict
private_cloud_from_dict = PrivateCloud.from_dict(private_cloud_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


