# IPConfig

Details related to the IP address configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway** | **str** | The gateway of the network adapter. | 
**ip_address** | **str** | The IP address of the network adapter, either ipv4 or ipv6. | 
**prefix_length** | **int** | The prefix length of the network adapter. | [optional] 

## Example

```python
from openapi_client.models.ip_config import IPConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IPConfig from a JSON string
ip_config_instance = IPConfig.from_json(json)
# print the JSON string representation of the object
print(IPConfig.to_json())

# convert the object into a dict
ip_config_dict = ip_config_instance.to_dict()
# create an instance of IPConfig from a dict
ip_config_from_dict = IPConfig.from_dict(ip_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


