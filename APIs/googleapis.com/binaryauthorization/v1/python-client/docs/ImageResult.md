# ImageResult

Result of evaluating one image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowlist_result** | [**AllowlistResult**](AllowlistResult.md) |  | [optional] 
**check_set_result** | [**CheckSetResult**](CheckSetResult.md) |  | [optional] 
**explanation** | **str** | Explanation of this image result. Only populated if no check sets were evaluated. | [optional] 
**image_uri** | **str** | Image URI from the request. | [optional] 
**verdict** | **str** | The result of evaluating this image. | [optional] 

## Example

```python
from openapi_client.models.image_result import ImageResult

# TODO update the JSON string below
json = "{}"
# create an instance of ImageResult from a JSON string
image_result_instance = ImageResult.from_json(json)
# print the JSON string representation of the object
print(ImageResult.to_json())

# convert the object into a dict
image_result_dict = image_result_instance.to_dict()
# create an instance of ImageResult from a dict
image_result_from_dict = ImageResult.from_dict(image_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


