# UsagesList200ResponseValueInnerName

The name of the quota

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | The localized name of the quota | [optional] 
**value** | **str** | The unlocalized name (or ID) of the quota | [optional] 

## Example

```python
from openapi_client.models.usages_list200_response_value_inner_name import UsagesList200ResponseValueInnerName

# TODO update the JSON string below
json = "{}"
# create an instance of UsagesList200ResponseValueInnerName from a JSON string
usages_list200_response_value_inner_name_instance = UsagesList200ResponseValueInnerName.from_json(json)
# print the JSON string representation of the object
print(UsagesList200ResponseValueInnerName.to_json())

# convert the object into a dict
usages_list200_response_value_inner_name_dict = usages_list200_response_value_inner_name_instance.to_dict()
# create an instance of UsagesList200ResponseValueInnerName from a dict
usages_list200_response_value_inner_name_from_dict = UsagesList200ResponseValueInnerName.from_dict(usages_list200_response_value_inner_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


