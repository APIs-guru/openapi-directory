# ProviderListOperations200ResponseValueInnerPropertiesServiceSpecification

Resource metrics service provided by Microsoft.Insights resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_specifications** | [**List[ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationLogSpecificationsInner]**](ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationLogSpecificationsInner.md) |  | [optional] 
**metric_specifications** | [**List[ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner]**](ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.provider_list_operations200_response_value_inner_properties_service_specification import ProviderListOperations200ResponseValueInnerPropertiesServiceSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderListOperations200ResponseValueInnerPropertiesServiceSpecification from a JSON string
provider_list_operations200_response_value_inner_properties_service_specification_instance = ProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.from_json(json)
# print the JSON string representation of the object
print(ProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.to_json())

# convert the object into a dict
provider_list_operations200_response_value_inner_properties_service_specification_dict = provider_list_operations200_response_value_inner_properties_service_specification_instance.to_dict()
# create an instance of ProviderListOperations200ResponseValueInnerPropertiesServiceSpecification from a dict
provider_list_operations200_response_value_inner_properties_service_specification_from_dict = ProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.from_dict(provider_list_operations200_response_value_inner_properties_service_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


