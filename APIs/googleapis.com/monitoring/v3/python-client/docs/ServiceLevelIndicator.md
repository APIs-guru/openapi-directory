# ServiceLevelIndicator

A Service-Level Indicator (SLI) describes the \"performance\" of a service. For some services, the SLI is well-defined. In such cases, the SLI can be described easily by referencing the well-known SLI and providing the needed parameters. Alternatively, a \"custom\" SLI can be defined with a query to the underlying metric store. An SLI is defined to be good_service / total_service over any queried time interval. The value of performance always falls into the range 0 <= performance <= 1. A custom SLI describes how to compute this ratio, whether this is by dividing values from a pair of time series, cutting a Distribution into good and bad counts, or counting time windows in which the service complies with a criterion. For separation of concerns, a single Service-Level Indicator measures performance for only one aspect of service quality, such as fraction of successful queries or fast-enough queries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_sli** | [**BasicSli**](BasicSli.md) |  | [optional] 
**request_based** | [**RequestBasedSli**](RequestBasedSli.md) |  | [optional] 
**windows_based** | [**WindowsBasedSli**](WindowsBasedSli.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_level_indicator import ServiceLevelIndicator

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceLevelIndicator from a JSON string
service_level_indicator_instance = ServiceLevelIndicator.from_json(json)
# print the JSON string representation of the object
print(ServiceLevelIndicator.to_json())

# convert the object into a dict
service_level_indicator_dict = service_level_indicator_instance.to_dict()
# create an instance of ServiceLevelIndicator from a dict
service_level_indicator_from_dict = ServiceLevelIndicator.from_dict(service_level_indicator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


