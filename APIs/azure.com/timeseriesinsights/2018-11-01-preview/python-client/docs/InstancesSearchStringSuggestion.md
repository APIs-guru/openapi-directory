# InstancesSearchStringSuggestion

Suggested search string to be used for further search for time series instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**highlighted_search_string** | **str** | Highlighted suggested search string to be displayed to the user. Highlighting inserts &lt;hit&gt; and &lt;/hit&gt; tags in the portions of text that matched the search string. Do not use highlighted search string to do further search calls. | [optional] [readonly] 
**search_string** | **str** | Suggested search string. Can be used for further search for time series instances. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instances_search_string_suggestion import InstancesSearchStringSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesSearchStringSuggestion from a JSON string
instances_search_string_suggestion_instance = InstancesSearchStringSuggestion.from_json(json)
# print the JSON string representation of the object
print(InstancesSearchStringSuggestion.to_json())

# convert the object into a dict
instances_search_string_suggestion_dict = instances_search_string_suggestion_instance.to_dict()
# create an instance of InstancesSearchStringSuggestion from a dict
instances_search_string_suggestion_from_dict = InstancesSearchStringSuggestion.from_dict(instances_search_string_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


