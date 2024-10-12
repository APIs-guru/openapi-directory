# ApplicationManagementPolicy

Managed application management policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | [**ApplicationManagementMode**](ApplicationManagementMode.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_management_policy import ApplicationManagementPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationManagementPolicy from a JSON string
application_management_policy_instance = ApplicationManagementPolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationManagementPolicy.to_json())

# convert the object into a dict
application_management_policy_dict = application_management_policy_instance.to_dict()
# create an instance of ApplicationManagementPolicy from a dict
application_management_policy_from_dict = ApplicationManagementPolicy.from_dict(application_management_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


