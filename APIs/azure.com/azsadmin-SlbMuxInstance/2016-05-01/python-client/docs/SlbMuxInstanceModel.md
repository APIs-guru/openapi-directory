# SlbMuxInstanceModel

Properties of a SLB MUX.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bgp_peers** | **List[str]** | List of BGP peers. | [optional] 
**configuration_state** | **str** | Configuration state. | [optional] 
**virtual_server** | **str** | Virtual server. | [optional] 

## Example

```python
from openapi_client.models.slb_mux_instance_model import SlbMuxInstanceModel

# TODO update the JSON string below
json = "{}"
# create an instance of SlbMuxInstanceModel from a JSON string
slb_mux_instance_model_instance = SlbMuxInstanceModel.from_json(json)
# print the JSON string representation of the object
print(SlbMuxInstanceModel.to_json())

# convert the object into a dict
slb_mux_instance_model_dict = slb_mux_instance_model_instance.to_dict()
# create an instance of SlbMuxInstanceModel from a dict
slb_mux_instance_model_from_dict = SlbMuxInstanceModel.from_dict(slb_mux_instance_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


