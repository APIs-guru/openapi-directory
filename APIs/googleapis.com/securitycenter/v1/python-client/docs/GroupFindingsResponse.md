# GroupFindingsResponse

Response message for group by findings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_by_results** | [**List[GroupResult]**](GroupResult.md) | Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results. | [optional] 
**read_time** | **str** | Time used for executing the groupBy request. | [optional] 
**total_size** | **int** | The total number of results matching the query. | [optional] 

## Example

```python
from openapi_client.models.group_findings_response import GroupFindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GroupFindingsResponse from a JSON string
group_findings_response_instance = GroupFindingsResponse.from_json(json)
# print the JSON string representation of the object
print(GroupFindingsResponse.to_json())

# convert the object into a dict
group_findings_response_dict = group_findings_response_instance.to_dict()
# create an instance of GroupFindingsResponse from a dict
group_findings_response_from_dict = GroupFindingsResponse.from_dict(group_findings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


