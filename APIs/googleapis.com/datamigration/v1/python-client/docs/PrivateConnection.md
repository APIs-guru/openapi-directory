# PrivateConnection

The PrivateConnection resource is used to establish private connectivity with the customer's network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The create time of the resource. | [optional] [readonly] 
**display_name** | **str** | The private connection display name. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**labels** | **Dict[str, str]** | The resource labels for private connections to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of \&quot;key\&quot;: \&quot;value\&quot; pairs. Example: &#x60;{ \&quot;name\&quot;: \&quot;wrench\&quot;, \&quot;mass\&quot;: \&quot;1.3kg\&quot;, \&quot;count\&quot;: \&quot;3\&quot; }&#x60;. | [optional] 
**name** | **str** | The name of the resource. | [optional] 
**state** | **str** | Output only. The state of the private connection. | [optional] [readonly] 
**update_time** | **str** | Output only. The last update time of the resource. | [optional] [readonly] 
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


