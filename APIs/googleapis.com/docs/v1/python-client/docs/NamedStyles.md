# NamedStyles

The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**styles** | [**List[NamedStyle]**](NamedStyle.md) | The named styles. There&#39;s an entry for each of the possible named style types. | [optional] 

## Example

```python
from openapi_client.models.named_styles import NamedStyles

# TODO update the JSON string below
json = "{}"
# create an instance of NamedStyles from a JSON string
named_styles_instance = NamedStyles.from_json(json)
# print the JSON string representation of the object
print(NamedStyles.to_json())

# convert the object into a dict
named_styles_dict = named_styles_instance.to_dict()
# create an instance of NamedStyles from a dict
named_styles_from_dict = NamedStyles.from_dict(named_styles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


