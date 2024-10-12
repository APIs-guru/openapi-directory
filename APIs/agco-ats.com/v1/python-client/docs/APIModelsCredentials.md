# APIModelsCredentials


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bearer_action** | **str** | The action to perform on the bearer token. Optional. Defaults to ‘None’. | [optional] 
**mac_action** | **str** | The action to perform on the MAC token. Optional. Defaults to ‘None’. | [optional] 
**password** | **str** | A secret word or phrase that must be used to gain admission | 
**username** | **str** | A unique ID a user needs to login with | 

## Example

```python
from openapi_client.models.api_models_credentials import APIModelsCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsCredentials from a JSON string
api_models_credentials_instance = APIModelsCredentials.from_json(json)
# print the JSON string representation of the object
print(APIModelsCredentials.to_json())

# convert the object into a dict
api_models_credentials_dict = api_models_credentials_instance.to_dict()
# create an instance of APIModelsCredentials from a dict
api_models_credentials_from_dict = APIModelsCredentials.from_dict(api_models_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


