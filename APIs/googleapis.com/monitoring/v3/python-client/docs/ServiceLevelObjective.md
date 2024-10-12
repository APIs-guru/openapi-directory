# ServiceLevelObjective

A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include \"99% of requests in each rolling week have latency below 200 milliseconds\" or \"99.5% of requests in each calendar month return successfully.\"

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendar_period** | **str** | A calendar period, semantically \&quot;since the start of the current \&quot;. At this time, only DAY, WEEK, FORTNIGHT, and MONTH are supported. | [optional] 
**display_name** | **str** | Name used for UI elements listing this SLO. | [optional] 
**goal** | **float** | The fraction of service that must be good in order for this objective to be met. 0 &lt; goal &lt;&#x3D; 0.999. | [optional] 
**name** | **str** | Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME]  | [optional] 
**rolling_period** | **str** | A rolling time period, semantically \&quot;in the past \&quot;. Must be an integer multiple of 1 day no larger than 30 days. | [optional] 
**service_level_indicator** | [**ServiceLevelIndicator**](ServiceLevelIndicator.md) |  | [optional] 
**user_labels** | **Dict[str, str]** | Labels which have been used to annotate the service-level objective. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value. | [optional] 

## Example

```python
from openapi_client.models.service_level_objective import ServiceLevelObjective

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceLevelObjective from a JSON string
service_level_objective_instance = ServiceLevelObjective.from_json(json)
# print the JSON string representation of the object
print(ServiceLevelObjective.to_json())

# convert the object into a dict
service_level_objective_dict = service_level_objective_instance.to_dict()
# create an instance of ServiceLevelObjective from a dict
service_level_objective_from_dict = ServiceLevelObjective.from_dict(service_level_objective_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


