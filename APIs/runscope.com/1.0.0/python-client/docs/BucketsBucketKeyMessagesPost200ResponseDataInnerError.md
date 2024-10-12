# BucketsBucketKeyMessagesPost200ResponseDataInnerError

An object representing errors for this item. Only present if status is error, otherwise this will be null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | A numeric error code for the specific problem we encountered with this message. (error status only) | [optional] 
**message** | **str** | A description of the problem we encountered with this message. (error status only) | [optional] 
**more_info** | **str** | A link to more help about the warning. (error status only) | [optional] 

## Example

```python
from openapi_client.models.buckets_bucket_key_messages_post200_response_data_inner_error import BucketsBucketKeyMessagesPost200ResponseDataInnerError

# TODO update the JSON string below
json = "{}"
# create an instance of BucketsBucketKeyMessagesPost200ResponseDataInnerError from a JSON string
buckets_bucket_key_messages_post200_response_data_inner_error_instance = BucketsBucketKeyMessagesPost200ResponseDataInnerError.from_json(json)
# print the JSON string representation of the object
print(BucketsBucketKeyMessagesPost200ResponseDataInnerError.to_json())

# convert the object into a dict
buckets_bucket_key_messages_post200_response_data_inner_error_dict = buckets_bucket_key_messages_post200_response_data_inner_error_instance.to_dict()
# create an instance of BucketsBucketKeyMessagesPost200ResponseDataInnerError from a dict
buckets_bucket_key_messages_post200_response_data_inner_error_from_dict = BucketsBucketKeyMessagesPost200ResponseDataInnerError.from_dict(buckets_bucket_key_messages_post200_response_data_inner_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


