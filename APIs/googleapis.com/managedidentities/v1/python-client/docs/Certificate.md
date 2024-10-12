# Certificate

Certificate used to configure LDAPS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | The certificate expire time. | [optional] 
**issuing_certificate** | [**Certificate**](Certificate.md) |  | [optional] 
**subject** | **str** | The certificate subject. | [optional] 
**subject_alternative_name** | **List[str]** | The additional hostnames for the domain. | [optional] 
**thumbprint** | **str** | The certificate thumbprint which uniquely identifies the certificate. | [optional] 

## Example

```python
from openapi_client.models.certificate import Certificate

# TODO update the JSON string below
json = "{}"
# create an instance of Certificate from a JSON string
certificate_instance = Certificate.from_json(json)
# print the JSON string representation of the object
print(Certificate.to_json())

# convert the object into a dict
certificate_dict = certificate_instance.to_dict()
# create an instance of Certificate from a dict
certificate_from_dict = Certificate.from_dict(certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


