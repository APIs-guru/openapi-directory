# ReadingPosition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epub_cfi_position** | **str** | Position in an EPUB as a CFI. | [optional] 
**gb_image_position** | **str** | Position in a volume for image-based content. | [optional] 
**gb_text_position** | **str** | Position in a volume for text-based content. | [optional] 
**kind** | **str** | Resource type for a reading position. | [optional] 
**pdf_position** | **str** | Position in a PDF file. | [optional] 
**updated** | **str** | Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution). | [optional] 
**volume_id** | **str** | Volume id associated with this reading position. | [optional] 

## Example

```python
from openapi_client.models.reading_position import ReadingPosition

# TODO update the JSON string below
json = "{}"
# create an instance of ReadingPosition from a JSON string
reading_position_instance = ReadingPosition.from_json(json)
# print the JSON string representation of the object
print(ReadingPosition.to_json())

# convert the object into a dict
reading_position_dict = reading_position_instance.to_dict()
# create an instance of ReadingPosition from a dict
reading_position_from_dict = ReadingPosition.from_dict(reading_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


