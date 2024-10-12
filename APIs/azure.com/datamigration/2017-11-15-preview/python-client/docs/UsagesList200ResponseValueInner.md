# UsagesList200ResponseValueInner

Describes a quota for or usage details about a resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **float** | The current value of the quota. If null or missing, the current value cannot be determined in the context of the request. | [optional] 
**id** | **str** | The resource ID of the quota object | [optional] 
**limit** | **float** | The maximum value of the quota. If null or missing, the quota has no maximum, in which case it merely tracks usage. | [optional] 
**name** | [**UsagesList200ResponseValueInnerName**](UsagesList200ResponseValueInnerName.md) |  | [optional] 
**unit** | **str** | The unit for the quota, such as Count, Bytes, BytesPerSecond, etc. | [optional] 

## Example

```python
from openapi_client.models.usages_list200_response_value_inner import UsagesList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of UsagesList200ResponseValueInner from a JSON string
usages_list200_response_value_inner_instance = UsagesList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(UsagesList200ResponseValueInner.to_json())

# convert the object into a dict
usages_list200_response_value_inner_dict = usages_list200_response_value_inner_instance.to_dict()
# create an instance of UsagesList200ResponseValueInner from a dict
usages_list200_response_value_inner_from_dict = UsagesList200ResponseValueInner.from_dict(usages_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


