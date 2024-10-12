# IpConfig

Defines IP configuration where this Certificate Map is serving.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | Output only. An external IP address. | [optional] [readonly] 
**ports** | **List[int]** | Output only. Ports. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ip_config import IpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IpConfig from a JSON string
ip_config_instance = IpConfig.from_json(json)
# print the JSON string representation of the object
print(IpConfig.to_json())

# convert the object into a dict
ip_config_dict = ip_config_instance.to_dict()
# create an instance of IpConfig from a dict
ip_config_from_dict = IpConfig.from_dict(ip_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


