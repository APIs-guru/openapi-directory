# GetFoldersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Folder]**](Folder.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_folders_response import GetFoldersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetFoldersResponse from a JSON string
get_folders_response_instance = GetFoldersResponse.from_json(json)
# print the JSON string representation of the object
print(GetFoldersResponse.to_json())

# convert the object into a dict
get_folders_response_dict = get_folders_response_instance.to_dict()
# create an instance of GetFoldersResponse from a dict
get_folders_response_from_dict = GetFoldersResponse.from_dict(get_folders_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


