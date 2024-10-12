# ProviderGetAvailableStacksDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ProviderGetAvailableStacksDefaultResponseError**](ProviderGetAvailableStacksDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.provider_get_available_stacks_default_response import ProviderGetAvailableStacksDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderGetAvailableStacksDefaultResponse from a JSON string
provider_get_available_stacks_default_response_instance = ProviderGetAvailableStacksDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ProviderGetAvailableStacksDefaultResponse.to_json())

# convert the object into a dict
provider_get_available_stacks_default_response_dict = provider_get_available_stacks_default_response_instance.to_dict()
# create an instance of ProviderGetAvailableStacksDefaultResponse from a dict
provider_get_available_stacks_default_response_from_dict = ProviderGetAvailableStacksDefaultResponse.from_dict(provider_get_available_stacks_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


