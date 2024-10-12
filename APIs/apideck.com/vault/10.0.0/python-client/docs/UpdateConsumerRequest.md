# UpdateConsumerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**ConsumerMetadata**](ConsumerMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_consumer_request import UpdateConsumerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateConsumerRequest from a JSON string
update_consumer_request_instance = UpdateConsumerRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateConsumerRequest.to_json())

# convert the object into a dict
update_consumer_request_dict = update_consumer_request_instance.to_dict()
# create an instance of UpdateConsumerRequest from a dict
update_consumer_request_from_dict = UpdateConsumerRequest.from_dict(update_consumer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


