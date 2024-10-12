# DiskMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_type** | **str** | Required. Type of Disk, e.g. REGIONAL_SSD. | [optional] 
**gib_sec** | **str** | Required. Seconds of physical disk usage, e.g. 3600. | [optional] 

## Example

```python
from openapi_client.models.disk_metric import DiskMetric

# TODO update the JSON string below
json = "{}"
# create an instance of DiskMetric from a JSON string
disk_metric_instance = DiskMetric.from_json(json)
# print the JSON string representation of the object
print(DiskMetric.to_json())

# convert the object into a dict
disk_metric_dict = disk_metric_instance.to_dict()
# create an instance of DiskMetric from a dict
disk_metric_from_dict = DiskMetric.from_dict(disk_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


