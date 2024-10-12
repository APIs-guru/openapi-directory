# ServiceCorrelationDescription

The description of the service correlation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_correlation_scheme** | **str** |  | [optional] 
**service_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.service_correlation_description import ServiceCorrelationDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceCorrelationDescription from a JSON string
service_correlation_description_instance = ServiceCorrelationDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceCorrelationDescription.to_json())

# convert the object into a dict
service_correlation_description_dict = service_correlation_description_instance.to_dict()
# create an instance of ServiceCorrelationDescription from a dict
service_correlation_description_from_dict = ServiceCorrelationDescription.from_dict(service_correlation_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


