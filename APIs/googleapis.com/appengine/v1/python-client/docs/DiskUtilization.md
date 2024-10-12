# DiskUtilization

Target scaling by disk usage. Only applicable in the App Engine flexible environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_read_bytes_per_second** | **int** | Target bytes read per second. | [optional] 
**target_read_ops_per_second** | **int** | Target ops read per seconds. | [optional] 
**target_write_bytes_per_second** | **int** | Target bytes written per second. | [optional] 
**target_write_ops_per_second** | **int** | Target ops written per second. | [optional] 

## Example

```python
from openapi_client.models.disk_utilization import DiskUtilization

# TODO update the JSON string below
json = "{}"
# create an instance of DiskUtilization from a JSON string
disk_utilization_instance = DiskUtilization.from_json(json)
# print the JSON string representation of the object
print(DiskUtilization.to_json())

# convert the object into a dict
disk_utilization_dict = disk_utilization_instance.to_dict()
# create an instance of DiskUtilization from a dict
disk_utilization_from_dict = DiskUtilization.from_dict(disk_utilization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


