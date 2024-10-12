# PingConfig

Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pings_count** | **int** | Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. | [optional] 

## Example

```python
from openapi_client.models.ping_config import PingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PingConfig from a JSON string
ping_config_instance = PingConfig.from_json(json)
# print the JSON string representation of the object
print(PingConfig.to_json())

# convert the object into a dict
ping_config_dict = ping_config_instance.to_dict()
# create an instance of PingConfig from a dict
ping_config_from_dict = PingConfig.from_dict(ping_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


