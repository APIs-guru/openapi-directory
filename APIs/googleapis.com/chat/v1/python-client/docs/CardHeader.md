# CardHeader


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_style** | **str** | The image&#39;s type (for example, square border or circular border). | [optional] 
**image_url** | **str** | The URL of the image in the card header. | [optional] 
**subtitle** | **str** | The subtitle of the card header. | [optional] 
**title** | **str** | The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each takes up one line. If only the title is specified, it takes up both lines. | [optional] 

## Example

```python
from openapi_client.models.card_header import CardHeader

# TODO update the JSON string below
json = "{}"
# create an instance of CardHeader from a JSON string
card_header_instance = CardHeader.from_json(json)
# print the JSON string representation of the object
print(CardHeader.to_json())

# convert the object into a dict
card_header_dict = card_header_instance.to_dict()
# create an instance of CardHeader from a dict
card_header_from_dict = CardHeader.from_dict(card_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


