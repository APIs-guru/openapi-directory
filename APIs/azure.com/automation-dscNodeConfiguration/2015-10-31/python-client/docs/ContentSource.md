# ContentSource

Definition of the content source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | [**ContentHash**](ContentHash.md) |  | [optional] 
**type** | **str** | Gets or sets the content source type. | [optional] 
**value** | **str** | Gets or sets the value of the content. This is based on the content source type. | [optional] 
**version** | **str** | Gets or sets the version of the content. | [optional] 

## Example

```python
from openapi_client.models.content_source import ContentSource

# TODO update the JSON string below
json = "{}"
# create an instance of ContentSource from a JSON string
content_source_instance = ContentSource.from_json(json)
# print the JSON string representation of the object
print(ContentSource.to_json())

# convert the object into a dict
content_source_dict = content_source_instance.to_dict()
# create an instance of ContentSource from a dict
content_source_from_dict = ContentSource.from_dict(content_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


