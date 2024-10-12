# LocalizedStringBundle

A localized string bundle resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesConfiguration#localizedStringBundle&#x60;. | [optional] 
**translations** | [**List[LocalizedString]**](LocalizedString.md) | The locale strings. | [optional] 

## Example

```python
from openapi_client.models.localized_string_bundle import LocalizedStringBundle

# TODO update the JSON string below
json = "{}"
# create an instance of LocalizedStringBundle from a JSON string
localized_string_bundle_instance = LocalizedStringBundle.from_json(json)
# print the JSON string representation of the object
print(LocalizedStringBundle.to_json())

# convert the object into a dict
localized_string_bundle_dict = localized_string_bundle_instance.to_dict()
# create an instance of LocalizedStringBundle from a dict
localized_string_bundle_from_dict = LocalizedStringBundle.from_dict(localized_string_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


