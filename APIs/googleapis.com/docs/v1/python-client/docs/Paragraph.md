# Paragraph

A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bullet** | [**Bullet**](Bullet.md) |  | [optional] 
**elements** | [**List[ParagraphElement]**](ParagraphElement.md) | The content of the paragraph, broken down into its component parts. | [optional] 
**paragraph_style** | [**ParagraphStyle**](ParagraphStyle.md) |  | [optional] 
**positioned_object_ids** | **List[str]** | The IDs of the positioned objects tethered to this paragraph. | [optional] 
**suggested_bullet_changes** | [**Dict[str, SuggestedBullet]**](SuggestedBullet.md) | The suggested changes to this paragraph&#39;s bullet. | [optional] 
**suggested_paragraph_style_changes** | [**Dict[str, SuggestedParagraphStyle]**](SuggestedParagraphStyle.md) | The suggested paragraph style changes to this paragraph, keyed by suggestion ID. | [optional] 
**suggested_positioned_object_ids** | [**Dict[str, ObjectReferences]**](ObjectReferences.md) | The IDs of the positioned objects suggested to be attached to this paragraph, keyed by suggestion ID. | [optional] 

## Example

```python
from openapi_client.models.paragraph import Paragraph

# TODO update the JSON string below
json = "{}"
# create an instance of Paragraph from a JSON string
paragraph_instance = Paragraph.from_json(json)
# print the JSON string representation of the object
print(Paragraph.to_json())

# convert the object into a dict
paragraph_dict = paragraph_instance.to_dict()
# create an instance of Paragraph from a dict
paragraph_from_dict = Paragraph.from_dict(paragraph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


