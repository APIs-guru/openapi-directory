# Content


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[Action]**](Action.md) | [Optional] Actions for this card. | [optional] 
**description** | [**SafeHtmlProto**](SafeHtmlProto.md) |  | [optional] 
**subtitle** | [**BackgroundColoredText**](BackgroundColoredText.md) |  | [optional] 
**title** | [**BackgroundColoredText**](BackgroundColoredText.md) |  | [optional] 

## Example

```python
from openapi_client.models.content import Content

# TODO update the JSON string below
json = "{}"
# create an instance of Content from a JSON string
content_instance = Content.from_json(json)
# print the JSON string representation of the object
print(Content.to_json())

# convert the object into a dict
content_dict = content_instance.to_dict()
# create an instance of Content from a dict
content_from_dict = Content.from_dict(content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


