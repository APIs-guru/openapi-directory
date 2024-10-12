# Card

Represents a rich preview card that is generated using OpenGraph tags from a URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_name** | **str** | The author of the original resource. | [optional] 
**author_url** | **str** | A link to the author of the original resource. | [optional] 
**blurhash** | **str** | A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet. | [optional] 
**description** | **str** | Description of preview. | 
**height** | **int** | Height of preview, in pixels. | [optional] 
**html** | **str** | HTML to be used for generating the preview card. | [optional] 
**image** | **str** | Preview thumbnail (URL). | [optional] 
**provider_name** | **str** | The provider of the original resource. | [optional] 
**provider_url** | **str** | A link to the provider of the original resource. | [optional] 
**title** | **str** | Title of linked resource. | 
**type** | **str** | The type of the preview card. String (Enumerable, oneOf). | 
**url** | **str** | Location of linked resource. | 
**width** | **int** | Width of preview, in pixels. | [optional] 

## Example

```python
from openapi_client.models.card import Card

# TODO update the JSON string below
json = "{}"
# create an instance of Card from a JSON string
card_instance = Card.from_json(json)
# print the JSON string representation of the object
print(Card.to_json())

# convert the object into a dict
card_dict = card_instance.to_dict()
# create an instance of Card from a dict
card_from_dict = Card.from_dict(card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


