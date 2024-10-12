# DiskSku

The disks and snapshots sku name. Can be Standard_LRS or Premium_LRS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The sku name. | [optional] 
**tier** | **str** | The sku tier. | [optional] [readonly] [default to 'Standard']

## Example

```python
from openapi_client.models.disk_sku import DiskSku

# TODO update the JSON string below
json = "{}"
# create an instance of DiskSku from a JSON string
disk_sku_instance = DiskSku.from_json(json)
# print the JSON string representation of the object
print(DiskSku.to_json())

# convert the object into a dict
disk_sku_dict = disk_sku_instance.to_dict()
# create an instance of DiskSku from a dict
disk_sku_from_dict = DiskSku.from_dict(disk_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


