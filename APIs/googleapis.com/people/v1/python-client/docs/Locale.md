# Locale

A person's locale preference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47) language tag representing the locale. | [optional] 

## Example

```python
from openapi_client.models.locale import Locale

# TODO update the JSON string below
json = "{}"
# create an instance of Locale from a JSON string
locale_instance = Locale.from_json(json)
# print the JSON string representation of the object
print(Locale.to_json())

# convert the object into a dict
locale_dict = locale_instance.to_dict()
# create an instance of Locale from a dict
locale_from_dict = Locale.from_dict(locale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


