# FrontDoorCertificateSourceParameters

Parameters required for enabling SSL with Front Door-managed certificates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_type** | **str** | Defines the type of the certificate used for secure connections to a frontendEndpoint | [optional] 

## Example

```python
from openapi_client.models.front_door_certificate_source_parameters import FrontDoorCertificateSourceParameters

# TODO update the JSON string below
json = "{}"
# create an instance of FrontDoorCertificateSourceParameters from a JSON string
front_door_certificate_source_parameters_instance = FrontDoorCertificateSourceParameters.from_json(json)
# print the JSON string representation of the object
print(FrontDoorCertificateSourceParameters.to_json())

# convert the object into a dict
front_door_certificate_source_parameters_dict = front_door_certificate_source_parameters_instance.to_dict()
# create an instance of FrontDoorCertificateSourceParameters from a dict
front_door_certificate_source_parameters_from_dict = FrontDoorCertificateSourceParameters.from_dict(front_door_certificate_source_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


