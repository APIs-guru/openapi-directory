# OSImage

Operation System image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_instance_types** | **List[str]** | Instance types this image is applicable to. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations) | [optional] 
**code** | **str** | OS Image code. | [optional] 
**description** | **str** | OS Image description. | [optional] 
**name** | **str** | Output only. OS Image&#39;s unique name. | [optional] [readonly] 
**supported_network_templates** | **List[str]** | Network templates that can be used with this OS Image. | [optional] 

## Example

```python
from openapi_client.models.os_image import OSImage

# TODO update the JSON string below
json = "{}"
# create an instance of OSImage from a JSON string
os_image_instance = OSImage.from_json(json)
# print the JSON string representation of the object
print(OSImage.to_json())

# convert the object into a dict
os_image_dict = os_image_instance.to_dict()
# create an instance of OSImage from a dict
os_image_from_dict = OSImage.from_dict(os_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


