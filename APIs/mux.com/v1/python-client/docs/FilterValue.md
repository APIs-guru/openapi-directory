# FilterValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_count** | **int** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.filter_value import FilterValue

# TODO update the JSON string below
json = "{}"
# create an instance of FilterValue from a JSON string
filter_value_instance = FilterValue.from_json(json)
# print the JSON string representation of the object
print(FilterValue.to_json())

# convert the object into a dict
filter_value_dict = filter_value_instance.to_dict()
# create an instance of FilterValue from a dict
filter_value_from_dict = FilterValue.from_dict(filter_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


