# GetOrCreateRepositoryProviderMappingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_account_name** | **str** | The account name given by the external provider. If provided, create an organization and the mapping. If not, create mapping with user. | [optional] 

## Example

```python
from openapi_client.models.get_or_create_repository_provider_mapping_request import GetOrCreateRepositoryProviderMappingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrCreateRepositoryProviderMappingRequest from a JSON string
get_or_create_repository_provider_mapping_request_instance = GetOrCreateRepositoryProviderMappingRequest.from_json(json)
# print the JSON string representation of the object
print(GetOrCreateRepositoryProviderMappingRequest.to_json())

# convert the object into a dict
get_or_create_repository_provider_mapping_request_dict = get_or_create_repository_provider_mapping_request_instance.to_dict()
# create an instance of GetOrCreateRepositoryProviderMappingRequest from a dict
get_or_create_repository_provider_mapping_request_from_dict = GetOrCreateRepositoryProviderMappingRequest.from_dict(get_or_create_repository_provider_mapping_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


