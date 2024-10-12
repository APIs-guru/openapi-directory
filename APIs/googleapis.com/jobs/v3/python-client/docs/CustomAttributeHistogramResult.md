# CustomAttributeHistogramResult

Output only. Custom attribute histogram result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Stores the key of custom attribute the histogram is performed on. | [optional] 
**long_value_histogram_result** | [**NumericBucketingResult**](NumericBucketingResult.md) |  | [optional] 
**string_value_histogram_result** | **Dict[str, int]** | Stores a map from the values of string custom field associated with &#x60;key&#x60; to the number of jobs with that value in this histogram result. | [optional] 

## Example

```python
from openapi_client.models.custom_attribute_histogram_result import CustomAttributeHistogramResult

# TODO update the JSON string below
json = "{}"
# create an instance of CustomAttributeHistogramResult from a JSON string
custom_attribute_histogram_result_instance = CustomAttributeHistogramResult.from_json(json)
# print the JSON string representation of the object
print(CustomAttributeHistogramResult.to_json())

# convert the object into a dict
custom_attribute_histogram_result_dict = custom_attribute_histogram_result_instance.to_dict()
# create an instance of CustomAttributeHistogramResult from a dict
custom_attribute_histogram_result_from_dict = CustomAttributeHistogramResult.from_dict(custom_attribute_histogram_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


