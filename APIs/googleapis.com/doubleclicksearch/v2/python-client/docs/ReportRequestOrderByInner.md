# ReportRequestOrderByInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | [**ReportApiColumnSpec**](ReportApiColumnSpec.md) |  | [optional] 
**sort_order** | **str** | The sort direction, which is either &#x60;ascending&#x60; or &#x60;descending&#x60;. | [optional] 

## Example

```python
from openapi_client.models.report_request_order_by_inner import ReportRequestOrderByInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRequestOrderByInner from a JSON string
report_request_order_by_inner_instance = ReportRequestOrderByInner.from_json(json)
# print the JSON string representation of the object
print(ReportRequestOrderByInner.to_json())

# convert the object into a dict
report_request_order_by_inner_dict = report_request_order_by_inner_instance.to_dict()
# create an instance of ReportRequestOrderByInner from a dict
report_request_order_by_inner_from_dict = ReportRequestOrderByInner.from_dict(report_request_order_by_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


