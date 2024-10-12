# Background

Represents the background of a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**OptionalColor**](OptionalColor.md) |  | [optional] 

## Example

```python
from openapi_client.models.background import Background

# TODO update the JSON string below
json = "{}"
# create an instance of Background from a JSON string
background_instance = Background.from_json(json)
# print the JSON string representation of the object
print(Background.to_json())

# convert the object into a dict
background_dict = background_instance.to_dict()
# create an instance of Background from a dict
background_from_dict = Background.from_dict(background_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


