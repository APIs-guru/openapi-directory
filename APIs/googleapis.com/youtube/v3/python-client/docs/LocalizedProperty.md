# LocalizedProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_language** | [**LanguageTag**](LanguageTag.md) |  | [optional] 
**localized** | [**List[LocalizedString]**](LocalizedString.md) |  | [optional] 

## Example

```python
from openapi_client.models.localized_property import LocalizedProperty

# TODO update the JSON string below
json = "{}"
# create an instance of LocalizedProperty from a JSON string
localized_property_instance = LocalizedProperty.from_json(json)
# print the JSON string representation of the object
print(LocalizedProperty.to_json())

# convert the object into a dict
localized_property_dict = localized_property_instance.to_dict()
# create an instance of LocalizedProperty from a dict
localized_property_from_dict = LocalizedProperty.from_dict(localized_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


