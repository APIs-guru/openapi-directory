# UpdateParagraphStyleRequest

Update the styling of all paragraphs that overlap with the given range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;paragraph_style&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example, to update the paragraph style&#39;s alignment property, set &#x60;fields&#x60; to &#x60;\&quot;alignment\&quot;&#x60;. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. | [optional] 
**paragraph_style** | [**ParagraphStyle**](ParagraphStyle.md) |  | [optional] 
**range** | [**Range**](Range.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_paragraph_style_request import UpdateParagraphStyleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateParagraphStyleRequest from a JSON string
update_paragraph_style_request_instance = UpdateParagraphStyleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateParagraphStyleRequest.to_json())

# convert the object into a dict
update_paragraph_style_request_dict = update_paragraph_style_request_instance.to_dict()
# create an instance of UpdateParagraphStyleRequest from a dict
update_paragraph_style_request_from_dict = UpdateParagraphStyleRequest.from_dict(update_paragraph_style_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


