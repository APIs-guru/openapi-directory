# ImageListResult

The List Image operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of Images. Call ListNext() with this to fetch the next page of Images. | [optional] 
**value** | [**List[Image]**](Image.md) | The list of Images. | 

## Example

```python
from openapi_client.models.image_list_result import ImageListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ImageListResult from a JSON string
image_list_result_instance = ImageListResult.from_json(json)
# print the JSON string representation of the object
print(ImageListResult.to_json())

# convert the object into a dict
image_list_result_dict = image_list_result_instance.to_dict()
# create an instance of ImageListResult from a dict
image_list_result_from_dict = ImageListResult.from_dict(image_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


