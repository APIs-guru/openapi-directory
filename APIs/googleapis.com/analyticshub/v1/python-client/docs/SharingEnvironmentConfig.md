# SharingEnvironmentConfig

Sharing environment is a behavior model for sharing data within a data exchange. This option is configurable for a data exchange.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dcr_exchange_config** | [**DcrExchangeConfig**](DcrExchangeConfig.md) |  | [optional] 
**default_exchange_config** | **object** | Default Analytics Hub data exchange, used for secured data sharing. | [optional] 

## Example

```python
from openapi_client.models.sharing_environment_config import SharingEnvironmentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SharingEnvironmentConfig from a JSON string
sharing_environment_config_instance = SharingEnvironmentConfig.from_json(json)
# print the JSON string representation of the object
print(SharingEnvironmentConfig.to_json())

# convert the object into a dict
sharing_environment_config_dict = sharing_environment_config_instance.to_dict()
# create an instance of SharingEnvironmentConfig from a dict
sharing_environment_config_from_dict = SharingEnvironmentConfig.from_dict(sharing_environment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


