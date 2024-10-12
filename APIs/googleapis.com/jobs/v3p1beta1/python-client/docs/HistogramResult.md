# HistogramResult

Output only. Result of a histogram call. The response contains the histogram map for the search type specified by HistogramResult.field. The response is a map of each filter value to the corresponding count of jobs for that filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_type** | **str** | The Histogram search filters. | [optional] 
**values** | **Dict[str, int]** | A map from the values of field to the number of jobs with that value in this search result. Key: search type (filter names, such as the companyName). Values: the count of jobs that match the filter for this search. | [optional] 

## Example

```python
from openapi_client.models.histogram_result import HistogramResult

# TODO update the JSON string below
json = "{}"
# create an instance of HistogramResult from a JSON string
histogram_result_instance = HistogramResult.from_json(json)
# print the JSON string representation of the object
print(HistogramResult.to_json())

# convert the object into a dict
histogram_result_dict = histogram_result_instance.to_dict()
# create an instance of HistogramResult from a dict
histogram_result_from_dict = HistogramResult.from_dict(histogram_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


