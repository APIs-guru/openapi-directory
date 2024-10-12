# ResizeVolumeRequest

Request for emergency resize Volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size_gib** | **str** | New Volume size, in GiB. | [optional] 

## Example

```python
from openapi_client.models.resize_volume_request import ResizeVolumeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResizeVolumeRequest from a JSON string
resize_volume_request_instance = ResizeVolumeRequest.from_json(json)
# print the JSON string representation of the object
print(ResizeVolumeRequest.to_json())

# convert the object into a dict
resize_volume_request_dict = resize_volume_request_instance.to_dict()
# create an instance of ResizeVolumeRequest from a dict
resize_volume_request_from_dict = ResizeVolumeRequest.from_dict(resize_volume_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


