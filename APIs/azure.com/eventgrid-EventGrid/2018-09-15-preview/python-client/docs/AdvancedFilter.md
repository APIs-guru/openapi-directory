# AdvancedFilter

Represents an advanced filter that can be used to filter events based on various event envelope/data fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The filter key. Represents an event property with up to two levels of nesting. | [optional] 
**operator_type** | **str** | Represents the filter operator | 

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


