# FindingTypeStats

A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finding_count** | **int** | The count of findings belonging to this finding type. | [optional] 
**finding_type** | **str** | The finding type associated with the stats. | [optional] 

## Example

```python
from openapi_client.models.finding_type_stats import FindingTypeStats

# TODO update the JSON string below
json = "{}"
# create an instance of FindingTypeStats from a JSON string
finding_type_stats_instance = FindingTypeStats.from_json(json)
# print the JSON string representation of the object
print(FindingTypeStats.to_json())

# convert the object into a dict
finding_type_stats_dict = finding_type_stats_instance.to_dict()
# create an instance of FindingTypeStats from a dict
finding_type_stats_from_dict = FindingTypeStats.from_dict(finding_type_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


