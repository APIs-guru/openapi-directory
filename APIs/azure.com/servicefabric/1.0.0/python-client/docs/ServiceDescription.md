# ServiceDescription

The description of the service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** |  | [optional] 
**correlation_scheme** | [**ServiceCorrelationDescription**](ServiceCorrelationDescription.md) |  | [optional] 
**flags** | **int** |  | [optional] 
**partition_description** | [**PartitionDescription**](PartitionDescription.md) |  | [optional] 
**placement_constraints** | **str** |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**service_load_metrics** | [**ServiceCorrelationDescription**](ServiceCorrelationDescription.md) |  | [optional] 
**service_name** | **str** |  | [optional] 
**service_placement_policies** | [**ServiceCorrelationDescription**](ServiceCorrelationDescription.md) |  | [optional] 
**service_type_name** | **str** |  | [optional] 

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


