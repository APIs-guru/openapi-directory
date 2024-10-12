# CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner

Definition of a single resource metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** |  | [optional] 
**availabilities** | [**List[CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerAvailabilitiesInner]**](CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerAvailabilitiesInner.md) |  | [optional] 
**category** | **str** |  | [optional] 
**dimensions** | [**List[CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerDimensionsInner]**](CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInnerDimensionsInner.md) |  | [optional] 
**display_description** | **str** |  | [optional] 
**display_name** | **str** |  | [optional] 
**enable_regional_mdm_account** | **bool** |  | [optional] 
**fill_gap_with_zero** | **bool** |  | [optional] 
**is_internal** | **bool** |  | [optional] 
**metric_filter_pattern** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**source_mdm_account** | **str** |  | [optional] 
**source_mdm_namespace** | **str** |  | [optional] 
**supports_instance_level_aggregation** | **bool** |  | [optional] 
**unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner import CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner from a JSON string
certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_instance = CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner.from_json(json)
# print the JSON string representation of the object
print(CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner.to_json())

# convert the object into a dict
certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_dict = certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_instance.to_dict()
# create an instance of CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner from a dict
certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_from_dict = CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner.from_dict(certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification_metric_specifications_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


