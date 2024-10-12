# EnumPropertyOptions

The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator_options** | [**EnumOperatorOptions**](EnumOperatorOptions.md) |  | [optional] 
**ordered_ranking** | **str** | Used to specify the ordered ranking for the enumeration that determines how the integer values provided in the possible EnumValuePairs are used to rank results. If specified, integer values must be provided for all possible EnumValuePair values given for this property. Can only be used if isRepeatable is false. | [optional] 
**possible_values** | [**List[EnumValuePair]**](EnumValuePair.md) | The list of possible values for the enumeration property. All EnumValuePairs must provide a string value. If you specify an integer value for one EnumValuePair, then all possible EnumValuePairs must provide an integer value. Both the string value and integer value must be unique over all possible values. Once set, possible values cannot be removed or modified. If you supply an ordered ranking and think you might insert additional enum values in the future, leave gaps in the initial integer values to allow adding a value in between previously registered values. The maximum number of elements is 100. | [optional] 

## Example

```python
from openapi_client.models.enum_property_options import EnumPropertyOptions

# TODO update the JSON string below
json = "{}"
# create an instance of EnumPropertyOptions from a JSON string
enum_property_options_instance = EnumPropertyOptions.from_json(json)
# print the JSON string representation of the object
print(EnumPropertyOptions.to_json())

# convert the object into a dict
enum_property_options_dict = enum_property_options_instance.to_dict()
# create an instance of EnumPropertyOptions from a dict
enum_property_options_from_dict = EnumPropertyOptions.from_dict(enum_property_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


