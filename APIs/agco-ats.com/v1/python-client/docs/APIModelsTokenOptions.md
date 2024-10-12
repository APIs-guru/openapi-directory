# APIModelsTokenOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bearer_action** | **str** | The action to perform on the bearer token. Optional. Defaults to ‘None’. | [optional] 
**mac_action** | **str** | The action to perform on the MAC token. Optional. Defaults to ‘None’. | [optional] 

## Example

```python
from openapi_client.models.api_models_token_options import APIModelsTokenOptions

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsTokenOptions from a JSON string
api_models_token_options_instance = APIModelsTokenOptions.from_json(json)
# print the JSON string representation of the object
print(APIModelsTokenOptions.to_json())

# convert the object into a dict
api_models_token_options_dict = api_models_token_options_instance.to_dict()
# create an instance of APIModelsTokenOptions from a dict
api_models_token_options_from_dict = APIModelsTokenOptions.from_dict(api_models_token_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


