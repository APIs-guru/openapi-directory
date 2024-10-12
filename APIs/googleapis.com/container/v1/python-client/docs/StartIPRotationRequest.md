# StartIPRotationRequest

StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. | [optional] 
**name** | **str** | The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**rotate_credentials** | **bool** | Whether to rotate credentials during IP rotation. | [optional] 
**zone** | **str** | Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.start_ip_rotation_request import StartIPRotationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartIPRotationRequest from a JSON string
start_ip_rotation_request_instance = StartIPRotationRequest.from_json(json)
# print the JSON string representation of the object
print(StartIPRotationRequest.to_json())

# convert the object into a dict
start_ip_rotation_request_dict = start_ip_rotation_request_instance.to_dict()
# create an instance of StartIPRotationRequest from a dict
start_ip_rotation_request_from_dict = StartIPRotationRequest.from_dict(start_ip_rotation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


