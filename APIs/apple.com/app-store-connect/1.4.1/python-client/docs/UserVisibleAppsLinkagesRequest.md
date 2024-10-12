# UserVisibleAppsLinkagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppEncryptionDeclarationRelationshipsAppData]**](AppEncryptionDeclarationRelationshipsAppData.md) |  | 

## Example

```python
from openapi_client.models.user_visible_apps_linkages_request import UserVisibleAppsLinkagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserVisibleAppsLinkagesRequest from a JSON string
user_visible_apps_linkages_request_instance = UserVisibleAppsLinkagesRequest.from_json(json)
# print the JSON string representation of the object
print(UserVisibleAppsLinkagesRequest.to_json())

# convert the object into a dict
user_visible_apps_linkages_request_dict = user_visible_apps_linkages_request_instance.to_dict()
# create an instance of UserVisibleAppsLinkagesRequest from a dict
user_visible_apps_linkages_request_from_dict = UserVisibleAppsLinkagesRequest.from_dict(user_visible_apps_linkages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


