# DeleteParagraphBulletsRequest

Deletes bullets from all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**Range**](Range.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_paragraph_bullets_request import DeleteParagraphBulletsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteParagraphBulletsRequest from a JSON string
delete_paragraph_bullets_request_instance = DeleteParagraphBulletsRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteParagraphBulletsRequest.to_json())

# convert the object into a dict
delete_paragraph_bullets_request_dict = delete_paragraph_bullets_request_instance.to_dict()
# create an instance of DeleteParagraphBulletsRequest from a dict
delete_paragraph_bullets_request_from_dict = DeleteParagraphBulletsRequest.from_dict(delete_paragraph_bullets_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


