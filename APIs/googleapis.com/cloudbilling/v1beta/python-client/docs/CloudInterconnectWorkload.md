# CloudInterconnectWorkload

Specifies usage for Cloud Interconnect resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interconnect_attachments** | [**List[VlanAttachment]**](VlanAttachment.md) | VLAN attachment used for interconnect. | [optional] 
**interconnect_type** | **str** | VLAN attachment type | [optional] 
**link_type** | **str** | Interconnect circuit link type. | [optional] 
**provisioned_link_count** | [**Usage**](Usage.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_interconnect_workload import CloudInterconnectWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of CloudInterconnectWorkload from a JSON string
cloud_interconnect_workload_instance = CloudInterconnectWorkload.from_json(json)
# print the JSON string representation of the object
print(CloudInterconnectWorkload.to_json())

# convert the object into a dict
cloud_interconnect_workload_dict = cloud_interconnect_workload_instance.to_dict()
# create an instance of CloudInterconnectWorkload from a dict
cloud_interconnect_workload_from_dict = CloudInterconnectWorkload.from_dict(cloud_interconnect_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


