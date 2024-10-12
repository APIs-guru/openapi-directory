# ReplicationStatus

 Replication summary for a domain controller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_dc_count** | **int** | The total number of domain controllers with error in a given forest. | [optional] 
**forest_name** | **str** | The forest name. | [optional] 
**total_dc_count** | **int** | The total number of domain controllers for a given forest. | [optional] 

## Example

```python
from openapi_client.models.replication_status import ReplicationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationStatus from a JSON string
replication_status_instance = ReplicationStatus.from_json(json)
# print the JSON string representation of the object
print(ReplicationStatus.to_json())

# convert the object into a dict
replication_status_dict = replication_status_instance.to_dict()
# create an instance of ReplicationStatus from a dict
replication_status_from_dict = ReplicationStatus.from_dict(replication_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


