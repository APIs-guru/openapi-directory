# CustomImagePropertiesCustomFragment

Properties for creating a custom image from a VHD.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_name** | **str** | The image name. | [optional] 
**os_type** | **str** | The OS type of the custom image (i.e. Windows, Linux) | [optional] 
**sys_prep** | **bool** | Indicates whether sysprep has been run on the VHD. | [optional] 

## Example

```python
from openapi_client.models.custom_image_properties_custom_fragment import CustomImagePropertiesCustomFragment

# TODO update the JSON string below
json = "{}"
# create an instance of CustomImagePropertiesCustomFragment from a JSON string
custom_image_properties_custom_fragment_instance = CustomImagePropertiesCustomFragment.from_json(json)
# print the JSON string representation of the object
print(CustomImagePropertiesCustomFragment.to_json())

# convert the object into a dict
custom_image_properties_custom_fragment_dict = custom_image_properties_custom_fragment_instance.to_dict()
# create an instance of CustomImagePropertiesCustomFragment from a dict
custom_image_properties_custom_fragment_from_dict = CustomImagePropertiesCustomFragment.from_dict(custom_image_properties_custom_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


