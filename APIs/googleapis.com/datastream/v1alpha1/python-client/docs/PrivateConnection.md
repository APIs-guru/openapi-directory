# PrivateConnection

The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The create time of the resource. | [optional] [readonly] 
**display_name** | **str** | Required. Display name. | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels. | [optional] 
**name** | **str** | Output only. The resource&#39;s name. | [optional] [readonly] 
**state** | **str** | Output only. The state of the Private Connection. | [optional] [readonly] 
**update_time** | **str** | Output only. The update time of the resource. | [optional] [readonly] 
**vpc_peering_config** | [**VpcPeeringConfig**](VpcPeeringConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.private_connection import PrivateConnection

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateConnection from a JSON string
private_connection_instance = PrivateConnection.from_json(json)
# print the JSON string representation of the object
print(PrivateConnection.to_json())

# convert the object into a dict
private_connection_dict = private_connection_instance.to_dict()
# create an instance of PrivateConnection from a dict
private_connection_from_dict = PrivateConnection.from_dict(private_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


