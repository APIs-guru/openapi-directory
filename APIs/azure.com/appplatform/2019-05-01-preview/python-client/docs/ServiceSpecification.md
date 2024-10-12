# ServiceSpecification

Service specification payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_specifications** | [**List[LogSpecification]**](LogSpecification.md) | Specifications of the Log for Azure Monitoring | [optional] 
**metric_specifications** | [**List[MetricSpecification]**](MetricSpecification.md) | Specifications of the Metrics for Azure Monitoring | [optional] 

## Example

```python
from openapi_client.models.service_specification import ServiceSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceSpecification from a JSON string
service_specification_instance = ServiceSpecification.from_json(json)
# print the JSON string representation of the object
print(ServiceSpecification.to_json())

# convert the object into a dict
service_specification_dict = service_specification_instance.to_dict()
# create an instance of ServiceSpecification from a dict
service_specification_from_dict = ServiceSpecification.from_dict(service_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


