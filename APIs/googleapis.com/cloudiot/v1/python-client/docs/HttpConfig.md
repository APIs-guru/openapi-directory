# HttpConfig

The configuration of the HTTP bridge for a device registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_enabled_state** | **str** | If enabled, allows devices to use DeviceService via the HTTP protocol. Otherwise, any requests to DeviceService will fail for this registry. | [optional] 

## Example

```python
from openapi_client.models.http_config import HttpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HttpConfig from a JSON string
http_config_instance = HttpConfig.from_json(json)
# print the JSON string representation of the object
print(HttpConfig.to_json())

# convert the object into a dict
http_config_dict = http_config_instance.to_dict()
# create an instance of HttpConfig from a dict
http_config_from_dict = HttpConfig.from_dict(http_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


