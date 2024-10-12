# ResponseWithContinuationCustomImage

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[CustomImage]**](CustomImage.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_custom_image import ResponseWithContinuationCustomImage

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationCustomImage from a JSON string
response_with_continuation_custom_image_instance = ResponseWithContinuationCustomImage.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationCustomImage.to_json())

# convert the object into a dict
response_with_continuation_custom_image_dict = response_with_continuation_custom_image_instance.to_dict()
# create an instance of ResponseWithContinuationCustomImage from a dict
response_with_continuation_custom_image_from_dict = ResponseWithContinuationCustomImage.from_dict(response_with_continuation_custom_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


