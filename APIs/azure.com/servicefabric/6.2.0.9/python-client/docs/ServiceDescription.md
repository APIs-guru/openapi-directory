# ServiceDescription

A ServiceDescription contains all of the information necessary to create a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**correlation_scheme** | [**List[ServiceCorrelationDescription]**](ServiceCorrelationDescription.md) | A list that describes the correlation of the service with other services. | [optional] 
**default_move_cost** | [**MoveCost**](MoveCost.md) |  | [optional] 
**initialization_data** | **List[int]** | Array of bytes to be sent as an integer array. Each element of array is a number between 0 and 255. | [optional] 
**is_default_move_cost_specified** | **bool** | Indicates if the DefaultMoveCost property is specified. | [optional] 
**partition_description** | [**PartitionSchemeDescription**](PartitionSchemeDescription.md) |  | 
**placement_constraints** | **str** | The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: \&quot;NodeColor &#x3D;&#x3D; blue)\&quot;. | [optional] 
**scaling_policies** | [**List[ScalingPolicyDescription]**](ScalingPolicyDescription.md) | A list that describes the scaling policies. | [optional] 
**service_dns_name** | **str** | The DNS name of the service. It requires the DNS system service to be enabled in Service Fabric cluster. | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**service_load_metrics** | [**List[ServiceLoadMetricDescription]**](ServiceLoadMetricDescription.md) | The service load metrics is given as an array of ServiceLoadMetricDescription objects. | [optional] 
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | 
**service_package_activation_mode** | [**ServicePackageActivationMode**](ServicePackageActivationMode.md) |  | [optional] 
**service_placement_policies** | [**List[ServicePlacementPolicyDescription]**](ServicePlacementPolicyDescription.md) | A list that describes the correlation of the service with other services. | [optional] 
**service_type_name** | **str** | Name of the service type as specified in the service manifest. | 

## Example

```python
from openapi_client.models.service_description import ServiceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceDescription from a JSON string
service_description_instance = ServiceDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceDescription.to_json())

# convert the object into a dict
service_description_dict = service_description_instance.to_dict()
# create an instance of ServiceDescription from a dict
service_description_from_dict = ServiceDescription.from_dict(service_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


