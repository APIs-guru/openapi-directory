# UpdateAProjectRequestOwner

Set to `null` to remove all ownership. User must be a member of the same organization as the project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A user to assign as the project owner. | [optional] 

## Example

```python
from openapi_client.models.update_a_project_request_owner import UpdateAProjectRequestOwner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAProjectRequestOwner from a JSON string
update_a_project_request_owner_instance = UpdateAProjectRequestOwner.from_json(json)
# print the JSON string representation of the object
print(UpdateAProjectRequestOwner.to_json())

# convert the object into a dict
update_a_project_request_owner_dict = update_a_project_request_owner_instance.to_dict()
# create an instance of UpdateAProjectRequestOwner from a dict
update_a_project_request_owner_from_dict = UpdateAProjectRequestOwner.from_dict(update_a_project_request_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


