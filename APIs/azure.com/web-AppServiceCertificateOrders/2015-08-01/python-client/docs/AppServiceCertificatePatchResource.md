# AppServiceCertificatePatchResource

Key Vault container ARM resource for a certificate that is purchased through Azure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppServiceCertificate**](AppServiceCertificate.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_certificate_patch_resource import AppServiceCertificatePatchResource

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceCertificatePatchResource from a JSON string
app_service_certificate_patch_resource_instance = AppServiceCertificatePatchResource.from_json(json)
# print the JSON string representation of the object
print(AppServiceCertificatePatchResource.to_json())

# convert the object into a dict
app_service_certificate_patch_resource_dict = app_service_certificate_patch_resource_instance.to_dict()
# create an instance of AppServiceCertificatePatchResource from a dict
app_service_certificate_patch_resource_from_dict = AppServiceCertificatePatchResource.from_dict(app_service_certificate_patch_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


