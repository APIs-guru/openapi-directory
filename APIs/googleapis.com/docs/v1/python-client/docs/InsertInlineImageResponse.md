# InsertInlineImageResponse

The result of inserting an inline image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The ID of the created InlineObject. | [optional] 

## Example

```python
from openapi_client.models.insert_inline_image_response import InsertInlineImageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InsertInlineImageResponse from a JSON string
insert_inline_image_response_instance = InsertInlineImageResponse.from_json(json)
# print the JSON string representation of the object
print(InsertInlineImageResponse.to_json())

# convert the object into a dict
insert_inline_image_response_dict = insert_inline_image_response_instance.to_dict()
# create an instance of InsertInlineImageResponse from a dict
insert_inline_image_response_from_dict = InsertInlineImageResponse.from_dict(insert_inline_image_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


