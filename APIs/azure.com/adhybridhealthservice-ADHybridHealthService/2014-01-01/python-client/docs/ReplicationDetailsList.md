# ReplicationDetailsList

The list of replication details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for paginated calls. | [optional] 
**next_link** | **str** | The link used to get the next page of operations. | [optional] 
**total_count** | **int** | The total count of replication detail elements. | [optional] 
**value** | [**List[ReplicationSummary]**](ReplicationSummary.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.replication_details_list import ReplicationDetailsList

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationDetailsList from a JSON string
replication_details_list_instance = ReplicationDetailsList.from_json(json)
# print the JSON string representation of the object
print(ReplicationDetailsList.to_json())

# convert the object into a dict
replication_details_list_dict = replication_details_list_instance.to_dict()
# create an instance of ReplicationDetailsList from a dict
replication_details_list_from_dict = ReplicationDetailsList.from_dict(replication_details_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


