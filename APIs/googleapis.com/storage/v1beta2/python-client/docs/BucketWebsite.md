# BucketWebsite

The bucket's website configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**main_page_suffix** | **str** | Behaves as the bucket&#39;s directory index where missing objects are treated as potential directories. | [optional] 
**not_found_page** | **str** | The custom object to return when a requested resource is not found. | [optional] 

## Example

```python
from openapi_client.models.bucket_website import BucketWebsite

# TODO update the JSON string below
json = "{}"
# create an instance of BucketWebsite from a JSON string
bucket_website_instance = BucketWebsite.from_json(json)
# print the JSON string representation of the object
print(BucketWebsite.to_json())

# convert the object into a dict
bucket_website_dict = bucket_website_instance.to_dict()
# create an instance of BucketWebsite from a dict
bucket_website_from_dict = BucketWebsite.from_dict(bucket_website_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


