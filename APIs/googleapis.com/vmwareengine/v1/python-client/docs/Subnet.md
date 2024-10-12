# Subnet

Subnet in a private cloud. Either `management` subnets (such as vMotion) that are read-only, or `userDefined`, which can also be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway_ip** | **str** | The IP address of the gateway of this subnet. Must fall within the IP prefix defined above. | [optional] 
**ip_cidr_range** | **str** | The IP address range of the subnet in CIDR format &#39;10.0.0.0/24&#39;. | [optional] 
**name** | **str** | Output only. The resource name of this subnet. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/us-central1-a/privateClouds/my-cloud/subnets/my-subnet&#x60; | [optional] [readonly] 
**state** | **str** | Output only. The state of the resource. | [optional] [readonly] 
**type** | **str** | Output only. The type of the subnet. For example \&quot;management\&quot; or \&quot;userDefined\&quot;. | [optional] [readonly] 
**vlan_id** | **int** | Output only. VLAN ID of the VLAN on which the subnet is configured | [optional] [readonly] 

## Example

```python
from openapi_client.models.subnet import Subnet

# TODO update the JSON string below
json = "{}"
# create an instance of Subnet from a JSON string
subnet_instance = Subnet.from_json(json)
# print the JSON string representation of the object
print(Subnet.to_json())

# convert the object into a dict
subnet_dict = subnet_instance.to_dict()
# create an instance of Subnet from a dict
subnet_from_dict = Subnet.from_dict(subnet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


