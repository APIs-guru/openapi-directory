# ISCSIServerProperties

The iSCSI server properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_schedule_group_id** | **str** | The backup policy id. | 
**chap_id** | **str** | The chap id. | [optional] 
**description** | **str** | The description. | [optional] 
**reverse_chap_id** | **str** | The reverse chap id. | [optional] 
**storage_domain_id** | **str** | The storage domain id. | 

## Example

```python
from openapi_client.models.iscsi_server_properties import ISCSIServerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ISCSIServerProperties from a JSON string
iscsi_server_properties_instance = ISCSIServerProperties.from_json(json)
# print the JSON string representation of the object
print(ISCSIServerProperties.to_json())

# convert the object into a dict
iscsi_server_properties_dict = iscsi_server_properties_instance.to_dict()
# create an instance of ISCSIServerProperties from a dict
iscsi_server_properties_from_dict = ISCSIServerProperties.from_dict(iscsi_server_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


