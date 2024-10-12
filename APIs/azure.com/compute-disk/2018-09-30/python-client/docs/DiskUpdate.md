# DiskUpdate

Disk update resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiskUpdateProperties**](DiskUpdateProperties.md) |  | [optional] 
**sku** | [**DiskSku**](DiskSku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.disk_update import DiskUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DiskUpdate from a JSON string
disk_update_instance = DiskUpdate.from_json(json)
# print the JSON string representation of the object
print(DiskUpdate.to_json())

# convert the object into a dict
disk_update_dict = disk_update_instance.to_dict()
# create an instance of DiskUpdate from a dict
disk_update_from_dict = DiskUpdate.from_dict(disk_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


