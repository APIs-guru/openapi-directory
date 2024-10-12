# FilterPair

Filter used to match traffic data in your report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Filter type. | [optional] 
**value** | **str** | Filter value. | [optional] 

## Example

```python
from openapi_client.models.filter_pair import FilterPair

# TODO update the JSON string below
json = "{}"
# create an instance of FilterPair from a JSON string
filter_pair_instance = FilterPair.from_json(json)
# print the JSON string representation of the object
print(FilterPair.to_json())

# convert the object into a dict
filter_pair_dict = filter_pair_instance.to_dict()
# create an instance of FilterPair from a dict
filter_pair_from_dict = FilterPair.from_dict(filter_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


