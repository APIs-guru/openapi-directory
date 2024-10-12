# ClientConfig

All xds configs for a particular client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node** | [**Node**](Node.md) |  | [optional] 
**xds_config** | [**List[PerXdsConfig]**](PerXdsConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.client_config import ClientConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ClientConfig from a JSON string
client_config_instance = ClientConfig.from_json(json)
# print the JSON string representation of the object
print(ClientConfig.to_json())

# convert the object into a dict
client_config_dict = client_config_instance.to_dict()
# create an instance of ClientConfig from a dict
client_config_from_dict = ClientConfig.from_dict(client_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


