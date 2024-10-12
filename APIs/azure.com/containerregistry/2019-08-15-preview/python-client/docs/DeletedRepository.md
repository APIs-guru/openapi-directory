# DeletedRepository

Deleted repository

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifests_deleted** | **List[str]** | SHA of the deleted image | [optional] 
**tags_deleted** | **List[str]** | Tag of the deleted image | [optional] 

## Example

```python
from openapi_client.models.deleted_repository import DeletedRepository

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedRepository from a JSON string
deleted_repository_instance = DeletedRepository.from_json(json)
# print the JSON string representation of the object
print(DeletedRepository.to_json())

# convert the object into a dict
deleted_repository_dict = deleted_repository_instance.to_dict()
# create an instance of DeletedRepository from a dict
deleted_repository_from_dict = DeletedRepository.from_dict(deleted_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


