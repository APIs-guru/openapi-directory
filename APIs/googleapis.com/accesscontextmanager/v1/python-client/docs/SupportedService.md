# SupportedService

`SupportedService` specifies the VPC Service Controls and its properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_on_restricted_vip** | **bool** | True if the service is available on the restricted VIP. Services on the restricted VIP typically either support VPC Service Controls or are core infrastructure services required for the functioning of Google Cloud. | [optional] 
**known_limitations** | **bool** | True if the service is supported with some limitations. Check [documentation](https://cloud.google.com/vpc-service-controls/docs/supported-products) for details. | [optional] 
**name** | **str** | The service name or address of the supported service, such as &#x60;service.googleapis.com&#x60;. | [optional] 
**support_stage** | **str** | The support stage of the service. | [optional] 
**supported_methods** | [**List[MethodSelector]**](MethodSelector.md) | The list of the supported methods. This field exists only in response to GetSupportedService | [optional] 
**title** | **str** | The name of the supported product, such as &#39;Cloud Product API&#39;. | [optional] 

## Example

```python
from openapi_client.models.supported_service import SupportedService

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedService from a JSON string
supported_service_instance = SupportedService.from_json(json)
# print the JSON string representation of the object
print(SupportedService.to_json())

# convert the object into a dict
supported_service_dict = supported_service_instance.to_dict()
# create an instance of SupportedService from a dict
supported_service_from_dict = SupportedService.from_dict(supported_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


