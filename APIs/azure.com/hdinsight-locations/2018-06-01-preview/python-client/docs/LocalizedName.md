# LocalizedName

The details about the localizable name of a type of usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | The localized name of the used resource. | [optional] 
**value** | **str** | The name of the used resource. | [optional] 

## Example

```python
from openapi_client.models.localized_name import LocalizedName

# TODO update the JSON string below
json = "{}"
# create an instance of LocalizedName from a JSON string
localized_name_instance = LocalizedName.from_json(json)
# print the JSON string representation of the object
print(LocalizedName.to_json())

# convert the object into a dict
localized_name_dict = localized_name_instance.to_dict()
# create an instance of LocalizedName from a dict
localized_name_from_dict = LocalizedName.from_dict(localized_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


