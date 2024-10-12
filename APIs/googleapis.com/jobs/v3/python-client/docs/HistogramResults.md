# HistogramResults

Output only. Histogram results that match HistogramFacets specified in SearchJobsRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compensation_histogram_results** | [**List[CompensationHistogramResult]**](CompensationHistogramResult.md) | Specifies compensation field-based histogram results that match HistogramFacets.compensation_histogram_requests. | [optional] 
**custom_attribute_histogram_results** | [**List[CustomAttributeHistogramResult]**](CustomAttributeHistogramResult.md) | Specifies histogram results for custom attributes that match HistogramFacets.custom_attribute_histogram_facets. | [optional] 
**simple_histogram_results** | [**List[HistogramResult]**](HistogramResult.md) | Specifies histogram results that matches HistogramFacets.simple_histogram_facets. | [optional] 

## Example

```python
from openapi_client.models.histogram_results import HistogramResults

# TODO update the JSON string below
json = "{}"
# create an instance of HistogramResults from a JSON string
histogram_results_instance = HistogramResults.from_json(json)
# print the JSON string representation of the object
print(HistogramResults.to_json())

# convert the object into a dict
histogram_results_dict = histogram_results_instance.to_dict()
# create an instance of HistogramResults from a dict
histogram_results_from_dict = HistogramResults.from_dict(histogram_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


