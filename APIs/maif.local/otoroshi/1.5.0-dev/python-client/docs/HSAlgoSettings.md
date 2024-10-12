# HSAlgoSettings

Settings for an HMAC + SHA signing algorithm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **str** | The secret value for the HMAC function | 
**size** | **int** | Size for SHA function. can be 256, 384 or 512 | 
**type** | **str** | String with value HSAlgoSettings | 

## Example

```python
from openapi_client.models.hs_algo_settings import HSAlgoSettings

# TODO update the JSON string below
json = "{}"
# create an instance of HSAlgoSettings from a JSON string
hs_algo_settings_instance = HSAlgoSettings.from_json(json)
# print the JSON string representation of the object
print(HSAlgoSettings.to_json())

# convert the object into a dict
hs_algo_settings_dict = hs_algo_settings_instance.to_dict()
# create an instance of HSAlgoSettings from a dict
hs_algo_settings_from_dict = HSAlgoSettings.from_dict(hs_algo_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


