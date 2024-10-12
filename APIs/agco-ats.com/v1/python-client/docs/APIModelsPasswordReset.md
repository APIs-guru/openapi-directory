# APIModelsPasswordReset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_password** | **str** | The new password | 
**token** | **str** | The password reset token | 

## Example

```python
from openapi_client.models.api_models_password_reset import APIModelsPasswordReset

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsPasswordReset from a JSON string
api_models_password_reset_instance = APIModelsPasswordReset.from_json(json)
# print the JSON string representation of the object
print(APIModelsPasswordReset.to_json())

# convert the object into a dict
api_models_password_reset_dict = api_models_password_reset_instance.to_dict()
# create an instance of APIModelsPasswordReset from a dict
api_models_password_reset_from_dict = APIModelsPasswordReset.from_dict(api_models_password_reset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


