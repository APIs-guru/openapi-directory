# CheckCompatibilityRequest

The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the `runReport` request should be the same values as in your `runReport` request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility_filter** | **str** | Filters the dimensions and metrics in the response to just this compatibility. Commonly used as &#x60;”compatibilityFilter”: “COMPATIBLE”&#x60; to only return compatible dimensions &amp; metrics. | [optional] 
**dimension_filter** | [**FilterExpression**](FilterExpression.md) |  | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | The dimensions in this report. &#x60;dimensions&#x60; should be the same value as in your &#x60;runReport&#x60; request. | [optional] 
**metric_filter** | [**FilterExpression**](FilterExpression.md) |  | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | The metrics in this report. &#x60;metrics&#x60; should be the same value as in your &#x60;runReport&#x60; request. | [optional] 

## Example

```python
from openapi_client.models.check_compatibility_request import CheckCompatibilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckCompatibilityRequest from a JSON string
check_compatibility_request_instance = CheckCompatibilityRequest.from_json(json)
# print the JSON string representation of the object
print(CheckCompatibilityRequest.to_json())

# convert the object into a dict
check_compatibility_request_dict = check_compatibility_request_instance.to_dict()
# create an instance of CheckCompatibilityRequest from a dict
check_compatibility_request_from_dict = CheckCompatibilityRequest.from_dict(check_compatibility_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


