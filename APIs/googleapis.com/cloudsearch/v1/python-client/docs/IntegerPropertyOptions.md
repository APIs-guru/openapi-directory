# IntegerPropertyOptions

The options for integer properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integer_faceting_options** | [**IntegerFacetingOptions**](IntegerFacetingOptions.md) |  | [optional] 
**maximum_value** | **str** | The maximum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values greater than the maximum are accepted and ranked with the same weight as items indexed with the maximum value. | [optional] 
**minimum_value** | **str** | The minimum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values less than the minimum are accepted and ranked with the same weight as items indexed with the minimum value. | [optional] 
**operator_options** | [**IntegerOperatorOptions**](IntegerOperatorOptions.md) |  | [optional] 
**ordered_ranking** | **str** | Used to specify the ordered ranking for the integer. Can only be used if isRepeatable is false. | [optional] 

## Example

```python
from openapi_client.models.integer_property_options import IntegerPropertyOptions

# TODO update the JSON string below
json = "{}"
# create an instance of IntegerPropertyOptions from a JSON string
integer_property_options_instance = IntegerPropertyOptions.from_json(json)
# print the JSON string representation of the object
print(IntegerPropertyOptions.to_json())

# convert the object into a dict
integer_property_options_dict = integer_property_options_instance.to_dict()
# create an instance of IntegerPropertyOptions from a dict
integer_property_options_from_dict = IntegerPropertyOptions.from_dict(integer_property_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


