# TrustedIdProvider

Data Lake Store trusted identity provider information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TrustedIdProviderProperties**](TrustedIdProviderProperties.md) |  | [optional] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.trusted_id_provider import TrustedIdProvider

# TODO update the JSON string below
json = "{}"
# create an instance of TrustedIdProvider from a JSON string
trusted_id_provider_instance = TrustedIdProvider.from_json(json)
# print the JSON string representation of the object
print(TrustedIdProvider.to_json())

# convert the object into a dict
trusted_id_provider_dict = trusted_id_provider_instance.to_dict()
# create an instance of TrustedIdProvider from a dict
trusted_id_provider_from_dict = TrustedIdProvider.from_dict(trusted_id_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


