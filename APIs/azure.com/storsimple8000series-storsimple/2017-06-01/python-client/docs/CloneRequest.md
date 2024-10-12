# CloneRequest

The clone job request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_element** | [**BackupElement**](BackupElement.md) |  | 
**target_access_control_record_ids** | **List[str]** | The list of path IDs of the access control records to be associated to the new cloned volume. | 
**target_device_id** | **str** | The path ID of the device which will act as the clone target. | 
**target_volume_name** | **str** | The name of the new volume which will be created and the backup will be cloned into. | 

## Example

```python
from openapi_client.models.clone_request import CloneRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloneRequest from a JSON string
clone_request_instance = CloneRequest.from_json(json)
# print the JSON string representation of the object
print(CloneRequest.to_json())

# convert the object into a dict
clone_request_dict = clone_request_instance.to_dict()
# create an instance of CloneRequest from a dict
clone_request_from_dict = CloneRequest.from_dict(clone_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


