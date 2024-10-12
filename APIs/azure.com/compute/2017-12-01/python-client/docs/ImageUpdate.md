# ImageUpdate

The source user image virtual hard disk. Only tags may be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ImageProperties**](ImageProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.image_update import ImageUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ImageUpdate from a JSON string
image_update_instance = ImageUpdate.from_json(json)
# print the JSON string representation of the object
print(ImageUpdate.to_json())

# convert the object into a dict
image_update_dict = image_update_instance.to_dict()
# create an instance of ImageUpdate from a dict
image_update_from_dict = ImageUpdate.from_dict(image_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


