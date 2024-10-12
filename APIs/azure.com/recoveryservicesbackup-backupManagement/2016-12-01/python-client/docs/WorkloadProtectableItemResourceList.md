# WorkloadProtectableItemResourceList

List of WorkloadProtectableItem resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[WorkloadProtectableItemResource]**](WorkloadProtectableItemResource.md) | List of resources. | [optional] 
**next_link** | **str** | The uri to fetch the next page of resources. Call ListNext() fetches next page of resources. | [optional] 

## Example

```python
from openapi_client.models.workload_protectable_item_resource_list import WorkloadProtectableItemResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadProtectableItemResourceList from a JSON string
workload_protectable_item_resource_list_instance = WorkloadProtectableItemResourceList.from_json(json)
# print the JSON string representation of the object
print(WorkloadProtectableItemResourceList.to_json())

# convert the object into a dict
workload_protectable_item_resource_list_dict = workload_protectable_item_resource_list_instance.to_dict()
# create an instance of WorkloadProtectableItemResourceList from a dict
workload_protectable_item_resource_list_from_dict = WorkloadProtectableItemResourceList.from_dict(workload_protectable_item_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


