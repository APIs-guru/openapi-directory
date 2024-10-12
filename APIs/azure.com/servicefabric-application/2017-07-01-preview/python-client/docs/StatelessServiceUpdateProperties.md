# StatelessServiceUpdateProperties

The properties of a stateless service resource for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_count** | **int** | The instance count. | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**correlation_scheme** | [**List[ServiceCorrelationDescription]**](ServiceCorrelationDescription.md) | A list that describes the correlation of the service with other services. | [optional] 
**default_move_cost** | [**MoveCost**](MoveCost.md) |  | [optional] 
**placement_constraints** | **str** | The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: \&quot;NodeColor &#x3D;&#x3D; blue)\&quot;. | [optional] 
**service_load_metrics** | [**List[ServiceLoadMetricDescription]**](ServiceLoadMetricDescription.md) | The service load metrics is given as an array of ServiceLoadMetricDescription objects. | [optional] 
**service_placement_policies** | [**List[ServicePlacementPolicyDescription]**](ServicePlacementPolicyDescription.md) | A list that describes the correlation of the service with other services. | [optional] 

## Example

```python
from openapi_client.models.stateless_service_update_properties import StatelessServiceUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StatelessServiceUpdateProperties from a JSON string
stateless_service_update_properties_instance = StatelessServiceUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(StatelessServiceUpdateProperties.to_json())

# convert the object into a dict
stateless_service_update_properties_dict = stateless_service_update_properties_instance.to_dict()
# create an instance of StatelessServiceUpdateProperties from a dict
stateless_service_update_properties_from_dict = StatelessServiceUpdateProperties.from_dict(stateless_service_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


