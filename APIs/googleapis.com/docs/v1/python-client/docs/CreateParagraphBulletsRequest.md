# CreateParagraphBulletsRequest

Creates bullets for all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bullet_preset** | **str** | The kinds of bullet glyphs to be used. | [optional] 
**range** | [**Range**](Range.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_paragraph_bullets_request import CreateParagraphBulletsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateParagraphBulletsRequest from a JSON string
create_paragraph_bullets_request_instance = CreateParagraphBulletsRequest.from_json(json)
# print the JSON string representation of the object
print(CreateParagraphBulletsRequest.to_json())

# convert the object into a dict
create_paragraph_bullets_request_dict = create_paragraph_bullets_request_instance.to_dict()
# create an instance of CreateParagraphBulletsRequest from a dict
create_paragraph_bullets_request_from_dict = CreateParagraphBulletsRequest.from_dict(create_paragraph_bullets_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


