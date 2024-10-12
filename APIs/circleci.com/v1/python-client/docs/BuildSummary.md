# BuildSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_at** | **datetime** |  | [optional] 
**build_num** | **int** |  | [optional] 
**outcome** | [**Outcome**](Outcome.md) |  | [optional] 
**pushed_at** | **datetime** |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**vcs_revision** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.build_summary import BuildSummary

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSummary from a JSON string
build_summary_instance = BuildSummary.from_json(json)
# print the JSON string representation of the object
print(BuildSummary.to_json())

# convert the object into a dict
build_summary_dict = build_summary_instance.to_dict()
# create an instance of BuildSummary from a dict
build_summary_from_dict = BuildSummary.from_dict(build_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


