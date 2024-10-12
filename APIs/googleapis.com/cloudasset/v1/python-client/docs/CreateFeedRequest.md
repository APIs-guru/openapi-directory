# CreateFeedRequest

Create asset feed request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feed** | [**Feed**](Feed.md) |  | [optional] 
**feed_id** | **str** | Required. This is the client-assigned asset feed identifier and it needs to be unique under a specific parent project/folder/organization. | [optional] 

## Example

```python
from openapi_client.models.create_feed_request import CreateFeedRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFeedRequest from a JSON string
create_feed_request_instance = CreateFeedRequest.from_json(json)
# print the JSON string representation of the object
print(CreateFeedRequest.to_json())

# convert the object into a dict
create_feed_request_dict = create_feed_request_instance.to_dict()
# create an instance of CreateFeedRequest from a dict
create_feed_request_from_dict = CreateFeedRequest.from_dict(create_feed_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


