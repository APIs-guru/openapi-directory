# TransportTwitterPost

The TransportTwitter resource is a collection of transports that carry dispatched alerts to the external Twitter service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 
**twitter_access_token** | **str** | The access token for the Twitter service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_twitter_post import TransportTwitterPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTwitterPost from a JSON string
transport_twitter_post_instance = TransportTwitterPost.from_json(json)
# print the JSON string representation of the object
print(TransportTwitterPost.to_json())

# convert the object into a dict
transport_twitter_post_dict = transport_twitter_post_instance.to_dict()
# create an instance of TransportTwitterPost from a dict
transport_twitter_post_from_dict = TransportTwitterPost.from_dict(transport_twitter_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


