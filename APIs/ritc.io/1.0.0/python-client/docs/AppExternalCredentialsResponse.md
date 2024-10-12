# AppExternalCredentialsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | [**AuthType**](AuthType.md) |  | [optional] 
**channel_id** | **str** |  | [optional] 
**credentials** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** | App external credentials api name | [optional] 

## Example

```python
from openapi_client.models.app_external_credentials_response import AppExternalCredentialsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppExternalCredentialsResponse from a JSON string
app_external_credentials_response_instance = AppExternalCredentialsResponse.from_json(json)
# print the JSON string representation of the object
print(AppExternalCredentialsResponse.to_json())

# convert the object into a dict
app_external_credentials_response_dict = app_external_credentials_response_instance.to_dict()
# create an instance of AppExternalCredentialsResponse from a dict
app_external_credentials_response_from_dict = AppExternalCredentialsResponse.from_dict(app_external_credentials_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


