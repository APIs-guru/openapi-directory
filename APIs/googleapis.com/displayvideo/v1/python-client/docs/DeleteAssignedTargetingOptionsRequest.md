# DeleteAssignedTargetingOptionsRequest

A request listing which assigned targeting options of a given targeting type should be deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_targeting_option_ids** | **List[str]** | Required. The assigned targeting option IDs to delete. | [optional] 
**targeting_type** | **str** | Required. Identifies the type of this assigned targeting option. | [optional] 

## Example

```python
from openapi_client.models.delete_assigned_targeting_options_request import DeleteAssignedTargetingOptionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteAssignedTargetingOptionsRequest from a JSON string
delete_assigned_targeting_options_request_instance = DeleteAssignedTargetingOptionsRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteAssignedTargetingOptionsRequest.to_json())

# convert the object into a dict
delete_assigned_targeting_options_request_dict = delete_assigned_targeting_options_request_instance.to_dict()
# create an instance of DeleteAssignedTargetingOptionsRequest from a dict
delete_assigned_targeting_options_request_from_dict = DeleteAssignedTargetingOptionsRequest.from_dict(delete_assigned_targeting_options_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


