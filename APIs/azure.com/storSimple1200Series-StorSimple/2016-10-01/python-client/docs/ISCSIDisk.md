# ISCSIDisk

The iSCSI disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ISCSIDiskProperties**](ISCSIDiskProperties.md) |  | 
**id** | **str** | The identifier. | [optional] [readonly] 
**name** | **str** | The name. | [optional] [readonly] 
**type** | **str** | The type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iscsi_disk import ISCSIDisk

# TODO update the JSON string below
json = "{}"
# create an instance of ISCSIDisk from a JSON string
iscsi_disk_instance = ISCSIDisk.from_json(json)
# print the JSON string representation of the object
print(ISCSIDisk.to_json())

# convert the object into a dict
iscsi_disk_dict = iscsi_disk_instance.to_dict()
# create an instance of ISCSIDisk from a dict
iscsi_disk_from_dict = ISCSIDisk.from_dict(iscsi_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


