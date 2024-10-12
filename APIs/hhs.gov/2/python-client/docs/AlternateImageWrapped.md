# AlternateImageWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[AlternateImage]**](AlternateImage.md) |  | [optional] 

## Example

```python
from openapi_client.models.alternate_image_wrapped import AlternateImageWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of AlternateImageWrapped from a JSON string
alternate_image_wrapped_instance = AlternateImageWrapped.from_json(json)
# print the JSON string representation of the object
print(AlternateImageWrapped.to_json())

# convert the object into a dict
alternate_image_wrapped_dict = alternate_image_wrapped_instance.to_dict()
# create an instance of AlternateImageWrapped from a dict
alternate_image_wrapped_from_dict = AlternateImageWrapped.from_dict(alternate_image_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


