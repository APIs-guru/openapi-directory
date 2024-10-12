# IPConfig

IP configuration details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**l_b_backend_address_pool_ids** | **List[str]** | The backend address pools associated with the IP configuration. | [optional] 
**public_ip_address_id** | **str** | The Id of the public IP address associated with the IP configuration. | [optional] 
**static_ip_address** | **str** | The static IP address of the IP configuration. | [optional] 

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


