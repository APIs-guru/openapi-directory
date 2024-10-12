# GSuitePrincipal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gsuite_domain** | **bool** | This principal represents all users of the Google Workspace domain of the customer. | [optional] 
**gsuite_group_email** | **str** | This principal references a Google Workspace group name. | [optional] 
**gsuite_user_email** | **str** | This principal references a Google Workspace user account. | [optional] 

## Example

```python
from openapi_client.models.g_suite_principal import GSuitePrincipal

# TODO update the JSON string below
json = "{}"
# create an instance of GSuitePrincipal from a JSON string
g_suite_principal_instance = GSuitePrincipal.from_json(json)
# print the JSON string representation of the object
print(GSuitePrincipal.to_json())

# convert the object into a dict
g_suite_principal_dict = g_suite_principal_instance.to_dict()
# create an instance of GSuitePrincipal from a dict
g_suite_principal_from_dict = GSuitePrincipal.from_dict(g_suite_principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


