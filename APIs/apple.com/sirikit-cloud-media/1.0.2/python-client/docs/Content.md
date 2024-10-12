# Content


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ContentAttributes**](ContentAttributes.md) |  | [optional] 
**control** | **str** |  | [optional] [default to 'default']
**identifier** | **str** |  | 
**is_live** | **bool** |  | [optional] 
**play_index** | **int** |  | [optional] 
**url** | **str** |  | [optional] 

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


