# BucketsBucketKeyMessagesPost200ResponseDataInnerWarning

An object representing warnings (non-fatal warnings) for this item. Only present if status is warning, otherwise this will be null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | A numeric error code for the specific problem we encountered with this message. (warning status only) | [optional] 
**message** | **str** | A description of the problem we encountered with this message. (warning status only) | [optional] 
**more_info** | **str** | A link to more help about the warning. (warning status only) | [optional] 

## Example

```python
from openapi_client.models.buckets_bucket_key_messages_post200_response_data_inner_warning import BucketsBucketKeyMessagesPost200ResponseDataInnerWarning

# TODO update the JSON string below
json = "{}"
# create an instance of BucketsBucketKeyMessagesPost200ResponseDataInnerWarning from a JSON string
buckets_bucket_key_messages_post200_response_data_inner_warning_instance = BucketsBucketKeyMessagesPost200ResponseDataInnerWarning.from_json(json)
# print the JSON string representation of the object
print(BucketsBucketKeyMessagesPost200ResponseDataInnerWarning.to_json())

# convert the object into a dict
buckets_bucket_key_messages_post200_response_data_inner_warning_dict = buckets_bucket_key_messages_post200_response_data_inner_warning_instance.to_dict()
# create an instance of BucketsBucketKeyMessagesPost200ResponseDataInnerWarning from a dict
buckets_bucket_key_messages_post200_response_data_inner_warning_from_dict = BucketsBucketKeyMessagesPost200ResponseDataInnerWarning.from_dict(buckets_bucket_key_messages_post200_response_data_inner_warning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


