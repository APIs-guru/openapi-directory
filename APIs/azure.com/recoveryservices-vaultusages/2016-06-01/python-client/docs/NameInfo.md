# NameInfo

The name of usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | Localized value of usage. | [optional] 
**value** | **str** | Value of usage. | [optional] 

## Example

```python
from openapi_client.models.name_info import NameInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NameInfo from a JSON string
name_info_instance = NameInfo.from_json(json)
# print the JSON string representation of the object
print(NameInfo.to_json())

# convert the object into a dict
name_info_dict = name_info_instance.to_dict()
# create an instance of NameInfo from a dict
name_info_from_dict = NameInfo.from_dict(name_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


