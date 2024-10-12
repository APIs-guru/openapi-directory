# NetworkSecurityGroup

NetworkSecurityGroup resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated | [optional] 
**properties** | [**NetworkSecurityGroupPropertiesFormat**](NetworkSecurityGroupPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_security_group import NetworkSecurityGroup

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkSecurityGroup from a JSON string
network_security_group_instance = NetworkSecurityGroup.from_json(json)
# print the JSON string representation of the object
print(NetworkSecurityGroup.to_json())

# convert the object into a dict
network_security_group_dict = network_security_group_instance.to_dict()
# create an instance of NetworkSecurityGroup from a dict
network_security_group_from_dict = NetworkSecurityGroup.from_dict(network_security_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


