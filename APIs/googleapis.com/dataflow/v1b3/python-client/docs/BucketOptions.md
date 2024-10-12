# BucketOptions

`BucketOptions` describes the bucket boundaries used in the histogram.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exponential** | [**Base2Exponent**](Base2Exponent.md) |  | [optional] 
**linear** | [**Linear**](Linear.md) |  | [optional] 

## Example

```python
from openapi_client.models.bucket_options import BucketOptions

# TODO update the JSON string below
json = "{}"
# create an instance of BucketOptions from a JSON string
bucket_options_instance = BucketOptions.from_json(json)
# print the JSON string representation of the object
print(BucketOptions.to_json())

# convert the object into a dict
bucket_options_dict = bucket_options_instance.to_dict()
# create an instance of BucketOptions from a dict
bucket_options_from_dict = BucketOptions.from_dict(bucket_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


