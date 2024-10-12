# AdvancedFilter

This is the base type that represents an advanced filter. To configure an advanced filter, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class such as BoolEqualsAdvancedFilter, NumberInAdvancedFilter, StringEqualsAdvancedFilter etc. depending on the type of the key based on which you want to filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The field/property in the event based on which you want to filter. | [optional] 
**operator_type** | **str** | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 

## Example

```python
from openapi_client.models.advanced_filter import AdvancedFilter

# TODO update the JSON string below
json = "{}"
# create an instance of AdvancedFilter from a JSON string
advanced_filter_instance = AdvancedFilter.from_json(json)
# print the JSON string representation of the object
print(AdvancedFilter.to_json())

# convert the object into a dict
advanced_filter_dict = advanced_filter_instance.to_dict()
# create an instance of AdvancedFilter from a dict
advanced_filter_from_dict = AdvancedFilter.from_dict(advanced_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


