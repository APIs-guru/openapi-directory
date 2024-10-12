# HierarchiesRequestBatchGetDelete

Request to get or delete multiple time series hierarchies. Exactly one of \"hierarchyIds\" or \"names\" must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hierarchy_ids** | **List[str]** | List of hierarchy IDs. | [optional] 
**names** | **List[str]** | List of hierarchy names. | [optional] 

## Example

```python
from openapi_client.models.hierarchies_request_batch_get_delete import HierarchiesRequestBatchGetDelete

# TODO update the JSON string below
json = "{}"
# create an instance of HierarchiesRequestBatchGetDelete from a JSON string
hierarchies_request_batch_get_delete_instance = HierarchiesRequestBatchGetDelete.from_json(json)
# print the JSON string representation of the object
print(HierarchiesRequestBatchGetDelete.to_json())

# convert the object into a dict
hierarchies_request_batch_get_delete_dict = hierarchies_request_batch_get_delete_instance.to_dict()
# create an instance of HierarchiesRequestBatchGetDelete from a dict
hierarchies_request_batch_get_delete_from_dict = HierarchiesRequestBatchGetDelete.from_dict(hierarchies_request_batch_get_delete_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


