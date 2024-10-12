# Change

A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additions** | [**List[ResourceRecordSet]**](ResourceRecordSet.md) | Which ResourceRecordSets to add? | [optional] 
**deletions** | [**List[ResourceRecordSet]**](ResourceRecordSet.md) | Which ResourceRecordSets to remove? Must match existing data exactly. | [optional] 
**id** | **str** | Unique identifier for the resource; defined by the server (output only). | [optional] 
**is_serving** | **bool** | If the DNS queries for the zone will be served. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#change']
**start_time** | **str** | The time that this operation was started by the server (output only). This is in RFC3339 text format. | [optional] 
**status** | **str** | Status of the operation (output only). A status of \&quot;done\&quot; means that the request to update the authoritative servers has been sent, but the servers might not be updated yet. | [optional] 

## Example

```python
from openapi_client.models.change import Change

# TODO update the JSON string below
json = "{}"
# create an instance of Change from a JSON string
change_instance = Change.from_json(json)
# print the JSON string representation of the object
print(Change.to_json())

# convert the object into a dict
change_dict = change_instance.to_dict()
# create an instance of Change from a dict
change_from_dict = Change.from_dict(change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


