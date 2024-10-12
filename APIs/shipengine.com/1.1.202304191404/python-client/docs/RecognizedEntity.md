# RecognizedEntity

An entity is a single piece of data that was recognized in unstructured text.  For example, a city, a postal code, package dimensions, insured value, etc.  Each entity includes the original text and the parsed value. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | The index of the last character of this entity within the original text | 
**result** | **Dict[str, object]** | The normalized value of the entity.  Most entity results have a &#x60;value&#x60; field, which is the normalized value of the entity.  For example, if the substring \&quot;john doe\&quot; was recognized as a \&quot;person\&quot; entity, then the value might be normalized to have proper capitalization (e.g. \&quot;John Doe\&quot;).  Or if the substring \&quot;ft worth\&quot; was recognized as a \&quot;city\&quot; entity, then the value might be normalized to \&quot;Fort Worth\&quot;.  Some entities have other information in addition to, or instead of a &#x60;value&#x60;.  For example, a \&quot;dimensions\&quot; entity will have separate fields for &#x60;length&#x60;, &#x60;width&#x60;, &#x60;height&#x60;, and &#x60;unit&#x60;.  | [optional] 
**score** | **float** | A confidence score between zero and one that indicates how certain the API is that it correctly recognized this entity  | 
**start_index** | **int** | The index of the first character of this entity within the original text | 
**text** | **str** | The substring from the original text that was recognized as this entity | 
**type** | **str** | The Entity type (e.g. \&quot;weight\&quot;, \&quot;person\&quot;, \&quot;address_line1\&quot;, etc.) | 

## Example

```python
from openapi_client.models.recognized_entity import RecognizedEntity

# TODO update the JSON string below
json = "{}"
# create an instance of RecognizedEntity from a JSON string
recognized_entity_instance = RecognizedEntity.from_json(json)
# print the JSON string representation of the object
print(RecognizedEntity.to_json())

# convert the object into a dict
recognized_entity_dict = recognized_entity_instance.to_dict()
# create an instance of RecognizedEntity from a dict
recognized_entity_from_dict = RecognizedEntity.from_dict(recognized_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


