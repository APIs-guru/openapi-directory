# Certificate

A Certificate that can be installed on Compute Nodes and can be used to authenticate operations on the machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete_certificate_error** | [**DeleteCertificateError**](DeleteCertificateError.md) |  | [optional] 
**previous_state** | [**CertificateState**](CertificateState.md) |  | [optional] 
**previous_state_transition_time** | **datetime** | This property is not set if the Certificate is in its initial Active state. | [optional] 
**public_data** | **str** |  | [optional] 
**state** | [**CertificateState**](CertificateState.md) |  | [optional] 
**state_transition_time** | **datetime** |  | [optional] 
**thumbprint** | **str** |  | [optional] 
**thumbprint_algorithm** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

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


