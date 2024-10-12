# CompensationHistogramRequest

Input only. Compensation based histogram request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucketing_option** | [**NumericBucketingOption**](NumericBucketingOption.md) |  | [optional] 
**type** | **str** | Required. Type of the request, representing which field the histogramming should be performed over. A single request can only specify one histogram of each &#x60;CompensationHistogramRequestType&#x60;. | [optional] 

## Example

```python
from openapi_client.models.compensation_histogram_request import CompensationHistogramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CompensationHistogramRequest from a JSON string
compensation_histogram_request_instance = CompensationHistogramRequest.from_json(json)
# print the JSON string representation of the object
print(CompensationHistogramRequest.to_json())

# convert the object into a dict
compensation_histogram_request_dict = compensation_histogram_request_instance.to_dict()
# create an instance of CompensationHistogramRequest from a dict
compensation_histogram_request_from_dict = CompensationHistogramRequest.from_dict(compensation_histogram_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


