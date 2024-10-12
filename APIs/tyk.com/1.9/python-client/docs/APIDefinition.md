# APIDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_id** | **str** |  | [optional] 
**auth** | [**APIDefinitionAuth**](APIDefinitionAuth.md) |  | [optional] 
**definition** | [**APIDefinitionDefinition**](APIDefinitionDefinition.md) |  | [optional] 
**enable_jwt** | **bool** |  | [optional] 
**enable_signature_checking** | **bool** |  | [optional] 
**hmac_allowed_clock_skew** | **float** |  | [optional] 
**id** | **str** |  | [optional] 
**jwt_identity_base_field** | **str** |  | [optional] 
**jwt_policy_field_name** | **str** |  | [optional] 
**jwt_signing_method** | **str** |  | [optional] 
**jwt_source** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**notifications** | [**APIDefinitionNotifications**](APIDefinitionNotifications.md) |  | [optional] 
**oauth_meta** | [**APIDefinitionOauthMeta**](APIDefinitionOauthMeta.md) |  | [optional] 
**org_id** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**uptime_tests** | [**APIDefinitionUptimeTests**](APIDefinitionUptimeTests.md) |  | [optional] 
**use_basic_auth** | **bool** |  | [optional] 
**use_keyless** | **bool** |  | [optional] 
**use_oauth2** | **bool** |  | [optional] 
**version_data** | [**APIDefinitionVersionData**](APIDefinitionVersionData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_definition import APIDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinition from a JSON string
api_definition_instance = APIDefinition.from_json(json)
# print the JSON string representation of the object
print(APIDefinition.to_json())

# convert the object into a dict
api_definition_dict = api_definition_instance.to_dict()
# create an instance of APIDefinition from a dict
api_definition_from_dict = APIDefinition.from_dict(api_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


