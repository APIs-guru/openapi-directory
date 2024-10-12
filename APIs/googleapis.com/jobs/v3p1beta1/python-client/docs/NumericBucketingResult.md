# NumericBucketingResult

Output only. Custom numeric bucketing result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**List[BucketizedCount]**](BucketizedCount.md) | Count within each bucket. Its size is the length of NumericBucketingOption.bucket_bounds plus 1. | [optional] 
**max_value** | **float** | Stores the maximum value of the numeric field. Is populated only if [NumericBucketingOption.requires_min_max] is set to true. | [optional] 
**min_value** | **float** | Stores the minimum value of the numeric field. Will be populated only if [NumericBucketingOption.requires_min_max] is set to true. | [optional] 

## Example

```python
from openapi_client.models.numeric_bucketing_result import NumericBucketingResult

# TODO update the JSON string below
json = "{}"
# create an instance of NumericBucketingResult from a JSON string
numeric_bucketing_result_instance = NumericBucketingResult.from_json(json)
# print the JSON string representation of the object
print(NumericBucketingResult.to_json())

# convert the object into a dict
numeric_bucketing_result_dict = numeric_bucketing_result_instance.to_dict()
# create an instance of NumericBucketingResult from a dict
numeric_bucketing_result_from_dict = NumericBucketingResult.from_dict(numeric_bucketing_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


