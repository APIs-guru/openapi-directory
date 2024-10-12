# ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner

Definition of a single resource metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** |  | [optional] 
**availabilities** | [**List[ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerAvailabilitiesInner]**](ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerAvailabilitiesInner.md) |  | [optional] 
**category** | **str** |  | [optional] 
**dimensions** | [**List[ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerDimensionsInner]**](ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerDimensionsInner.md) |  | [optional] 
**display_description** | **str** |  | [optional] 
**display_name** | **str** |  | [optional] 
**enable_regional_mdm_account** | **bool** |  | [optional] 
**fill_gap_with_zero** | **bool** |  | [optional] 
**is_internal** | **bool** |  | [optional] 
**metric_filter_pattern** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**source_mdm_account** | **str** |  | [optional] 
**source_mdm_namespace** | **str** |  | [optional] 
**supported_time_grain_types** | **List[str]** |  | [optional] 
**supports_instance_level_aggregation** | **bool** |  | [optional] 
**unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner import ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner from a JSON string
provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_instance = ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner.from_json(json)
# print the JSON string representation of the object
print(ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner.to_json())

# convert the object into a dict
provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_dict = provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_instance.to_dict()
# create an instance of ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner from a dict
provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_from_dict = ProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner.from_dict(provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


