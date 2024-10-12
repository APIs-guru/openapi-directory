# DiskUsageSample

Disk usage sample. Values are across all disks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_iops** | **float** | Average IOPS sampled over a short window. Must be non-negative. | [optional] 

## Example

```python
from openapi_client.models.disk_usage_sample import DiskUsageSample

# TODO update the JSON string below
json = "{}"
# create an instance of DiskUsageSample from a JSON string
disk_usage_sample_instance = DiskUsageSample.from_json(json)
# print the JSON string representation of the object
print(DiskUsageSample.to_json())

# convert the object into a dict
disk_usage_sample_dict = disk_usage_sample_instance.to_dict()
# create an instance of DiskUsageSample from a dict
disk_usage_sample_from_dict = DiskUsageSample.from_dict(disk_usage_sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


