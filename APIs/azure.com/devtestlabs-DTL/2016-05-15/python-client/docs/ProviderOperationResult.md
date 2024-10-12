# ProviderOperationResult

Result of the request to list REST API operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] [readonly] 
**value** | [**List[OperationMetadata]**](OperationMetadata.md) | List of operations supported by the resource provider. | [optional] 

## Example

```python
from openapi_client.models.provider_operation_result import ProviderOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderOperationResult from a JSON string
provider_operation_result_instance = ProviderOperationResult.from_json(json)
# print the JSON string representation of the object
print(ProviderOperationResult.to_json())

# convert the object into a dict
provider_operation_result_dict = provider_operation_result_instance.to_dict()
# create an instance of ProviderOperationResult from a dict
provider_operation_result_from_dict = ProviderOperationResult.from_dict(provider_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


