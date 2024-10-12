# SlbMuxInstanceList

A pageable list of SLB MUX instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[SlbMuxInstance]**](SlbMuxInstance.md) | List of SLB MUX instances. | [optional] 

## Example

```python
from openapi_client.models.slb_mux_instance_list import SlbMuxInstanceList

# TODO update the JSON string below
json = "{}"
# create an instance of SlbMuxInstanceList from a JSON string
slb_mux_instance_list_instance = SlbMuxInstanceList.from_json(json)
# print the JSON string representation of the object
print(SlbMuxInstanceList.to_json())

# convert the object into a dict
slb_mux_instance_list_dict = slb_mux_instance_list_instance.to_dict()
# create an instance of SlbMuxInstanceList from a dict
slb_mux_instance_list_from_dict = SlbMuxInstanceList.from_dict(slb_mux_instance_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


