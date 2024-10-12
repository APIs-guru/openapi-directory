# ReplicationSummaryList

The list of replication summary details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ReplicationSummary]**](ReplicationSummary.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.replication_summary_list import ReplicationSummaryList

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationSummaryList from a JSON string
replication_summary_list_instance = ReplicationSummaryList.from_json(json)
# print the JSON string representation of the object
print(ReplicationSummaryList.to_json())

# convert the object into a dict
replication_summary_list_dict = replication_summary_list_instance.to_dict()
# create an instance of ReplicationSummaryList from a dict
replication_summary_list_from_dict = ReplicationSummaryList.from_dict(replication_summary_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


