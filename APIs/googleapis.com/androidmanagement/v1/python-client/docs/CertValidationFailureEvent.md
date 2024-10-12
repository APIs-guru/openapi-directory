# CertValidationFailureEvent

An X.509v3 certificate failed to validate, currently this validation is performed on the Wi-FI access point and failure may be due to a mismatch upon server certificate validation. However it may in the future include other validation events of an X.509v3 certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_reason** | **str** | The reason why certification validation failed. | [optional] 

## Example

```python
from openapi_client.models.cert_validation_failure_event import CertValidationFailureEvent

# TODO update the JSON string below
json = "{}"
# create an instance of CertValidationFailureEvent from a JSON string
cert_validation_failure_event_instance = CertValidationFailureEvent.from_json(json)
# print the JSON string representation of the object
print(CertValidationFailureEvent.to_json())

# convert the object into a dict
cert_validation_failure_event_dict = cert_validation_failure_event_instance.to_dict()
# create an instance of CertValidationFailureEvent from a dict
cert_validation_failure_event_from_dict = CertValidationFailureEvent.from_dict(cert_validation_failure_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


