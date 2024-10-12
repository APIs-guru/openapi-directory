# ReplicationListResult

The result of a request to list replications for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next list of replications. | [optional] 
**value** | [**List[Replication]**](Replication.md) | The list of replications. Since this list may be incomplete, the nextLink field should be used to request the next list of replications. | [optional] 

## Example

```python
from openapi_client.models.replication_list_result import ReplicationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationListResult from a JSON string
replication_list_result_instance = ReplicationListResult.from_json(json)
# print the JSON string representation of the object
print(ReplicationListResult.to_json())

# convert the object into a dict
replication_list_result_dict = replication_list_result_instance.to_dict()
# create an instance of ReplicationListResult from a dict
replication_list_result_from_dict = ReplicationListResult.from_dict(replication_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


