# UpdateRepoRequest

Request for UpdateRepo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repo** | [**Repo**](Repo.md) |  | [optional] 
**update_mask** | **str** | A FieldMask specifying which fields of the repo to modify. Only the fields in the mask will be modified. If no mask is provided, this request is no-op. | [optional] 

## Example

```python
from openapi_client.models.update_repo_request import UpdateRepoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateRepoRequest from a JSON string
update_repo_request_instance = UpdateRepoRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateRepoRequest.to_json())

# convert the object into a dict
update_repo_request_dict = update_repo_request_instance.to_dict()
# create an instance of UpdateRepoRequest from a dict
update_repo_request_from_dict = UpdateRepoRequest.from_dict(update_repo_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


