# ISCSIDiskList

Collection of Iscsi disk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ISCSIDisk]**](ISCSIDisk.md) | The value. | 

## Example

```python
from openapi_client.models.iscsi_disk_list import ISCSIDiskList

# TODO update the JSON string below
json = "{}"
# create an instance of ISCSIDiskList from a JSON string
iscsi_disk_list_instance = ISCSIDiskList.from_json(json)
# print the JSON string representation of the object
print(ISCSIDiskList.to_json())

# convert the object into a dict
iscsi_disk_list_dict = iscsi_disk_list_instance.to_dict()
# create an instance of ISCSIDiskList from a dict
iscsi_disk_list_from_dict = ISCSIDiskList.from_dict(iscsi_disk_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


