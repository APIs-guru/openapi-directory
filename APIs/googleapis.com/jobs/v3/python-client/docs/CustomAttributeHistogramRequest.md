# CustomAttributeHistogramRequest

Custom attributes histogram request. An error is thrown if neither string_value_histogram or long_value_histogram_bucketing_option has been defined.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. Specifies the custom field key to perform a histogram on. If specified without &#x60;long_value_histogram_bucketing_option&#x60;, histogram on string values of the given &#x60;key&#x60; is triggered, otherwise histogram is performed on long values. | [optional] 
**long_value_histogram_bucketing_option** | [**NumericBucketingOption**](NumericBucketingOption.md) |  | [optional] 
**string_value_histogram** | **bool** | Optional. If set to true, the response includes the histogram value for each key as a string. | [optional] 

## Example

```python
from openapi_client.models.custom_attribute_histogram_request import CustomAttributeHistogramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomAttributeHistogramRequest from a JSON string
custom_attribute_histogram_request_instance = CustomAttributeHistogramRequest.from_json(json)
# print the JSON string representation of the object
print(CustomAttributeHistogramRequest.to_json())

# convert the object into a dict
custom_attribute_histogram_request_dict = custom_attribute_histogram_request_instance.to_dict()
# create an instance of CustomAttributeHistogramRequest from a dict
custom_attribute_histogram_request_from_dict = CustomAttributeHistogramRequest.from_dict(custom_attribute_histogram_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


