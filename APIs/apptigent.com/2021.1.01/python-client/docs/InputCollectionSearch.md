# InputCollectionSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignorecase** | **str** | Ignore case when performing comparison | [optional] 
**input** | **List[str]** | Collection of strings to search | 
**match** | **str** | Text to match | 
**trim** | **str** | Trim white space from comparison string | [optional] 

## Example

```python
from openapi_client.models.input_collection_search import InputCollectionSearch

# TODO update the JSON string below
json = "{}"
# create an instance of InputCollectionSearch from a JSON string
input_collection_search_instance = InputCollectionSearch.from_json(json)
# print the JSON string representation of the object
print(InputCollectionSearch.to_json())

# convert the object into a dict
input_collection_search_dict = input_collection_search_instance.to_dict()
# create an instance of InputCollectionSearch from a dict
input_collection_search_from_dict = InputCollectionSearch.from_dict(input_collection_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


