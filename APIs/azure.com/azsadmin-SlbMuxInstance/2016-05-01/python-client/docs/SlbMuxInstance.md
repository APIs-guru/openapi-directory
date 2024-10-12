# SlbMuxInstance

This resource represents an SLB MUX (software load balancing multiplexer, which distributes the tenant and tenant customer network traffic).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SlbMuxInstanceModel**](SlbMuxInstanceModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.slb_mux_instance import SlbMuxInstance

# TODO update the JSON string below
json = "{}"
# create an instance of SlbMuxInstance from a JSON string
slb_mux_instance_instance = SlbMuxInstance.from_json(json)
# print the JSON string representation of the object
print(SlbMuxInstance.to_json())

# convert the object into a dict
slb_mux_instance_dict = slb_mux_instance_instance.to_dict()
# create an instance of SlbMuxInstance from a dict
slb_mux_instance_from_dict = SlbMuxInstance.from_dict(slb_mux_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


