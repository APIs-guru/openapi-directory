# VpcPeeringConfig

The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subnet** | **str** | Required. A free subnet for peering. (CIDR of /29) | [optional] 
**vpc_name** | **str** | Required. fully qualified name of the VPC Datastream will peer to. | [optional] 

## Example

```python
from openapi_client.models.vpc_peering_config import VpcPeeringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VpcPeeringConfig from a JSON string
vpc_peering_config_instance = VpcPeeringConfig.from_json(json)
# print the JSON string representation of the object
print(VpcPeeringConfig.to_json())

# convert the object into a dict
vpc_peering_config_dict = vpc_peering_config_instance.to_dict()
# create an instance of VpcPeeringConfig from a dict
vpc_peering_config_from_dict = VpcPeeringConfig.from_dict(vpc_peering_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


