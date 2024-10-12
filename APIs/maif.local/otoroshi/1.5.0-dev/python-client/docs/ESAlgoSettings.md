# ESAlgoSettings

Settings for an EC + SHA signing algorithm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_key** | **str** | The private key for the RSA function | [optional] 
**public_key** | **str** | The public key for the RSA function | 
**size** | **int** | Size for SHA function. can be 256, 384 or 512 | 
**type** | **str** | String with value ESAlgoSettings | 

## Example

```python
from openapi_client.models.es_algo_settings import ESAlgoSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ESAlgoSettings from a JSON string
es_algo_settings_instance = ESAlgoSettings.from_json(json)
# print the JSON string representation of the object
print(ESAlgoSettings.to_json())

# convert the object into a dict
es_algo_settings_dict = es_algo_settings_instance.to_dict()
# create an instance of ESAlgoSettings from a dict
es_algo_settings_from_dict = ESAlgoSettings.from_dict(es_algo_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


