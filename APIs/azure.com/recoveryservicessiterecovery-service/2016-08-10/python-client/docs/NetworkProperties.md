# NetworkProperties

Network Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_type** | **str** | The Fabric Type. | [optional] 
**friendly_name** | **str** | The Friendly Name. | [optional] 
**network_type** | **str** | The Network Type. | [optional] 
**subnets** | [**List[Subnet]**](Subnet.md) | The List of subnets. | [optional] 

## Example

```python
from openapi_client.models.network_properties import NetworkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkProperties from a JSON string
network_properties_instance = NetworkProperties.from_json(json)
# print the JSON string representation of the object
print(NetworkProperties.to_json())

# convert the object into a dict
network_properties_dict = network_properties_instance.to_dict()
# create an instance of NetworkProperties from a dict
network_properties_from_dict = NetworkProperties.from_dict(network_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


