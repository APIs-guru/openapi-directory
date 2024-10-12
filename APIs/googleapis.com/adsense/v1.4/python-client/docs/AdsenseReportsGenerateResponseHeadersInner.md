# AdsenseReportsGenerateResponseHeadersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency of this column. Only present if the header type is METRIC_CURRENCY. | [optional] 
**name** | **str** | The name of the header. | [optional] 
**type** | **str** | The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY. | [optional] 

## Example

```python
from openapi_client.models.adsense_reports_generate_response_headers_inner import AdsenseReportsGenerateResponseHeadersInner

# TODO update the JSON string below
json = "{}"
# create an instance of AdsenseReportsGenerateResponseHeadersInner from a JSON string
adsense_reports_generate_response_headers_inner_instance = AdsenseReportsGenerateResponseHeadersInner.from_json(json)
# print the JSON string representation of the object
print(AdsenseReportsGenerateResponseHeadersInner.to_json())

# convert the object into a dict
adsense_reports_generate_response_headers_inner_dict = adsense_reports_generate_response_headers_inner_instance.to_dict()
# create an instance of AdsenseReportsGenerateResponseHeadersInner from a dict
adsense_reports_generate_response_headers_inner_from_dict = AdsenseReportsGenerateResponseHeadersInner.from_dict(adsense_reports_generate_response_headers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


