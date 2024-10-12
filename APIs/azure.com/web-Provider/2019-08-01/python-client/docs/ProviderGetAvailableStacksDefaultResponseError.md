# ProviderGetAvailableStacksDefaultResponseError

Error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**details** | [**List[ProviderGetAvailableStacksDefaultResponseErrorDetailsInner]**](ProviderGetAvailableStacksDefaultResponseErrorDetailsInner.md) |  | [optional] 
**innererror** | **str** | More information to debug error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.provider_get_available_stacks_default_response_error import ProviderGetAvailableStacksDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderGetAvailableStacksDefaultResponseError from a JSON string
provider_get_available_stacks_default_response_error_instance = ProviderGetAvailableStacksDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(ProviderGetAvailableStacksDefaultResponseError.to_json())

# convert the object into a dict
provider_get_available_stacks_default_response_error_dict = provider_get_available_stacks_default_response_error_instance.to_dict()
# create an instance of ProviderGetAvailableStacksDefaultResponseError from a dict
provider_get_available_stacks_default_response_error_from_dict = ProviderGetAvailableStacksDefaultResponseError.from_dict(provider_get_available_stacks_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


