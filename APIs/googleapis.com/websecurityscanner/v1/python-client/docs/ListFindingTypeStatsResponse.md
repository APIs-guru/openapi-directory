# ListFindingTypeStatsResponse

Response for the `ListFindingTypeStats` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finding_type_stats** | [**List[FindingTypeStats]**](FindingTypeStats.md) | The list of FindingTypeStats returned. | [optional] 

## Example

```python
from openapi_client.models.list_finding_type_stats_response import ListFindingTypeStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFindingTypeStatsResponse from a JSON string
list_finding_type_stats_response_instance = ListFindingTypeStatsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFindingTypeStatsResponse.to_json())

# convert the object into a dict
list_finding_type_stats_response_dict = list_finding_type_stats_response_instance.to_dict()
# create an instance of ListFindingTypeStatsResponse from a dict
list_finding_type_stats_response_from_dict = ListFindingTypeStatsResponse.from_dict(list_finding_type_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


