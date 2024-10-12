# Disk

Describes the data disk used by a workflow job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_type** | **str** | Disk storage type, as defined by Google Compute Engine. This must be a disk type appropriate to the project and zone in which the workers will run. If unknown or unspecified, the service will attempt to choose a reasonable default. For example, the standard persistent disk type is a resource name typically ending in \&quot;pd-standard\&quot;. If SSD persistent disks are available, the resource name typically ends with \&quot;pd-ssd\&quot;. The actual valid values are defined the Google Compute Engine API, not by the Cloud Dataflow API; consult the Google Compute Engine documentation for more information about determining the set of available disk types for a particular project and zone. Google Compute Engine Disk types are local to a particular project in a particular zone, and so the resource name will typically look something like this: compute.googleapis.com/projects/project-id/zones/zone/diskTypes/pd-standard | [optional] 
**mount_point** | **str** | Directory in a VM where disk is mounted. | [optional] 
**size_gb** | **int** | Size of disk in GB. If zero or unspecified, the service will attempt to choose a reasonable default. | [optional] 

## Example

```python
from openapi_client.models.disk import Disk

# TODO update the JSON string below
json = "{}"
# create an instance of Disk from a JSON string
disk_instance = Disk.from_json(json)
# print the JSON string representation of the object
print(Disk.to_json())

# convert the object into a dict
disk_dict = disk_instance.to_dict()
# create an instance of Disk from a dict
disk_from_dict = Disk.from_dict(disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


