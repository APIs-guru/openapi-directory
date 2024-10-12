# BucketsBucketKeyMessagesPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BucketsBucketKeyMessagesPost200ResponseDataInner]**](BucketsBucketKeyMessagesPost200ResponseDataInner.md) |  | [optional] 
**meta** | [**BucketsBucketKeyMessagesPost200ResponseMeta**](BucketsBucketKeyMessagesPost200ResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.buckets_bucket_key_messages_post200_response import BucketsBucketKeyMessagesPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BucketsBucketKeyMessagesPost200Response from a JSON string
buckets_bucket_key_messages_post200_response_instance = BucketsBucketKeyMessagesPost200Response.from_json(json)
# print the JSON string representation of the object
print(BucketsBucketKeyMessagesPost200Response.to_json())

# convert the object into a dict
buckets_bucket_key_messages_post200_response_dict = buckets_bucket_key_messages_post200_response_instance.to_dict()
# create an instance of BucketsBucketKeyMessagesPost200Response from a dict
buckets_bucket_key_messages_post200_response_from_dict = BucketsBucketKeyMessagesPost200Response.from_dict(buckets_bucket_key_messages_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


