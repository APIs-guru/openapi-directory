# UserVisibleAppsLinkagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppEncryptionDeclarationRelationshipsAppData]**](AppEncryptionDeclarationRelationshipsAppData.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_visible_apps_linkages_response import UserVisibleAppsLinkagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserVisibleAppsLinkagesResponse from a JSON string
user_visible_apps_linkages_response_instance = UserVisibleAppsLinkagesResponse.from_json(json)
# print the JSON string representation of the object
print(UserVisibleAppsLinkagesResponse.to_json())

# convert the object into a dict
user_visible_apps_linkages_response_dict = user_visible_apps_linkages_response_instance.to_dict()
# create an instance of UserVisibleAppsLinkagesResponse from a dict
user_visible_apps_linkages_response_from_dict = UserVisibleAppsLinkagesResponse.from_dict(user_visible_apps_linkages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


