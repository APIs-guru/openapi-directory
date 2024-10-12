# CommitServicePerimetersRequest

A request to commit dry-run specs in all Service Perimeters belonging to an Access Policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Optional. The etag for the version of the Access Policy that this commit operation is to be performed on. If, at the time of commit, the etag for the Access Policy stored in Access Context Manager is different from the specified etag, then the commit operation will not be performed and the call will fail. This field is not required. If etag is not provided, the operation will be performed as if a valid etag is provided. | [optional] 

## Example

```python
from openapi_client.models.commit_service_perimeters_request import CommitServicePerimetersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommitServicePerimetersRequest from a JSON string
commit_service_perimeters_request_instance = CommitServicePerimetersRequest.from_json(json)
# print the JSON string representation of the object
print(CommitServicePerimetersRequest.to_json())

# convert the object into a dict
commit_service_perimeters_request_dict = commit_service_perimeters_request_instance.to_dict()
# create an instance of CommitServicePerimetersRequest from a dict
commit_service_perimeters_request_from_dict = CommitServicePerimetersRequest.from_dict(commit_service_perimeters_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


