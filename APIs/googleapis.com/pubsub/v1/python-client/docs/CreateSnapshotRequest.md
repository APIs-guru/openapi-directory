# CreateSnapshotRequest

Request for the `CreateSnapshot` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels). | [optional] 
**subscription** | **str** | Required. The subscription whose backlog the snapshot retains. Specifically, the created snapshot is guaranteed to retain: (a) The existing backlog on the subscription. More precisely, this is defined as the messages in the subscription&#39;s backlog that are unacknowledged upon the successful completion of the &#x60;CreateSnapshot&#x60; request; as well as: (b) Any messages published to the subscription&#39;s topic following the successful completion of the CreateSnapshot request. Format is &#x60;projects/{project}/subscriptions/{sub}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.create_snapshot_request import CreateSnapshotRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSnapshotRequest from a JSON string
create_snapshot_request_instance = CreateSnapshotRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSnapshotRequest.to_json())

# convert the object into a dict
create_snapshot_request_dict = create_snapshot_request_instance.to_dict()
# create an instance of CreateSnapshotRequest from a dict
create_snapshot_request_from_dict = CreateSnapshotRequest.from_dict(create_snapshot_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


