# TagMarshaller


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**language** | [**TagLanguageMarshaller**](TagLanguageMarshaller.md) |  | [optional] 
**name** | **str** |  | [optional] 
**type** | [**TagTypeMarshaller**](TagTypeMarshaller.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_marshaller import TagMarshaller

# TODO update the JSON string below
json = "{}"
# create an instance of TagMarshaller from a JSON string
tag_marshaller_instance = TagMarshaller.from_json(json)
# print the JSON string representation of the object
print(TagMarshaller.to_json())

# convert the object into a dict
tag_marshaller_dict = tag_marshaller_instance.to_dict()
# create an instance of TagMarshaller from a dict
tag_marshaller_from_dict = TagMarshaller.from_dict(tag_marshaller_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


