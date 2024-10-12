# UsageName

The Usage Names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | Gets a localized string describing the resource name. | [optional] 
**value** | **str** | Gets a string describing the resource name. | [optional] 

## Example

```python
from openapi_client.models.usage_name import UsageName

# TODO update the JSON string below
json = "{}"
# create an instance of UsageName from a JSON string
usage_name_instance = UsageName.from_json(json)
# print the JSON string representation of the object
print(UsageName.to_json())

# convert the object into a dict
usage_name_dict = usage_name_instance.to_dict()
# create an instance of UsageName from a dict
usage_name_from_dict = UsageName.from_dict(usage_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


