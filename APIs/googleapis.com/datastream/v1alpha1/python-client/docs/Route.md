# Route

The Route resource is the child of the PrivateConnection resource. It used to define a route for a PrivateConnection setup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The create time of the resource. | [optional] [readonly] 
**destination_address** | **str** | Required. Destination address for connection | [optional] 
**destination_port** | **int** | Destination port for connection | [optional] 
**display_name** | **str** | Required. Display name. | [optional] 
**labels** | **Dict[str, str]** | Labels. | [optional] 
**name** | **str** | Output only. The resource&#39;s name. | [optional] [readonly] 
**update_time** | **str** | Output only. The update time of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.route import Route

# TODO update the JSON string below
json = "{}"
# create an instance of Route from a JSON string
route_instance = Route.from_json(json)
# print the JSON string representation of the object
print(Route.to_json())

# convert the object into a dict
route_dict = route_instance.to_dict()
# create an instance of Route from a dict
route_from_dict = Route.from_dict(route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


