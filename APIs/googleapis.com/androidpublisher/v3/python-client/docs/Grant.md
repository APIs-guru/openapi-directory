# Grant

An access grant resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_level_permissions** | **List[str]** | The permissions granted to the user for this app. | [optional] 
**name** | **str** | Required. Resource name for this grant, following the pattern \&quot;developers/{developer}/users/{email}/grants/{package_name}\&quot;. If this grant is for a draft app, the app ID will be used in this resource name instead of the package name. | [optional] 
**package_name** | **str** | Immutable. The package name of the app. This will be empty for draft apps. | [optional] 

## Example

```python
from openapi_client.models.grant import Grant

# TODO update the JSON string below
json = "{}"
# create an instance of Grant from a JSON string
grant_instance = Grant.from_json(json)
# print the JSON string representation of the object
print(Grant.to_json())

# convert the object into a dict
grant_dict = grant_instance.to_dict()
# create an instance of Grant from a dict
grant_from_dict = Grant.from_dict(grant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


