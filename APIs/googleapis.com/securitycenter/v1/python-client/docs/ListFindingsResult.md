# ListFindingsResult

Result containing the Finding and its StateChange.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finding** | [**Finding**](Finding.md) |  | [optional] 
**resource** | [**Resource**](Resource.md) |  | [optional] 
**state_change** | **str** | State change of the finding between the points in time. | [optional] 

## Example

```python
from openapi_client.models.list_findings_result import ListFindingsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListFindingsResult from a JSON string
list_findings_result_instance = ListFindingsResult.from_json(json)
# print the JSON string representation of the object
print(ListFindingsResult.to_json())

# convert the object into a dict
list_findings_result_dict = list_findings_result_instance.to_dict()
# create an instance of ListFindingsResult from a dict
list_findings_result_from_dict = ListFindingsResult.from_dict(list_findings_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


