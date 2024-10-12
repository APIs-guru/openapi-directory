# BatchCreateRepositoriesResponse

Message for response of creating repositories in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repositories** | [**List[Repository]**](Repository.md) | Repository resources created. | [optional] 

## Example

```python
from openapi_client.models.batch_create_repositories_response import BatchCreateRepositoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateRepositoriesResponse from a JSON string
batch_create_repositories_response_instance = BatchCreateRepositoriesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateRepositoriesResponse.to_json())

# convert the object into a dict
batch_create_repositories_response_dict = batch_create_repositories_response_instance.to_dict()
# create an instance of BatchCreateRepositoriesResponse from a dict
batch_create_repositories_response_from_dict = BatchCreateRepositoriesResponse.from_dict(batch_create_repositories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


