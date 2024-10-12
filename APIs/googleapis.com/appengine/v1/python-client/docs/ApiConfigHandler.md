# ApiConfigHandler

Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration for API handlers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_fail_action** | **str** | Action to take when users access resources that require authentication. Defaults to redirect. | [optional] 
**login** | **str** | Level of login required to access this resource. Defaults to optional. | [optional] 
**script** | **str** | Path to the script from the application root directory. | [optional] 
**security_level** | **str** | Security (HTTPS) enforcement for this URL. | [optional] 
**url** | **str** | URL to serve the endpoint at. | [optional] 

## Example

```python
from openapi_client.models.api_config_handler import ApiConfigHandler

# TODO update the JSON string below
json = "{}"
# create an instance of ApiConfigHandler from a JSON string
api_config_handler_instance = ApiConfigHandler.from_json(json)
# print the JSON string representation of the object
print(ApiConfigHandler.to_json())

# convert the object into a dict
api_config_handler_dict = api_config_handler_instance.to_dict()
# create an instance of ApiConfigHandler from a dict
api_config_handler_from_dict = ApiConfigHandler.from_dict(api_config_handler_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


