# GetUpdatesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_updates** | **List[str]** | A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited\\_channel\\_post”, “callback\\_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api/#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.    Please note that this parameter doesn&#39;t affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time. | [optional] 
**limit** | **int** | Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100. | [optional] [default to 100]
**offset** | **int** | Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as [getUpdates](https://core.telegram.org/bots/api/#getupdates) is called with an *offset* higher than its *update\\_id*. The negative offset can be specified to retrieve updates starting from *-offset* update from the end of the updates queue. All previous updates will forgotten. | [optional] 
**timeout** | **int** | Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. | [optional] [default to 0]

## Example

```python
from openapi_client.models.get_updates_post_request import GetUpdatesPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetUpdatesPostRequest from a JSON string
get_updates_post_request_instance = GetUpdatesPostRequest.from_json(json)
# print the JSON string representation of the object
print(GetUpdatesPostRequest.to_json())

# convert the object into a dict
get_updates_post_request_dict = get_updates_post_request_instance.to_dict()
# create an instance of GetUpdatesPostRequest from a dict
get_updates_post_request_from_dict = GetUpdatesPostRequest.from_dict(get_updates_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


