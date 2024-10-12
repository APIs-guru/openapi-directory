# DirectoryListItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of this API. | [optional] 
**discovery_link** | **str** | A link to the discovery document. | [optional] 
**discovery_rest_url** | **str** | The URL for the discovery REST document. | [optional] 
**documentation_link** | **str** | A link to human readable documentation for the API. | [optional] 
**icons** | [**DirectoryListItemsInnerIcons**](DirectoryListItemsInnerIcons.md) |  | [optional] 
**id** | **str** | The id of this API. | [optional] 
**kind** | **str** | The kind for this response. | [optional] [default to 'discovery#directoryItem']
**labels** | **List[str]** | Labels for the status of this API, such as labs or deprecated. | [optional] 
**name** | **str** | The name of the API. | [optional] 
**preferred** | **bool** | True if this version is the preferred version to use. | [optional] 
**title** | **str** | The title of this API. | [optional] 
**version** | **str** | The version of the API. | [optional] 

## Example

```python
from openapi_client.models.directory_list_items_inner import DirectoryListItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryListItemsInner from a JSON string
directory_list_items_inner_instance = DirectoryListItemsInner.from_json(json)
# print the JSON string representation of the object
print(DirectoryListItemsInner.to_json())

# convert the object into a dict
directory_list_items_inner_dict = directory_list_items_inner_instance.to_dict()
# create an instance of DirectoryListItemsInner from a dict
directory_list_items_inner_from_dict = DirectoryListItemsInner.from_dict(directory_list_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


