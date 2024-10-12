# ISCSIDiskProperties

The iSCSI disk properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_control_records** | **List[str]** | The access control records. | 
**data_policy** | **str** | The data policy. | 
**description** | **str** | The description. | [optional] 
**disk_status** | **str** | The disk status. | 
**local_used_capacity_in_bytes** | **int** | The local used capacity in bytes. | [optional] [readonly] 
**monitoring_status** | **str** | The monitoring. | 
**provisioned_capacity_in_bytes** | **int** | The provisioned capacity in bytes. | 
**used_capacity_in_bytes** | **int** | The used capacity in bytes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iscsi_disk_properties import ISCSIDiskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ISCSIDiskProperties from a JSON string
iscsi_disk_properties_instance = ISCSIDiskProperties.from_json(json)
# print the JSON string representation of the object
print(ISCSIDiskProperties.to_json())

# convert the object into a dict
iscsi_disk_properties_dict = iscsi_disk_properties_instance.to_dict()
# create an instance of ISCSIDiskProperties from a dict
iscsi_disk_properties_from_dict = ISCSIDiskProperties.from_dict(iscsi_disk_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


