# CustomImagePropertiesCustom

Properties for creating a custom image from a VHD.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_name** | **str** | The image name. | [optional] 
**sys_prep** | **bool** | Indicates whether sysprep has been run on the VHD. | [optional] 

## Example

```python
from openapi_client.models.custom_image_properties_custom import CustomImagePropertiesCustom

# TODO update the JSON string below
json = "{}"
# create an instance of CustomImagePropertiesCustom from a JSON string
custom_image_properties_custom_instance = CustomImagePropertiesCustom.from_json(json)
# print the JSON string representation of the object
print(CustomImagePropertiesCustom.to_json())

# convert the object into a dict
custom_image_properties_custom_dict = custom_image_properties_custom_instance.to_dict()
# create an instance of CustomImagePropertiesCustom from a dict
custom_image_properties_custom_from_dict = CustomImagePropertiesCustom.from_dict(custom_image_properties_custom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


