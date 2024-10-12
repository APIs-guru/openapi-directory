# ChaosReport

Contains detailed Chaos report. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chaos_parameters** | [**ChaosParameters**](ChaosParameters.md) |  | [optional] 
**continuation_token** | **str** | The continuation token parameter is used to obtain next set of results. The continuation token is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token is not included in the response. | [optional] 
**history** | [**List[ChaosEventWrapper]**](ChaosEventWrapper.md) |  | [optional] 
**status** | **str** | Current status of the Chaos run.  - Invalid - Indicates an invalid Chaos status. All Service Fabric enumerations have the invalid type.   The valus is zero. - Running - Indicates that Chaos is not stopped. - Stopped - Indicates that Chaos is not scheduling futher faults. | [optional] 

## Example

```python
from openapi_client.models.chaos_report import ChaosReport

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosReport from a JSON string
chaos_report_instance = ChaosReport.from_json(json)
# print the JSON string representation of the object
print(ChaosReport.to_json())

# convert the object into a dict
chaos_report_dict = chaos_report_instance.to_dict()
# create an instance of ChaosReport from a dict
chaos_report_from_dict = ChaosReport.from_dict(chaos_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


