# ReportHeadersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency of this column. Only present if the header type is METRIC_CURRENCY. | [optional] 
**name** | **str** | The name of the header. | [optional] 
**type** | **str** | The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY. | [optional] 

## Example

```python
from openapi_client.models.report_headers_inner import ReportHeadersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReportHeadersInner from a JSON string
report_headers_inner_instance = ReportHeadersInner.from_json(json)
# print the JSON string representation of the object
print(ReportHeadersInner.to_json())

# convert the object into a dict
report_headers_inner_dict = report_headers_inner_instance.to_dict()
# create an instance of ReportHeadersInner from a dict
report_headers_inner_from_dict = ReportHeadersInner.from_dict(report_headers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


