# AppD


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_did** | **str** | Identifier of this MEC application descriptor. This attribute shall be globally unique. See note 1. | 
**app_dns_rule** | [**List[DNSRuleDescriptor]**](DNSRuleDescriptor.md) | Describes DNS rules the MEC application requires. | [optional] 
**app_d_version** | **str** | Identifies the version of the application descriptor. | 
**app_description** | **str** | Human readable description of the MEC application. | 
**app_ext_cpd** | [**List[AppExternalCpd]**](AppExternalCpd.md) | Describes external interface(s) exposed by this MEC application. | [optional] 
**app_feature_optional** | [**List[FeatureDependency]**](FeatureDependency.md) | Describes features a MEC application may use if available. | [optional] 
**app_feature_required** | [**List[FeatureDependency]**](FeatureDependency.md) | Describes features a MEC application requires to run. | [optional] 
**app_info_name** | **str** | Human readable name for the MEC application. | [optional] 
**app_latency** | [**LatencyDescriptor**](LatencyDescriptor.md) |  | [optional] 
**app_name** | **str** | Name to identify the MEC application. | 
**app_provider** | **str** | Provider of the application and of the AppD. | 
**app_service_optional** | [**List[ServiceDependency]**](ServiceDependency.md) | Describes services a MEC application may use if available. | [optional] 
**app_service_produced** | [**List[ServiceDescriptor]**](ServiceDescriptor.md) | Describes services a MEC application is able to produce to the platform or other MEC applications. Only relevant for service-producing apps. | [optional] 
**app_service_required** | [**List[ServiceDependency]**](ServiceDependency.md) | Describes services a MEC application requires to run. | [optional] 
**app_soft_version** | **str** | Identifies the version of software of the MEC application. | 
**app_traffic_rule** | [**List[TrafficRuleDescriptor]**](TrafficRuleDescriptor.md) | Describes traffic rules the MEC application requires. | [optional] 
**change_app_instance_state_op_config** | **str** | NFV | [optional] 
**mec_version** | **List[str]** | Identifies version(s) of MEC system compatible with the MEC application described in this version of the AppD. | 
**sw_image_descriptor** | **str** | Ref NFV | 
**terminate_app_instance_op_config** | **str** | NFV | [optional] 
**transport_dependencies** | [**List[TransportDependency]**](TransportDependency.md) | Transports, if any, that this application requires to be provided by the platform. These transports will be used by the application to deliver services provided by this application. Only relevant for service-producing apps. See note 2. | [optional] 
**virtual_compute_descriptor** | **str** | Ref NFV | 
**virtual_storage_descriptor** | **List[str]** | Defines descriptors of virtual storage resources to be used by the MEC application. | [optional] 

## Example

```python
from openapi_client.models.app_d import AppD

# TODO update the JSON string below
json = "{}"
# create an instance of AppD from a JSON string
app_d_instance = AppD.from_json(json)
# print the JSON string representation of the object
print(AppD.to_json())

# convert the object into a dict
app_d_dict = app_d_instance.to_dict()
# create an instance of AppD from a dict
app_d_from_dict = AppD.from_dict(app_d_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


