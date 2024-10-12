# GoogleAnalyticsAdminV1alphaAccessBinding

A binding of a user to a set of roles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name of this binding. Format: accounts/{account}/accessBindings/{access_binding} or properties/{property}/accessBindings/{access_binding} Example: \&quot;accounts/100/accessBindings/200\&quot; | [optional] [readonly] 
**roles** | **List[str]** | A list of roles for to grant to the parent resource. Valid values: predefinedRoles/viewer predefinedRoles/analyst predefinedRoles/editor predefinedRoles/admin predefinedRoles/no-cost-data predefinedRoles/no-revenue-data For users, if an empty list of roles is set, this AccessBinding will be deleted. | [optional] 
**user** | **str** | If set, the email address of the user to set roles for. Format: \&quot;someuser@gmail.com\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_binding import GoogleAnalyticsAdminV1alphaAccessBinding

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessBinding from a JSON string
google_analytics_admin_v1alpha_access_binding_instance = GoogleAnalyticsAdminV1alphaAccessBinding.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessBinding.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_binding_dict = google_analytics_admin_v1alpha_access_binding_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessBinding from a dict
google_analytics_admin_v1alpha_access_binding_from_dict = GoogleAnalyticsAdminV1alphaAccessBinding.from_dict(google_analytics_admin_v1alpha_access_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


