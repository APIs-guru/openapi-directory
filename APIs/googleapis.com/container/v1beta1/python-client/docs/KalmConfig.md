# KalmConfig

Configuration options for the KALM addon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether KALM is enabled for this cluster. | [optional] 

## Example

```python
from openapi_client.models.kalm_config import KalmConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KalmConfig from a JSON string
kalm_config_instance = KalmConfig.from_json(json)
# print the JSON string representation of the object
print(KalmConfig.to_json())

# convert the object into a dict
kalm_config_dict = kalm_config_instance.to_dict()
# create an instance of KalmConfig from a dict
kalm_config_from_dict = KalmConfig.from_dict(kalm_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


