# ProviderListOperations200ResponseValueInnerProperties

Properties available for a Microsoft.Web resource provider operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_specification** | [**ProviderListOperations200ResponseValueInnerPropertiesServiceSpecification**](ProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.md) |  | [optional] 

## Example

```python
from openapi_client.models.provider_list_operations200_response_value_inner_properties import ProviderListOperations200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderListOperations200ResponseValueInnerProperties from a JSON string
provider_list_operations200_response_value_inner_properties_instance = ProviderListOperations200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ProviderListOperations200ResponseValueInnerProperties.to_json())

# convert the object into a dict
provider_list_operations200_response_value_inner_properties_dict = provider_list_operations200_response_value_inner_properties_instance.to_dict()
# create an instance of ProviderListOperations200ResponseValueInnerProperties from a dict
provider_list_operations200_response_value_inner_properties_from_dict = ProviderListOperations200ResponseValueInnerProperties.from_dict(provider_list_operations200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


