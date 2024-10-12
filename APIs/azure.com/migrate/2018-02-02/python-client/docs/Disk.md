# Disk

A disk discovered on a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gigabytes_allocated** | **float** | Gigabytes of storage provisioned for this disk. | [optional] [readonly] 
**gigabytes_consumed** | **float** | Gigabytes of storage consumed by this disk. | [optional] [readonly] 

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


