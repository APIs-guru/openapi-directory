# APIModelsPasswordResetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter_name** | **str** | The query string parameter name to use for supplying the password reset token | 
**url** | **str** | The URL to direct the user to reset the password. | 
**username** | **str** | The username to reset the password for | 

## Example

```python
from openapi_client.models.api_models_password_reset_request import APIModelsPasswordResetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsPasswordResetRequest from a JSON string
api_models_password_reset_request_instance = APIModelsPasswordResetRequest.from_json(json)
# print the JSON string representation of the object
print(APIModelsPasswordResetRequest.to_json())

# convert the object into a dict
api_models_password_reset_request_dict = api_models_password_reset_request_instance.to_dict()
# create an instance of APIModelsPasswordResetRequest from a dict
api_models_password_reset_request_from_dict = APIModelsPasswordResetRequest.from_dict(api_models_password_reset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


