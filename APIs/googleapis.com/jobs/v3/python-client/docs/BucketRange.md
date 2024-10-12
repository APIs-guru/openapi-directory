# BucketRange

Represents starting and ending value of a range in double.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **float** | Starting value of the bucket range. | [optional] 
**to** | **float** | Ending value of the bucket range. | [optional] 

## Example

```python
from openapi_client.models.bucket_range import BucketRange

# TODO update the JSON string below
json = "{}"
# create an instance of BucketRange from a JSON string
bucket_range_instance = BucketRange.from_json(json)
# print the JSON string representation of the object
print(BucketRange.to_json())

# convert the object into a dict
bucket_range_dict = bucket_range_instance.to_dict()
# create an instance of BucketRange from a dict
bucket_range_from_dict = BucketRange.from_dict(bucket_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


