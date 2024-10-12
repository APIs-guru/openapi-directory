# BasicSli

An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | **object** | Future parameters for the availability SLI. | [optional] 
**latency** | [**LatencyCriteria**](LatencyCriteria.md) |  | [optional] 
**location** | **List[str]** | OPTIONAL: The set of locations to which this SLI is relevant. Telemetry from other locations will not be used to calculate performance for this SLI. If omitted, this SLI applies to all locations in which the Service has activity. For service types that don&#39;t support breaking down by location, setting this field will result in an error. | [optional] 
**method** | **List[str]** | OPTIONAL: The set of RPCs to which this SLI is relevant. Telemetry from other methods will not be used to calculate performance for this SLI. If omitted, this SLI applies to all the Service&#39;s methods. For service types that don&#39;t support breaking down by method, setting this field will result in an error. | [optional] 
**version** | **List[str]** | OPTIONAL: The set of API versions to which this SLI is relevant. Telemetry from other API versions will not be used to calculate performance for this SLI. If omitted, this SLI applies to all API versions. For service types that don&#39;t support breaking down by version, setting this field will result in an error. | [optional] 

## Example

```python
from openapi_client.models.basic_sli import BasicSli

# TODO update the JSON string below
json = "{}"
# create an instance of BasicSli from a JSON string
basic_sli_instance = BasicSli.from_json(json)
# print the JSON string representation of the object
print(BasicSli.to_json())

# convert the object into a dict
basic_sli_dict = basic_sli_instance.to_dict()
# create an instance of BasicSli from a dict
basic_sli_from_dict = BasicSli.from_dict(basic_sli_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


