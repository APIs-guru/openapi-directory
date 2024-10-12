# ServiceProperties

The service resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_description** | [**PartitionSchemeDescription**](PartitionSchemeDescription.md) |  | [optional] 
**provisioning_state** | **str** | The current deployment or provisioning state, which only appears in the response | [optional] [readonly] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**service_type_name** | **str** | The name of the service type | [optional] 
**correlation_scheme** | [**List[ServiceCorrelationDescription]**](ServiceCorrelationDescription.md) | A list that describes the correlation of the service with other services. | [optional] 
**default_move_cost** | [**MoveCost**](MoveCost.md) |  | [optional] 
**placement_constraints** | **str** | The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: \&quot;NodeColor &#x3D;&#x3D; blue)\&quot;. | [optional] 
**service_load_metrics** | [**List[ServiceLoadMetricDescription]**](ServiceLoadMetricDescription.md) | The service load metrics is given as an array of ServiceLoadMetricDescription objects. | [optional] 
**service_placement_policies** | [**List[ServicePlacementPolicyDescription]**](ServicePlacementPolicyDescription.md) | A list that describes the correlation of the service with other services. | [optional] 

## Example

```python
from openapi_client.models.service_properties import ServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceProperties from a JSON string
service_properties_instance = ServiceProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceProperties.to_json())

# convert the object into a dict
service_properties_dict = service_properties_instance.to_dict()
# create an instance of ServiceProperties from a dict
service_properties_from_dict = ServiceProperties.from_dict(service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


