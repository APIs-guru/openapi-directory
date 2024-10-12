# PostRepositoryProviderMappingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | App Center account id to link to this provider and external id | 
**external_account_id** | **str** | Id of user in the external provider service | 
**provider** | **str** | Supported external providers of source control repositories | 

## Example

```python
from openapi_client.models.post_repository_provider_mapping_request import PostRepositoryProviderMappingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostRepositoryProviderMappingRequest from a JSON string
post_repository_provider_mapping_request_instance = PostRepositoryProviderMappingRequest.from_json(json)
# print the JSON string representation of the object
print(PostRepositoryProviderMappingRequest.to_json())

# convert the object into a dict
post_repository_provider_mapping_request_dict = post_repository_provider_mapping_request_instance.to_dict()
# create an instance of PostRepositoryProviderMappingRequest from a dict
post_repository_provider_mapping_request_from_dict = PostRepositoryProviderMappingRequest.from_dict(post_repository_provider_mapping_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


