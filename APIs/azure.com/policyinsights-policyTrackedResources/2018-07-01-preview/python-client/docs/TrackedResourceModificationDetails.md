# TrackedResourceModificationDetails

The details of the policy triggered deployment that created or modified the tracked resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **str** | The ID of the deployment that created or modified the tracked resource. | [optional] [readonly] 
**deployment_time** | **datetime** | Timestamp of the deployment that created or modified the tracked resource. | [optional] [readonly] 
**policy_details** | [**PolicyDetails**](PolicyDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.tracked_resource_modification_details import TrackedResourceModificationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedResourceModificationDetails from a JSON string
tracked_resource_modification_details_instance = TrackedResourceModificationDetails.from_json(json)
# print the JSON string representation of the object
print(TrackedResourceModificationDetails.to_json())

# convert the object into a dict
tracked_resource_modification_details_dict = tracked_resource_modification_details_instance.to_dict()
# create an instance of TrackedResourceModificationDetails from a dict
tracked_resource_modification_details_from_dict = TrackedResourceModificationDetails.from_dict(tracked_resource_modification_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


