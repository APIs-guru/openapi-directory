# FileShareProperties

The File Share.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_user** | **str** | The user/group who will have full permission in this share. Active directory email address. Example: xyz@contoso.com or Contoso\\xyz. | 
**data_policy** | **str** | The data policy | 
**description** | **str** | Description for file share | [optional] 
**local_used_capacity_in_bytes** | **int** | The local used capacity in Bytes. | [optional] [readonly] 
**monitoring_status** | **str** | The monitoring status | 
**provisioned_capacity_in_bytes** | **int** | The total provisioned capacity in Bytes | 
**share_status** | **str** | The Share Status | 
**used_capacity_in_bytes** | **int** | The used capacity in Bytes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_share_properties import FileShareProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FileShareProperties from a JSON string
file_share_properties_instance = FileShareProperties.from_json(json)
# print the JSON string representation of the object
print(FileShareProperties.to_json())

# convert the object into a dict
file_share_properties_dict = file_share_properties_instance.to_dict()
# create an instance of FileShareProperties from a dict
file_share_properties_from_dict = FileShareProperties.from_dict(file_share_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


