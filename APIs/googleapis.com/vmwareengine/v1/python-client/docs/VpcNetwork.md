# VpcNetwork

Represents a VMware Engine VPC network that is managed by a VMware Engine network resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Output only. The relative resource name of the service VPC network this VMware Engine network is attached to. For example: &#x60;projects/123123/global/networks/my-network&#x60; | [optional] [readonly] 
**type** | **str** | Output only. Type of VPC network (INTRANET, INTERNET, or GOOGLE_CLOUD) | [optional] [readonly] 

## Example

```python
from openapi_client.models.vpc_network import VpcNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of VpcNetwork from a JSON string
vpc_network_instance = VpcNetwork.from_json(json)
# print the JSON string representation of the object
print(VpcNetwork.to_json())

# convert the object into a dict
vpc_network_dict = vpc_network_instance.to_dict()
# create an instance of VpcNetwork from a dict
vpc_network_from_dict = VpcNetwork.from_dict(vpc_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


