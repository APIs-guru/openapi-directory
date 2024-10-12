# BucketsBucketKeyMessagesPost200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**BucketsBucketKeyMessagesPost200ResponseDataInnerError**](BucketsBucketKeyMessagesPost200ResponseDataInnerError.md) |  | [optional] 
**status** | **str** | One of the following: success, error, or warning. | [optional] 
**unique_identifier** | **str** | If the message had a unique_identifier, it will be returned in this field, to help match the responses to the messages that were submitted. | [optional] 
**uuid** | **str** | This message&#39;s Runscope-generated ID. | [optional] 
**warning** | [**BucketsBucketKeyMessagesPost200ResponseDataInnerWarning**](BucketsBucketKeyMessagesPost200ResponseDataInnerWarning.md) |  | [optional] 

## Example

```python
from openapi_client.models.buckets_bucket_key_messages_post200_response_data_inner import BucketsBucketKeyMessagesPost200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of BucketsBucketKeyMessagesPost200ResponseDataInner from a JSON string
buckets_bucket_key_messages_post200_response_data_inner_instance = BucketsBucketKeyMessagesPost200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(BucketsBucketKeyMessagesPost200ResponseDataInner.to_json())

# convert the object into a dict
buckets_bucket_key_messages_post200_response_data_inner_dict = buckets_bucket_key_messages_post200_response_data_inner_instance.to_dict()
# create an instance of BucketsBucketKeyMessagesPost200ResponseDataInner from a dict
buckets_bucket_key_messages_post200_response_data_inner_from_dict = BucketsBucketKeyMessagesPost200ResponseDataInner.from_dict(buckets_bucket_key_messages_post200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


