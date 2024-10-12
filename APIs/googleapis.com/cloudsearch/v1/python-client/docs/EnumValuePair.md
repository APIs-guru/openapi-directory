# EnumValuePair

The enumeration value pair defines two things: a required string value and an optional integer value. The string value defines the necessary query term required to retrieve that item, such as *p0* for a priority item. The integer value determines the ranking of that string value relative to other enumerated values for the same property. For example, you might associate *p0* with *0* and define another enum pair such as *p1* and *1*. You must use the integer value in combination with ordered ranking to set the ranking of a given value relative to other enumerated values for the same property name. Here, a ranking order of DESCENDING for *priority* properties results in a ranking boost for items indexed with a value of *p0* compared to items indexed with a value of *p1*. Without a specified ranking order, the integer value has no effect on item ranking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integer_value** | **int** | The integer value of the EnumValuePair which must be non-negative. Optional. | [optional] 
**string_value** | **str** | The string value of the EnumValuePair. The maximum length is 32 characters. | [optional] 

## Example

```python
from openapi_client.models.enum_value_pair import EnumValuePair

# TODO update the JSON string below
json = "{}"
# create an instance of EnumValuePair from a JSON string
enum_value_pair_instance = EnumValuePair.from_json(json)
# print the JSON string representation of the object
print(EnumValuePair.to_json())

# convert the object into a dict
enum_value_pair_dict = enum_value_pair_instance.to_dict()
# create an instance of EnumValuePair from a dict
enum_value_pair_from_dict = EnumValuePair.from_dict(enum_value_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


