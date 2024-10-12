# CorsSettings

Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_http_options** | **bool** | Configuration to allow HTTP OPTIONS calls to skip authorization. If undefined, IAP will not apply any special logic to OPTIONS requests. | [optional] 

## Example

```python
from openapi_client.models.cors_settings import CorsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CorsSettings from a JSON string
cors_settings_instance = CorsSettings.from_json(json)
# print the JSON string representation of the object
print(CorsSettings.to_json())

# convert the object into a dict
cors_settings_dict = cors_settings_instance.to_dict()
# create an instance of CorsSettings from a dict
cors_settings_from_dict = CorsSettings.from_dict(cors_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


