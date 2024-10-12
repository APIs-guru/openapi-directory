# McfData

Multi-Channel Funnels data for a given view (profile).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_headers** | [**List[McfDataColumnHeadersInner]**](McfDataColumnHeadersInner.md) | Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. | [optional] 
**contains_sampled_data** | **bool** | Determines if the Analytics data contains sampled data. | [optional] 
**id** | **str** | Unique ID for this data response. | [optional] 
**items_per_page** | **int** | The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'analytics#mcfData']
**next_link** | **str** | Link to next page for this Analytics data query. | [optional] 
**previous_link** | **str** | Link to previous page for this Analytics data query. | [optional] 
**profile_info** | [**GaDataProfileInfo**](GaDataProfileInfo.md) |  | [optional] 
**query** | [**GaDataQuery**](GaDataQuery.md) |  | [optional] 
**rows** | **List[List[McfDataRowsInnerInner]]** | Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. | [optional] 
**sample_size** | **str** | The number of samples used to calculate the result. | [optional] 
**sample_space** | **str** | Total size of the sample space from which the samples were selected. | [optional] 
**self_link** | **str** | Link to this page. | [optional] 
**total_results** | **int** | The total number of rows for the query, regardless of the number of rows in the response. | [optional] 
**totals_for_all_results** | **Dict[str, str]** | Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. | [optional] 

## Example

```python
from openapi_client.models.mcf_data import McfData

# TODO update the JSON string below
json = "{}"
# create an instance of McfData from a JSON string
mcf_data_instance = McfData.from_json(json)
# print the JSON string representation of the object
print(McfData.to_json())

# convert the object into a dict
mcf_data_dict = mcf_data_instance.to_dict()
# create an instance of McfData from a dict
mcf_data_from_dict = McfData.from_dict(mcf_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


