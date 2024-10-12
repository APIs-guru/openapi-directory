# FilterList

List of infoTypes to be filtered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_types** | **List[str]** | These infoTypes are based on after the &#x60;eval_info_type_mapping&#x60; and &#x60;golden_info_type_mapping&#x60;. | [optional] 

## Example

```python
from openapi_client.models.filter_list import FilterList

# TODO update the JSON string below
json = "{}"
# create an instance of FilterList from a JSON string
filter_list_instance = FilterList.from_json(json)
# print the JSON string representation of the object
print(FilterList.to_json())

# convert the object into a dict
filter_list_dict = filter_list_instance.to_dict()
# create an instance of FilterList from a dict
filter_list_from_dict = FilterList.from_dict(filter_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


