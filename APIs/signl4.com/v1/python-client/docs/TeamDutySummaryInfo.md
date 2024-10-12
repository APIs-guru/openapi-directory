# TeamDutySummaryInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duty_assist_enabled** | **bool** |  | [optional] 
**duty_summaries** | [**List[DutySummaryInfo]**](DutySummaryInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.team_duty_summary_info import TeamDutySummaryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TeamDutySummaryInfo from a JSON string
team_duty_summary_info_instance = TeamDutySummaryInfo.from_json(json)
# print the JSON string representation of the object
print(TeamDutySummaryInfo.to_json())

# convert the object into a dict
team_duty_summary_info_dict = team_duty_summary_info_instance.to_dict()
# create an instance of TeamDutySummaryInfo from a dict
team_duty_summary_info_from_dict = TeamDutySummaryInfo.from_dict(team_duty_summary_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


