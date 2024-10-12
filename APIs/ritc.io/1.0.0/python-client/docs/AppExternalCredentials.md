# AppExternalCredentials


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | [**AuthType**](AuthType.md) |  | [optional] 
**channel_id** | **str** |  | [optional] 
**credentials** | **object** |  | [optional] 
**name** | **str** | App external credentials api name | [optional] 

## Example

```python
from openapi_client.models.app_external_credentials import AppExternalCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of AppExternalCredentials from a JSON string
app_external_credentials_instance = AppExternalCredentials.from_json(json)
# print the JSON string representation of the object
print(AppExternalCredentials.to_json())

# convert the object into a dict
app_external_credentials_dict = app_external_credentials_instance.to_dict()
# create an instance of AppExternalCredentials from a dict
app_external_credentials_from_dict = AppExternalCredentials.from_dict(app_external_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


