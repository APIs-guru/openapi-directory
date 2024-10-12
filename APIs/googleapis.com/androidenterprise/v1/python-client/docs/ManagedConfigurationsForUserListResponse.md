# ManagedConfigurationsForUserListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_configuration_for_user** | [**List[ManagedConfiguration]**](ManagedConfiguration.md) | A managed configuration for an app for a specific user. | [optional] 

## Example

```python
from openapi_client.models.managed_configurations_for_user_list_response import ManagedConfigurationsForUserListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedConfigurationsForUserListResponse from a JSON string
managed_configurations_for_user_list_response_instance = ManagedConfigurationsForUserListResponse.from_json(json)
# print the JSON string representation of the object
print(ManagedConfigurationsForUserListResponse.to_json())

# convert the object into a dict
managed_configurations_for_user_list_response_dict = managed_configurations_for_user_list_response_instance.to_dict()
# create an instance of ManagedConfigurationsForUserListResponse from a dict
managed_configurations_for_user_list_response_from_dict = ManagedConfigurationsForUserListResponse.from_dict(managed_configurations_for_user_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


