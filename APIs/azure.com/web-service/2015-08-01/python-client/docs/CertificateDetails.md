# CertificateDetails

Certificate Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.certificate_details import CertificateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateDetails from a JSON string
certificate_details_instance = CertificateDetails.from_json(json)
# print the JSON string representation of the object
print(CertificateDetails.to_json())

# convert the object into a dict
certificate_details_dict = certificate_details_instance.to_dict()
# create an instance of CertificateDetails from a dict
certificate_details_from_dict = CertificateDetails.from_dict(certificate_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


