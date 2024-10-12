# CustomImageFragment

A custom image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CustomImagePropertiesFragment**](CustomImagePropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.custom_image_fragment import CustomImageFragment

# TODO update the JSON string below
json = "{}"
# create an instance of CustomImageFragment from a JSON string
custom_image_fragment_instance = CustomImageFragment.from_json(json)
# print the JSON string representation of the object
print(CustomImageFragment.to_json())

# convert the object into a dict
custom_image_fragment_dict = custom_image_fragment_instance.to_dict()
# create an instance of CustomImageFragment from a dict
custom_image_fragment_from_dict = CustomImageFragment.from_dict(custom_image_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


