# ProviderOperationsMetadataListResult

Provider operations metadata list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[ProviderOperationsMetadata]**](ProviderOperationsMetadata.md) | The list of providers. | [optional] 

## Example

```python
from openapi_client.models.provider_operations_metadata_list_result import ProviderOperationsMetadataListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderOperationsMetadataListResult from a JSON string
provider_operations_metadata_list_result_instance = ProviderOperationsMetadataListResult.from_json(json)
# print the JSON string representation of the object
print(ProviderOperationsMetadataListResult.to_json())

# convert the object into a dict
provider_operations_metadata_list_result_dict = provider_operations_metadata_list_result_instance.to_dict()
# create an instance of ProviderOperationsMetadataListResult from a dict
provider_operations_metadata_list_result_from_dict = ProviderOperationsMetadataListResult.from_dict(provider_operations_metadata_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


