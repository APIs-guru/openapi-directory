# CertificatePatchResource

ARM resource for a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | CertificatePatchResource resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_patch_resource import CertificatePatchResource

# TODO update the JSON string below
json = "{}"
# create an instance of CertificatePatchResource from a JSON string
certificate_patch_resource_instance = CertificatePatchResource.from_json(json)
# print the JSON string representation of the object
print(CertificatePatchResource.to_json())

# convert the object into a dict
certificate_patch_resource_dict = certificate_patch_resource_instance.to_dict()
# create an instance of CertificatePatchResource from a dict
certificate_patch_resource_from_dict = CertificatePatchResource.from_dict(certificate_patch_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


