# IdentityConfig

Identity related configuration, including service account based secure multi-tenancy user mappings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_service_account_mapping** | **Dict[str, str]** | Required. Map of user to service account. | [optional] 

## Example

```python
from openapi_client.models.identity_config import IdentityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityConfig from a JSON string
identity_config_instance = IdentityConfig.from_json(json)
# print the JSON string representation of the object
print(IdentityConfig.to_json())

# convert the object into a dict
identity_config_dict = identity_config_instance.to_dict()
# create an instance of IdentityConfig from a dict
identity_config_from_dict = IdentityConfig.from_dict(identity_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


