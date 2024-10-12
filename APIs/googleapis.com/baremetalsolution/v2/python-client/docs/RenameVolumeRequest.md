# RenameVolumeRequest

Message requesting rename of a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_volume_id** | **str** | Required. The new &#x60;id&#x60; of the volume. | [optional] 

## Example

```python
from openapi_client.models.rename_volume_request import RenameVolumeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RenameVolumeRequest from a JSON string
rename_volume_request_instance = RenameVolumeRequest.from_json(json)
# print the JSON string representation of the object
print(RenameVolumeRequest.to_json())

# convert the object into a dict
rename_volume_request_dict = rename_volume_request_instance.to_dict()
# create an instance of RenameVolumeRequest from a dict
rename_volume_request_from_dict = RenameVolumeRequest.from_dict(rename_volume_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


