# DirectoryResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more** | **bool** | are more results available, than start another search | [optional] 
**search_pointer** | **str** | pointer for stored search  | [optional] 
**spaces** | [**List[Space]**](Space.md) | list of spaces | [optional] 

## Example

```python
from openapi_client.models.directory_result import DirectoryResult

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryResult from a JSON string
directory_result_instance = DirectoryResult.from_json(json)
# print the JSON string representation of the object
print(DirectoryResult.to_json())

# convert the object into a dict
directory_result_dict = directory_result_instance.to_dict()
# create an instance of DirectoryResult from a dict
directory_result_from_dict = DirectoryResult.from_dict(directory_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


