# PublishBatchRequest

Request for the PublishBatch method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[PubsubMessage]**](PubsubMessage.md) | The messages to publish. | [optional] 
**topic** | **str** | The messages in the request will be published on this topic. | [optional] 

## Example

```python
from openapi_client.models.publish_batch_request import PublishBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PublishBatchRequest from a JSON string
publish_batch_request_instance = PublishBatchRequest.from_json(json)
# print the JSON string representation of the object
print(PublishBatchRequest.to_json())

# convert the object into a dict
publish_batch_request_dict = publish_batch_request_instance.to_dict()
# create an instance of PublishBatchRequest from a dict
publish_batch_request_from_dict = PublishBatchRequest.from_dict(publish_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


