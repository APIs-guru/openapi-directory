# CloudStorageEgressWorkload

Specification of a network type. Network data transfer within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network data transfer within Google Cloud and the general network usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_continent** | **str** | Where the data is sent to. | [optional] 
**egress_rate** | [**Usage**](Usage.md) |  | [optional] 
**source_continent** | **str** | Where the data comes from. | [optional] 

## Example

```python
from openapi_client.models.cloud_storage_egress_workload import CloudStorageEgressWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of CloudStorageEgressWorkload from a JSON string
cloud_storage_egress_workload_instance = CloudStorageEgressWorkload.from_json(json)
# print the JSON string representation of the object
print(CloudStorageEgressWorkload.to_json())

# convert the object into a dict
cloud_storage_egress_workload_dict = cloud_storage_egress_workload_instance.to_dict()
# create an instance of CloudStorageEgressWorkload from a dict
cloud_storage_egress_workload_from_dict = CloudStorageEgressWorkload.from_dict(cloud_storage_egress_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


