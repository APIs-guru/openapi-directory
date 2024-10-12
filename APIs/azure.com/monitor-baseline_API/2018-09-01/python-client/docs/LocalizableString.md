# LocalizableString

The localizable string class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | The locale specific value. | [optional] 
**value** | **str** | The invariant value. | 

## Example

```python
from openapi_client.models.localizable_string import LocalizableString

# TODO update the JSON string below
json = "{}"
# create an instance of LocalizableString from a JSON string
localizable_string_instance = LocalizableString.from_json(json)
# print the JSON string representation of the object
print(LocalizableString.to_json())

# convert the object into a dict
localizable_string_dict = localizable_string_instance.to_dict()
# create an instance of LocalizableString from a dict
localizable_string_from_dict = LocalizableString.from_dict(localizable_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


