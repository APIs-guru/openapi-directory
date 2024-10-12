# ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerDimensionsInner

Dimension of a resource metric. For e.g. instance specific HTTP requests for a web app,  where instance name is dimension of the metric HTTP request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** |  | [optional] 
**internal_name** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**to_be_exported_for_shoebox** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_dimensions_inner import ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerDimensionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerDimensionsInner from a JSON string
provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_dimensions_inner_instance = ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerDimensionsInner.from_json(json)
# print the JSON string representation of the object
print(ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerDimensionsInner.to_json())

# convert the object into a dict
provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_dimensions_inner_dict = provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_dimensions_inner_instance.to_dict()
# create an instance of ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerDimensionsInner from a dict
provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_dimensions_inner_from_dict = ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerDimensionsInner.from_dict(provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_dimensions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


