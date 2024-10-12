# NumericBucketingOption

Input only. Use this field to specify bucketing option for the histogram search response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_bounds** | **List[float]** | Required. Two adjacent values form a histogram bucket. Values should be in ascending order. For example, if [5, 10, 15] are provided, four buckets are created: (-inf, 5), 5, 10), [10, 15), [15, inf). At most 20 [buckets_bound is supported. | [optional] 
**requires_min_max** | **bool** | Optional. If set to true, the histogram result includes minimum/maximum value of the numeric field. | [optional] 

## Example

```python
from openapi_client.models.numeric_bucketing_option import NumericBucketingOption

# TODO update the JSON string below
json = "{}"
# create an instance of NumericBucketingOption from a JSON string
numeric_bucketing_option_instance = NumericBucketingOption.from_json(json)
# print the JSON string representation of the object
print(NumericBucketingOption.to_json())

# convert the object into a dict
numeric_bucketing_option_dict = numeric_bucketing_option_instance.to_dict()
# create an instance of NumericBucketingOption from a dict
numeric_bucketing_option_from_dict = NumericBucketingOption.from_dict(numeric_bucketing_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


