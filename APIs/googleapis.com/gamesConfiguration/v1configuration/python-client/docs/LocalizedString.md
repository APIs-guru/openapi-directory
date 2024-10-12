# LocalizedString

A localized string resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesConfiguration#localizedString&#x60;. | [optional] 
**locale** | **str** | The locale string. | [optional] 
**value** | **str** | The string value. | [optional] 

## Example

```python
from openapi_client.models.localized_string import LocalizedString

# TODO update the JSON string below
json = "{}"
# create an instance of LocalizedString from a JSON string
localized_string_instance = LocalizedString.from_json(json)
# print the JSON string representation of the object
print(LocalizedString.to_json())

# convert the object into a dict
localized_string_dict = localized_string_instance.to_dict()
# create an instance of LocalizedString from a dict
localized_string_from_dict = LocalizedString.from_dict(localized_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


