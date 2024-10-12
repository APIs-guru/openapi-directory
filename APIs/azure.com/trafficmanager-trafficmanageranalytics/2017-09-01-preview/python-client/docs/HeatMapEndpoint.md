# HeatMapEndpoint

Class which is a sparse representation of a Traffic Manager endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_id** | **int** | A number uniquely identifying this endpoint in query experiences. | [optional] 
**resource_id** | **str** | The ARM Resource ID of this Traffic Manager endpoint. | [optional] 

## Example

```python
from openapi_client.models.heat_map_endpoint import HeatMapEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of HeatMapEndpoint from a JSON string
heat_map_endpoint_instance = HeatMapEndpoint.from_json(json)
# print the JSON string representation of the object
print(HeatMapEndpoint.to_json())

# convert the object into a dict
heat_map_endpoint_dict = heat_map_endpoint_instance.to_dict()
# create an instance of HeatMapEndpoint from a dict
heat_map_endpoint_from_dict = HeatMapEndpoint.from_dict(heat_map_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


