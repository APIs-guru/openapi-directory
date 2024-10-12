# BucketObjectRetention

The bucket's object retention config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | The bucket&#39;s object retention mode. Can be Enabled. | [optional] 

## Example

```python
from openapi_client.models.bucket_object_retention import BucketObjectRetention

# TODO update the JSON string below
json = "{}"
# create an instance of BucketObjectRetention from a JSON string
bucket_object_retention_instance = BucketObjectRetention.from_json(json)
# print the JSON string representation of the object
print(BucketObjectRetention.to_json())

# convert the object into a dict
bucket_object_retention_dict = bucket_object_retention_instance.to_dict()
# create an instance of BucketObjectRetention from a dict
bucket_object_retention_from_dict = BucketObjectRetention.from_dict(bucket_object_retention_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


