# ServiceObjectiveCapability

The service objectives capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the service objective. | [optional] [readonly] 
**included_max_size** | [**MaxSizeCapability**](MaxSizeCapability.md) |  | [optional] 
**name** | **str** | The service objective name. | [optional] [readonly] 
**performance_level** | [**PerformanceLevelCapability**](PerformanceLevelCapability.md) |  | [optional] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**sku** | [**ElasticPoolPerformanceLevelCapabilitySku**](ElasticPoolPerformanceLevelCapabilitySku.md) |  | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_license_types** | [**List[LicenseTypeCapability]**](LicenseTypeCapability.md) | List of supported license types. | [optional] [readonly] 
**supported_max_sizes** | [**List[MaxSizeRangeCapability]**](MaxSizeRangeCapability.md) | The list of supported maximum database sizes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_objective_capability import ServiceObjectiveCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceObjectiveCapability from a JSON string
service_objective_capability_instance = ServiceObjectiveCapability.from_json(json)
# print the JSON string representation of the object
print(ServiceObjectiveCapability.to_json())

# convert the object into a dict
service_objective_capability_dict = service_objective_capability_instance.to_dict()
# create an instance of ServiceObjectiveCapability from a dict
service_objective_capability_from_dict = ServiceObjectiveCapability.from_dict(service_objective_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


