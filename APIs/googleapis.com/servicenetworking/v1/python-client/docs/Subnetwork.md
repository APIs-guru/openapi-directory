# Subnetwork

Represents a subnet that was created or discovered by a private access management service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_cidr_range** | **str** | Subnetwork CIDR range in &#x60;10.x.x.x/y&#x60; format. | [optional] 
**name** | **str** | Subnetwork name. See https://cloud.google.com/compute/docs/vpc/ | [optional] 
**network** | **str** | In the Shared VPC host project, the VPC network that&#39;s peered with the consumer network. For example: &#x60;projects/1234321/global/networks/host-network&#x60; | [optional] 
**outside_allocation** | **bool** | This is a discovered subnet that is not within the current consumer allocated ranges. | [optional] 
**region** | **str** | GCP region where the subnetwork is located. | [optional] 
**secondary_ip_ranges** | [**List[SecondaryIpRange]**](SecondaryIpRange.md) | List of secondary IP ranges in this subnetwork. | [optional] 

## Example

```python
from openapi_client.models.subnetwork import Subnetwork

# TODO update the JSON string below
json = "{}"
# create an instance of Subnetwork from a JSON string
subnetwork_instance = Subnetwork.from_json(json)
# print the JSON string representation of the object
print(Subnetwork.to_json())

# convert the object into a dict
subnetwork_dict = subnetwork_instance.to_dict()
# create an instance of Subnetwork from a dict
subnetwork_from_dict = Subnetwork.from_dict(subnetwork_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


