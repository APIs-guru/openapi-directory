# GKEMasterInfo

For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_network_uri** | **str** | URI of a GKE cluster network. | [optional] 
**cluster_uri** | **str** | URI of a GKE cluster. | [optional] 
**external_ip** | **str** | External IP address of a GKE cluster master. | [optional] 
**internal_ip** | **str** | Internal IP address of a GKE cluster master. | [optional] 

## Example

```python
from openapi_client.models.gke_master_info import GKEMasterInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GKEMasterInfo from a JSON string
gke_master_info_instance = GKEMasterInfo.from_json(json)
# print the JSON string representation of the object
print(GKEMasterInfo.to_json())

# convert the object into a dict
gke_master_info_dict = gke_master_info_instance.to_dict()
# create an instance of GKEMasterInfo from a dict
gke_master_info_from_dict = GKEMasterInfo.from_dict(gke_master_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


