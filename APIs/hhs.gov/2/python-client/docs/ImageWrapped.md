# ImageWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Image]**](Image.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_wrapped import ImageWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of ImageWrapped from a JSON string
image_wrapped_instance = ImageWrapped.from_json(json)
# print the JSON string representation of the object
print(ImageWrapped.to_json())

# convert the object into a dict
image_wrapped_dict = image_wrapped_instance.to_dict()
# create an instance of ImageWrapped from a dict
image_wrapped_from_dict = ImageWrapped.from_dict(image_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


