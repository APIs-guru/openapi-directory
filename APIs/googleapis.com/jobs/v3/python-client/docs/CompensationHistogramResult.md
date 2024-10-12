# CompensationHistogramResult

Output only. Compensation based histogram result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**NumericBucketingResult**](NumericBucketingResult.md) |  | [optional] 
**type** | **str** | Type of the request, corresponding to CompensationHistogramRequest.type. | [optional] 

## Example

```python
from openapi_client.models.compensation_histogram_result import CompensationHistogramResult

# TODO update the JSON string below
json = "{}"
# create an instance of CompensationHistogramResult from a JSON string
compensation_histogram_result_instance = CompensationHistogramResult.from_json(json)
# print the JSON string representation of the object
print(CompensationHistogramResult.to_json())

# convert the object into a dict
compensation_histogram_result_dict = compensation_histogram_result_instance.to_dict()
# create an instance of CompensationHistogramResult from a dict
compensation_histogram_result_from_dict = CompensationHistogramResult.from_dict(compensation_histogram_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


