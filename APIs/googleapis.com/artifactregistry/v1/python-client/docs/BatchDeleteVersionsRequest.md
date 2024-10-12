# BatchDeleteVersionsRequest

The request to delete multiple versions across a repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | Required. The names of the versions to delete. A maximum of 10000 versions can be deleted in a batch. | [optional] 
**validate_only** | **bool** | If true, the request is performed without deleting data, following AIP-163. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_versions_request import BatchDeleteVersionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteVersionsRequest from a JSON string
batch_delete_versions_request_instance = BatchDeleteVersionsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteVersionsRequest.to_json())

# convert the object into a dict
batch_delete_versions_request_dict = batch_delete_versions_request_instance.to_dict()
# create an instance of BatchDeleteVersionsRequest from a dict
batch_delete_versions_request_from_dict = BatchDeleteVersionsRequest.from_dict(batch_delete_versions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


