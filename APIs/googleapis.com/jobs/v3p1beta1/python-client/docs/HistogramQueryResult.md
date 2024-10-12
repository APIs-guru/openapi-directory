# HistogramQueryResult

Output only. Histogram result that matches HistogramSpec specified in searches.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**histogram** | **Dict[str, str]** | A map from the values of the facet associated with distinct values to the number of matching entries with corresponding value. The key format is: * (for string histogram) string values stored in the field. * (for named numeric bucket) name specified in &#x60;bucket()&#x60; function, like for &#x60;bucket(0, MAX, \&quot;non-negative\&quot;)&#x60;, the key will be &#x60;non-negative&#x60;. * (for anonymous numeric bucket) range formatted as &#x60;-&#x60;, for example, &#x60;0-1000&#x60;, &#x60;MIN-0&#x60;, and &#x60;0-MAX&#x60;. | [optional] 
**histogram_query** | **str** | Requested histogram expression. | [optional] 

## Example

```python
from openapi_client.models.histogram_query_result import HistogramQueryResult

# TODO update the JSON string below
json = "{}"
# create an instance of HistogramQueryResult from a JSON string
histogram_query_result_instance = HistogramQueryResult.from_json(json)
# print the JSON string representation of the object
print(HistogramQueryResult.to_json())

# convert the object into a dict
histogram_query_result_dict = histogram_query_result_instance.to_dict()
# create an instance of HistogramQueryResult from a dict
histogram_query_result_from_dict = HistogramQueryResult.from_dict(histogram_query_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


