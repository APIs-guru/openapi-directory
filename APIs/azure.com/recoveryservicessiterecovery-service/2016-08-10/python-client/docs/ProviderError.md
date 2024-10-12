# ProviderError

This class contains the error details per object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **int** | The Error code. | [optional] 
**error_id** | **str** | The Provider error Id. | [optional] 
**error_message** | **str** | The Error message. | [optional] 
**possible_causes** | **str** | The possible causes for the error. | [optional] 
**recommended_action** | **str** | The recommended action to resolve the error. | [optional] 

## Example

```python
from openapi_client.models.provider_error import ProviderError

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderError from a JSON string
provider_error_instance = ProviderError.from_json(json)
# print the JSON string representation of the object
print(ProviderError.to_json())

# convert the object into a dict
provider_error_dict = provider_error_instance.to_dict()
# create an instance of ProviderError from a dict
provider_error_from_dict = ProviderError.from_dict(provider_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


