# MessageStoragePolicy

A policy constraining the storage of messages published to the topic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_persistence_regions** | **List[str]** | Optional. A list of IDs of Google Cloud regions where messages that are published to the topic may be persisted in storage. Messages published by publishers running in non-allowed Google Cloud regions (or running outside of Google Cloud altogether) are routed for storage in one of the allowed regions. An empty list means that no regions are allowed, and is not a valid configuration. | [optional] 
**enforce_in_transit** | **bool** | Optional. If true, &#x60;allowed_persistence_regions&#x60; is also used to enforce in-transit guarantees for messages. That is, Pub/Sub will fail Publish operations on this topic and subscribe operations on any subscription attached to this topic in any region that is not in &#x60;allowed_persistence_regions&#x60;. | [optional] 

## Example

```python
from openapi_client.models.message_storage_policy import MessageStoragePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of MessageStoragePolicy from a JSON string
message_storage_policy_instance = MessageStoragePolicy.from_json(json)
# print the JSON string representation of the object
print(MessageStoragePolicy.to_json())

# convert the object into a dict
message_storage_policy_dict = message_storage_policy_instance.to_dict()
# create an instance of MessageStoragePolicy from a dict
message_storage_policy_from_dict = MessageStoragePolicy.from_dict(message_storage_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


