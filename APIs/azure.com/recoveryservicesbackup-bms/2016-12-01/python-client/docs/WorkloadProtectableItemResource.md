# WorkloadProtectableItemResource

Base class for backup item. Workload-specific backup items are derived from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WorkloadProtectableItem**](WorkloadProtectableItem.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.workload_protectable_item_resource import WorkloadProtectableItemResource

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadProtectableItemResource from a JSON string
workload_protectable_item_resource_instance = WorkloadProtectableItemResource.from_json(json)
# print the JSON string representation of the object
print(WorkloadProtectableItemResource.to_json())

# convert the object into a dict
workload_protectable_item_resource_dict = workload_protectable_item_resource_instance.to_dict()
# create an instance of WorkloadProtectableItemResource from a dict
workload_protectable_item_resource_from_dict = WorkloadProtectableItemResource.from_dict(workload_protectable_item_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


