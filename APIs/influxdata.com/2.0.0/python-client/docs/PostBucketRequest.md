# PostBucketRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | 
**org_id** | **str** |  | 
**retention_rules** | [**List[RetentionRule]**](RetentionRule.md) | Rules to expire or retain data.  No rules means data never expires. | 
**rp** | **str** |  | [optional] 
**schema_type** | [**SchemaType**](SchemaType.md) |  | [optional] 

## Example

```python
from openapi_client.models.post_bucket_request import PostBucketRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostBucketRequest from a JSON string
post_bucket_request_instance = PostBucketRequest.from_json(json)
# print the JSON string representation of the object
print(PostBucketRequest.to_json())

# convert the object into a dict
post_bucket_request_dict = post_bucket_request_instance.to_dict()
# create an instance of PostBucketRequest from a dict
post_bucket_request_from_dict = PostBucketRequest.from_dict(post_bucket_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


