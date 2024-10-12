# DirectoryList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovery_version** | **str** | Indicate the version of the Discovery API used to generate this doc. | [optional] [default to 'v1']
**items** | [**List[DirectoryListItemsInner]**](DirectoryListItemsInner.md) | The individual directory entries. One entry per api/version pair. | [optional] 
**kind** | **str** | The kind for this response. | [optional] [default to 'discovery#directoryList']

## Example

```python
from openapi_client.models.directory_list import DirectoryList

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryList from a JSON string
directory_list_instance = DirectoryList.from_json(json)
# print the JSON string representation of the object
print(DirectoryList.to_json())

# convert the object into a dict
directory_list_dict = directory_list_instance.to_dict()
# create an instance of DirectoryList from a dict
directory_list_from_dict = DirectoryList.from_dict(directory_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


