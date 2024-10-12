# BucketLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **str** | URI of resource. | [optional] [readonly] 
**members** | **str** | URI of resource. | [optional] [readonly] 
**org** | **str** | URI of resource. | [optional] [readonly] 
**owners** | **str** | URI of resource. | [optional] [readonly] 
**var_self** | **str** | URI of resource. | [optional] [readonly] 
**write** | **str** | URI of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bucket_links import BucketLinks

# TODO update the JSON string below
json = "{}"
# create an instance of BucketLinks from a JSON string
bucket_links_instance = BucketLinks.from_json(json)
# print the JSON string representation of the object
print(BucketLinks.to_json())

# convert the object into a dict
bucket_links_dict = bucket_links_instance.to_dict()
# create an instance of BucketLinks from a dict
bucket_links_from_dict = BucketLinks.from_dict(bucket_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


