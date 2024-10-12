# WorkloadItemResourceList

List of WorkloadItem resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[WorkloadItemResource]**](WorkloadItemResource.md) | List of resources. | [optional] 
**next_link** | **str** | The uri to fetch the next page of resources. Call ListNext() fetches next page of resources. | [optional] 

## Example

```python
from openapi_client.models.workload_item_resource_list import WorkloadItemResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadItemResourceList from a JSON string
workload_item_resource_list_instance = WorkloadItemResourceList.from_json(json)
# print the JSON string representation of the object
print(WorkloadItemResourceList.to_json())

# convert the object into a dict
workload_item_resource_list_dict = workload_item_resource_list_instance.to_dict()
# create an instance of WorkloadItemResourceList from a dict
workload_item_resource_list_from_dict = WorkloadItemResourceList.from_dict(workload_item_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


