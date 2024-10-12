# TagLanguageMarshaller


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**iso_code** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tag_language_marshaller import TagLanguageMarshaller

# TODO update the JSON string below
json = "{}"
# create an instance of TagLanguageMarshaller from a JSON string
tag_language_marshaller_instance = TagLanguageMarshaller.from_json(json)
# print the JSON string representation of the object
print(TagLanguageMarshaller.to_json())

# convert the object into a dict
tag_language_marshaller_dict = tag_language_marshaller_instance.to_dict()
# create an instance of TagLanguageMarshaller from a dict
tag_language_marshaller_from_dict = TagLanguageMarshaller.from_dict(tag_language_marshaller_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


