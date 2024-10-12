# VpcPeeringConnectivity

The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vpc** | **str** | The name of the VPC network to peer with the Cloud SQL private network. | [optional] 

## Example

```python
from openapi_client.models.vpc_peering_connectivity import VpcPeeringConnectivity

# TODO update the JSON string below
json = "{}"
# create an instance of VpcPeeringConnectivity from a JSON string
vpc_peering_connectivity_instance = VpcPeeringConnectivity.from_json(json)
# print the JSON string representation of the object
print(VpcPeeringConnectivity.to_json())

# convert the object into a dict
vpc_peering_connectivity_dict = vpc_peering_connectivity_instance.to_dict()
# create an instance of VpcPeeringConnectivity from a dict
vpc_peering_connectivity_from_dict = VpcPeeringConnectivity.from_dict(vpc_peering_connectivity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


