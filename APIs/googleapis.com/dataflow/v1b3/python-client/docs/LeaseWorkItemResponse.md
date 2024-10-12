# LeaseWorkItemResponse

Response to a request to lease WorkItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unified_worker_response** | **Dict[str, object]** | Untranslated bag-of-bytes WorkResponse for UnifiedWorker. | [optional] 
**work_items** | [**List[WorkItem]**](WorkItem.md) | A list of the leased WorkItems. | [optional] 

## Example

```python
from openapi_client.models.lease_work_item_response import LeaseWorkItemResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LeaseWorkItemResponse from a JSON string
lease_work_item_response_instance = LeaseWorkItemResponse.from_json(json)
# print the JSON string representation of the object
print(LeaseWorkItemResponse.to_json())

# convert the object into a dict
lease_work_item_response_dict = lease_work_item_response_instance.to_dict()
# create an instance of LeaseWorkItemResponse from a dict
lease_work_item_response_from_dict = LeaseWorkItemResponse.from_dict(lease_work_item_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


