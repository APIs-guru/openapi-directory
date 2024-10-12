# SharePermission

Details of a share permission for the filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | [**GroupName**](GroupName.md) | The group that the filter is shared with. For a request, specify the &#x60;groupId&#x60; or &#x60;name&#x60; property for the group. As a group&#39;s name can change, use of &#x60;groupId&#x60; is recommended. | [optional] 
**id** | **int** | The unique identifier of the share permission. | [optional] [readonly] 
**project** | [**Project**](Project.md) | The project that the filter is shared with. This is similar to the project object returned by [Get project](#api-rest-api-3-project-projectIdOrKey-get) but it contains a subset of the properties, which are: &#x60;self&#x60;, &#x60;id&#x60;, &#x60;key&#x60;, &#x60;assigneeType&#x60;, &#x60;name&#x60;, &#x60;roles&#x60;, &#x60;avatarUrls&#x60;, &#x60;projectType&#x60;, &#x60;simplified&#x60;.   For a request, specify the &#x60;id&#x60; for the project. | [optional] 
**role** | [**ProjectRole**](ProjectRole.md) | The project role that the filter is shared with.   For a request, specify the &#x60;id&#x60; for the role. You must also specify the &#x60;project&#x60; object and &#x60;id&#x60; for the project that the role is in. | [optional] 
**type** | **str** | The type of share permission:   *  &#x60;user&#x60; Shared with a user.  *  &#x60;group&#x60; Shared with a group. If set in a request, then specify &#x60;sharePermission.group&#x60; as well.  *  &#x60;project&#x60; Shared with a project. If set in a request, then specify &#x60;sharePermission.project&#x60; as well.  *  &#x60;projectRole&#x60; Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with &#x60;projectId&#x60; and &#x60;projectRoleId&#x60;.  *  &#x60;global&#x60; Shared globally. If set in a request, no other &#x60;sharePermission&#x60; properties need to be specified.  *  &#x60;loggedin&#x60; Shared with all logged-in users. Note: This value is set in a request by specifying &#x60;authenticated&#x60; as the &#x60;type&#x60;.  *  &#x60;project-unknown&#x60; Shared with a project that the user does not have access to. Cannot be set in a request. | 
**user** | [**UserBean**](UserBean.md) | The user account ID that the filter is shared with. For a request, specify the &#x60;accountId&#x60; property for the user. | [optional] 

## Example

```python
from openapi_client.models.share_permission import SharePermission

# TODO update the JSON string below
json = "{}"
# create an instance of SharePermission from a JSON string
share_permission_instance = SharePermission.from_json(json)
# print the JSON string representation of the object
print(SharePermission.to_json())

# convert the object into a dict
share_permission_dict = share_permission_instance.to_dict()
# create an instance of SharePermission from a dict
share_permission_from_dict = SharePermission.from_dict(share_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


