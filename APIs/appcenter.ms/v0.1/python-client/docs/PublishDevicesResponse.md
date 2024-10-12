# PublishDevicesResponse

The information for a single iOS device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_file_name** | **str** | The file name for the provisioning profile. | [optional] 
**profiles_zip_base64** | **str** | The updated provisioning profiles zip base64 encoded. | 

## Example

```python
from openapi_client.models.publish_devices_response import PublishDevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PublishDevicesResponse from a JSON string
publish_devices_response_instance = PublishDevicesResponse.from_json(json)
# print the JSON string representation of the object
print(PublishDevicesResponse.to_json())

# convert the object into a dict
publish_devices_response_dict = publish_devices_response_instance.to_dict()
# create an instance of PublishDevicesResponse from a dict
publish_devices_response_from_dict = PublishDevicesResponse.from_dict(publish_devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


