# SearchWarning


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_search_cids** | **List[str]** | Channel CIDs for the searched channels | [optional] 
**channel_search_count** | **int** | Number of channels searched | [optional] 
**warning_code** | **int** | Code corresponding to the warning | 
**warning_description** | **str** | Description of the warning | 

## Example

```python
from openapi_client.models.search_warning import SearchWarning

# TODO update the JSON string below
json = "{}"
# create an instance of SearchWarning from a JSON string
search_warning_instance = SearchWarning.from_json(json)
# print the JSON string representation of the object
print(SearchWarning.to_json())

# convert the object into a dict
search_warning_dict = search_warning_instance.to_dict()
# create an instance of SearchWarning from a dict
search_warning_from_dict = SearchWarning.from_dict(search_warning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


