# PaginatedRunMetricList

A paginated list of RunMetrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The token used in retrieving the next page.  If null, there are no additional pages. | [optional] 
**next_link** | **str** | The link to the next page constructed using the continuationToken.  If null, there are no additional pages. | [optional] 
**value** | [**List[RunMetric]**](RunMetric.md) | An array of objects of type RunMetric. | [optional] 

## Example

```python
from openapi_client.models.paginated_run_metric_list import PaginatedRunMetricList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedRunMetricList from a JSON string
paginated_run_metric_list_instance = PaginatedRunMetricList.from_json(json)
# print the JSON string representation of the object
print(PaginatedRunMetricList.to_json())

# convert the object into a dict
paginated_run_metric_list_dict = paginated_run_metric_list_instance.to_dict()
# create an instance of PaginatedRunMetricList from a dict
paginated_run_metric_list_from_dict = PaginatedRunMetricList.from_dict(paginated_run_metric_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


