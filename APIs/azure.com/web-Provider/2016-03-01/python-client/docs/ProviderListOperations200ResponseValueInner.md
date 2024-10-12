# ProviderListOperations200ResponseValueInner

Description of an operation available for Microsoft.Web resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**ProviderListOperations200ResponseValueInnerDisplay**](ProviderListOperations200ResponseValueInnerDisplay.md) |  | [optional] 
**name** | **str** |  | [optional] 
**origin** | **str** |  | [optional] 
**properties** | [**ProviderListOperations200ResponseValueInnerProperties**](ProviderListOperations200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.provider_list_operations200_response_value_inner import ProviderListOperations200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderListOperations200ResponseValueInner from a JSON string
provider_list_operations200_response_value_inner_instance = ProviderListOperations200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ProviderListOperations200ResponseValueInner.to_json())

# convert the object into a dict
provider_list_operations200_response_value_inner_dict = provider_list_operations200_response_value_inner_instance.to_dict()
# create an instance of ProviderListOperations200ResponseValueInner from a dict
provider_list_operations200_response_value_inner_from_dict = ProviderListOperations200ResponseValueInner.from_dict(provider_list_operations200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


