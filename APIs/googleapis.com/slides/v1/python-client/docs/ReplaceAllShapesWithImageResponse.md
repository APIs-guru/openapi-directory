# ReplaceAllShapesWithImageResponse

The result of replacing shapes with an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occurrences_changed** | **int** | The number of shapes replaced with images. | [optional] 

## Example

```python
from openapi_client.models.replace_all_shapes_with_image_response import ReplaceAllShapesWithImageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceAllShapesWithImageResponse from a JSON string
replace_all_shapes_with_image_response_instance = ReplaceAllShapesWithImageResponse.from_json(json)
# print the JSON string representation of the object
print(ReplaceAllShapesWithImageResponse.to_json())

# convert the object into a dict
replace_all_shapes_with_image_response_dict = replace_all_shapes_with_image_response_instance.to_dict()
# create an instance of ReplaceAllShapesWithImageResponse from a dict
replace_all_shapes_with_image_response_from_dict = ReplaceAllShapesWithImageResponse.from_dict(replace_all_shapes_with_image_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


