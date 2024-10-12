# NetworkWatchersUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.network_watchers_update_tags_request import NetworkWatchersUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkWatchersUpdateTagsRequest from a JSON string
network_watchers_update_tags_request_instance = NetworkWatchersUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(NetworkWatchersUpdateTagsRequest.to_json())

# convert the object into a dict
network_watchers_update_tags_request_dict = network_watchers_update_tags_request_instance.to_dict()
# create an instance of NetworkWatchersUpdateTagsRequest from a dict
network_watchers_update_tags_request_from_dict = NetworkWatchersUpdateTagsRequest.from_dict(network_watchers_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


