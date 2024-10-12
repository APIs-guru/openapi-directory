# TokenPayloadExternal

Contains basic app information and integrity signals like device attestation and licensing details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_details** | [**AccountDetails**](AccountDetails.md) |  | [optional] 
**app_integrity** | [**AppIntegrity**](AppIntegrity.md) |  | [optional] 
**device_integrity** | [**DeviceIntegrity**](DeviceIntegrity.md) |  | [optional] 
**environment_details** | [**EnvironmentDetails**](EnvironmentDetails.md) |  | [optional] 
**request_details** | [**RequestDetails**](RequestDetails.md) |  | [optional] 
**testing_details** | [**TestingDetails**](TestingDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_payload_external import TokenPayloadExternal

# TODO update the JSON string below
json = "{}"
# create an instance of TokenPayloadExternal from a JSON string
token_payload_external_instance = TokenPayloadExternal.from_json(json)
# print the JSON string representation of the object
print(TokenPayloadExternal.to_json())

# convert the object into a dict
token_payload_external_dict = token_payload_external_instance.to_dict()
# create an instance of TokenPayloadExternal from a dict
token_payload_external_from_dict = TokenPayloadExternal.from_dict(token_payload_external_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


