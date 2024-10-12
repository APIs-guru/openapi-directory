# ListReplicationCyclesResponse

Response message for 'ListReplicationCycles' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Output only. A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] [readonly] 
**replication_cycles** | [**List[ReplicationCycle]**](ReplicationCycle.md) | Output only. The list of replication cycles response. | [optional] [readonly] 
**unreachable** | **List[str]** | Output only. Locations that could not be reached. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_replication_cycles_response import ListReplicationCyclesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReplicationCyclesResponse from a JSON string
list_replication_cycles_response_instance = ListReplicationCyclesResponse.from_json(json)
# print the JSON string representation of the object
print(ListReplicationCyclesResponse.to_json())

# convert the object into a dict
list_replication_cycles_response_dict = list_replication_cycles_response_instance.to_dict()
# create an instance of ListReplicationCyclesResponse from a dict
list_replication_cycles_response_from_dict = ListReplicationCyclesResponse.from_dict(list_replication_cycles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


