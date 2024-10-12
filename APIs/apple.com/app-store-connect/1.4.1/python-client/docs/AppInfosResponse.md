# AppInfosResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppInfo]**](AppInfo.md) |  | 
**included** | [**List[AppInfoResponseIncludedInner]**](AppInfoResponseIncludedInner.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_infos_response import AppInfosResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfosResponse from a JSON string
app_infos_response_instance = AppInfosResponse.from_json(json)
# print the JSON string representation of the object
print(AppInfosResponse.to_json())

# convert the object into a dict
app_infos_response_dict = app_infos_response_instance.to_dict()
# create an instance of AppInfosResponse from a dict
app_infos_response_from_dict = AppInfosResponse.from_dict(app_infos_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


