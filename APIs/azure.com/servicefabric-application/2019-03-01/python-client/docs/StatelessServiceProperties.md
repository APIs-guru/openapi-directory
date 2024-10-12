# StatelessServiceProperties

The properties of a stateless service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_count** | **int** | The instance count. | [optional] 
**partition_description** | [**PartitionSchemeDescription**](PartitionSchemeDescription.md) |  | [optional] 
**provisioning_state** | **str** | The current deployment or provisioning state, which only appears in the response | [optional] [readonly] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**service_package_activation_mode** | **str** | The activation Mode of the service package | [optional] 
**service_type_name** | **str** | The name of the service type | [optional] 
**correlation_scheme** | [**List[ServiceCorrelationDescription]**](ServiceCorrelationDescription.md) | A list that describes the correlation of the service with other services. | [optional] 
**default_move_cost** | [**MoveCost**](MoveCost.md) |  | [optional] 
**placement_constraints** | **str** | The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: \&quot;NodeColor &#x3D;&#x3D; blue)\&quot;. | [optional] 
**service_load_metrics** | [**List[ServiceLoadMetricDescription]**](ServiceLoadMetricDescription.md) | The service load metrics is given as an array of ServiceLoadMetricDescription objects. | [optional] 
**service_placement_policies** | [**List[ServicePlacementPolicyDescription]**](ServicePlacementPolicyDescription.md) | A list that describes the correlation of the service with other services. | [optional] 

## Example

```python
from openapi_client.models.stateless_service_properties import StatelessServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StatelessServiceProperties from a JSON string
stateless_service_properties_instance = StatelessServiceProperties.from_json(json)
# print the JSON string representation of the object
print(StatelessServiceProperties.to_json())

# convert the object into a dict
stateless_service_properties_dict = stateless_service_properties_instance.to_dict()
# create an instance of StatelessServiceProperties from a dict
stateless_service_properties_from_dict = StatelessServiceProperties.from_dict(stateless_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


