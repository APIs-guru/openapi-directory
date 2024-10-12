# RunFilterParameters

Query parameters for listing runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for getting the next page of results. Null for first page. | [optional] 
**filters** | [**List[RunQueryFilter]**](RunQueryFilter.md) | List of filters. | [optional] 
**last_updated_after** | **datetime** | The time at or after which the run event was updated in &#39;ISO 8601&#39; format. | 
**last_updated_before** | **datetime** | The time at or before which the run event was updated in &#39;ISO 8601&#39; format. | 
**order_by** | [**List[RunQueryOrderBy]**](RunQueryOrderBy.md) | List of OrderBy option. | [optional] 

## Example

```python
from openapi_client.models.run_filter_parameters import RunFilterParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RunFilterParameters from a JSON string
run_filter_parameters_instance = RunFilterParameters.from_json(json)
# print the JSON string representation of the object
print(RunFilterParameters.to_json())

# convert the object into a dict
run_filter_parameters_dict = run_filter_parameters_instance.to_dict()
# create an instance of RunFilterParameters from a dict
run_filter_parameters_from_dict = RunFilterParameters.from_dict(run_filter_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


