# HistogramFacets

Input only. Histogram facets to be specified in SearchJobsRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compensation_histogram_facets** | [**List[CompensationHistogramRequest]**](CompensationHistogramRequest.md) | Optional. Specifies compensation field-based histogram requests. Duplicate values of CompensationHistogramRequest.type are not allowed. | [optional] 
**custom_attribute_histogram_facets** | [**List[CustomAttributeHistogramRequest]**](CustomAttributeHistogramRequest.md) | Optional. Specifies the custom attributes histogram requests. Duplicate values of CustomAttributeHistogramRequest.key are not allowed. | [optional] 
**simple_histogram_facets** | **List[str]** | Optional. Specifies the simple type of histogram facets, for example, &#x60;COMPANY_SIZE&#x60;, &#x60;EMPLOYMENT_TYPE&#x60; etc. | [optional] 

## Example

```python
from openapi_client.models.histogram_facets import HistogramFacets

# TODO update the JSON string below
json = "{}"
# create an instance of HistogramFacets from a JSON string
histogram_facets_instance = HistogramFacets.from_json(json)
# print the JSON string representation of the object
print(HistogramFacets.to_json())

# convert the object into a dict
histogram_facets_dict = histogram_facets_instance.to_dict()
# create an instance of HistogramFacets from a dict
histogram_facets_from_dict = HistogramFacets.from_dict(histogram_facets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


