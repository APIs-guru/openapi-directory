# SearchFoldersRequest

The request message for searching folders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | Optional. The maximum number of folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default. | [optional] 
**page_token** | **str** | Optional. A pagination token returned from a previous call to &#x60;SearchFolders&#x60; that indicates from where search should continue. | [optional] 
**query** | **str** | Search criteria used to select the Folders to return. If no search criteria is specified then all accessible folders will be returned. Query expressions can be used to restrict results based upon displayName, lifecycleState and parent, where the operators &#x60;&#x3D;&#x60;, &#x60;NOT&#x60;, &#x60;AND&#x60; and &#x60;OR&#x60; can be used along with the suffix wildcard symbol &#x60;*&#x60;. The displayName field in a query expression should use escaped quotes for values that include whitespace to prevent unexpected behavior. Some example queries are: * Query &#x60;displayName&#x3D;Test*&#x60; returns Folder resources whose display name starts with \&quot;Test\&quot;. * Query &#x60;lifecycleState&#x3D;ACTIVE&#x60; returns Folder resources with &#x60;lifecycleState&#x60; set to &#x60;ACTIVE&#x60;. * Query &#x60;parent&#x3D;folders/123&#x60; returns Folder resources that have &#x60;folders/123&#x60; as a parent resource. * Query &#x60;parent&#x3D;folders/123 AND lifecycleState&#x3D;ACTIVE&#x60; returns active Folder resources that have &#x60;folders/123&#x60; as a parent resource. * Query &#x60;displayName&#x3D;\\\\\&quot;Test String\\\\\&quot;&#x60; returns Folder resources with display names that include both \&quot;Test\&quot; and \&quot;String\&quot;. | [optional] 

## Example

```python
from openapi_client.models.search_folders_request import SearchFoldersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchFoldersRequest from a JSON string
search_folders_request_instance = SearchFoldersRequest.from_json(json)
# print the JSON string representation of the object
print(SearchFoldersRequest.to_json())

# convert the object into a dict
search_folders_request_dict = search_folders_request_instance.to_dict()
# create an instance of SearchFoldersRequest from a dict
search_folders_request_from_dict = SearchFoldersRequest.from_dict(search_folders_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


