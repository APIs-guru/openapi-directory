# Locale

A location/region designation for language.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id for this locale. Example: \&quot;en_US\&quot;. | [optional] 
**name** | **str** | A human-friendly name for this language/locale. Example: \&quot;English\&quot;. | [optional] 
**region** | **str** | A human-friendly string representing the region for this locale. Example: \&quot;United States\&quot;. Not present for every locale. | [optional] 
**tags** | **List[str]** | Tags for this dimension. Example: \&quot;default\&quot;. | [optional] 

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


