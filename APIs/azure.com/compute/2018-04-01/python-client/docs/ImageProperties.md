# ImageProperties

Describes the properties of an Image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 
**source_virtual_machine** | [**SubResource**](SubResource.md) |  | [optional] 
**storage_profile** | [**ImageStorageProfile**](ImageStorageProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_properties import ImageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ImageProperties from a JSON string
image_properties_instance = ImageProperties.from_json(json)
# print the JSON string representation of the object
print(ImageProperties.to_json())

# convert the object into a dict
image_properties_dict = image_properties_instance.to_dict()
# create an instance of ImageProperties from a dict
image_properties_from_dict = ImageProperties.from_dict(image_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


