# VpcSubNetwork

Sub-segment ranges inside of a VPC Network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Required. Network name. If the network is not part of the organization, the &#x60;compute.network.get&#x60; permission must be granted to the caller. Format: &#x60;//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}&#x60; Example: &#x60;//compute.googleapis.com/projects/my-project/global/networks/network-1&#x60; | [optional] 
**vpc_ip_subnetworks** | **List[str]** | CIDR block IP subnetwork specification. The IP address must be an IPv4 address and can be a public or private IP address. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, \&quot;192.0.2.0/24\&quot; is accepted but \&quot;192.0.2.1/24\&quot; is not. If empty, all IP addresses are allowed. | [optional] 

## Example

```python
from openapi_client.models.vpc_sub_network import VpcSubNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of VpcSubNetwork from a JSON string
vpc_sub_network_instance = VpcSubNetwork.from_json(json)
# print the JSON string representation of the object
print(VpcSubNetwork.to_json())

# convert the object into a dict
vpc_sub_network_dict = vpc_sub_network_instance.to_dict()
# create an instance of VpcSubNetwork from a dict
vpc_sub_network_from_dict = VpcSubNetwork.from_dict(vpc_sub_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


