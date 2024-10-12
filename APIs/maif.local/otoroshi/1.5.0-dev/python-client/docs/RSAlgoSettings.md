# RSAlgoSettings

Settings for an HMAC + SHA signing algorithm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_key** | **str** | The private key for the RSA function | [optional] 
**public_key** | **str** | The public key for the RSA function | 
**size** | **int** | Size for SHA function. can be 256, 384 or 512 | 
**type** | **str** | String with value RSAlgoSettings | 

## Example

```python
from openapi_client.models.rs_algo_settings import RSAlgoSettings

# TODO update the JSON string below
json = "{}"
# create an instance of RSAlgoSettings from a JSON string
rs_algo_settings_instance = RSAlgoSettings.from_json(json)
# print the JSON string representation of the object
print(RSAlgoSettings.to_json())

# convert the object into a dict
rs_algo_settings_dict = rs_algo_settings_instance.to_dict()
# create an instance of RSAlgoSettings from a dict
rs_algo_settings_from_dict = RSAlgoSettings.from_dict(rs_algo_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


