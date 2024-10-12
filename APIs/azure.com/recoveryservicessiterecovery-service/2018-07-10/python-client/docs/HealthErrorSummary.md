# HealthErrorSummary

class to define the summary of the health error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_resource_correlation_ids** | **List[str]** | The list of affected resource correlation Ids. This can be used to uniquely identify the count of items affected by a specific category and severity as well as count of item affected by an specific issue. | [optional] 
**affected_resource_subtype** | **str** | The sub type of any subcomponent within the ARM resource that this might be applicable. Value remains null if not applicable. | [optional] 
**affected_resource_type** | **str** | The type of affected ARM resource. | [optional] 
**category** | **str** | The category of the health error. | [optional] 
**severity** | **str** | Severity of error. | [optional] 
**summary_code** | **str** | The code of the health error. | [optional] 
**summary_message** | **str** | The summary message of the health error. | [optional] 

## Example

```python
from openapi_client.models.health_error_summary import HealthErrorSummary

# TODO update the JSON string below
json = "{}"
# create an instance of HealthErrorSummary from a JSON string
health_error_summary_instance = HealthErrorSummary.from_json(json)
# print the JSON string representation of the object
print(HealthErrorSummary.to_json())

# convert the object into a dict
health_error_summary_dict = health_error_summary_instance.to_dict()
# create an instance of HealthErrorSummary from a dict
health_error_summary_from_dict = HealthErrorSummary.from_dict(health_error_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


