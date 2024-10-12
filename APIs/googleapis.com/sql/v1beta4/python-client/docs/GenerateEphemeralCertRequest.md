# GenerateEphemeralCertRequest

Ephemeral certificate creation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | Optional. Access token to include in the signed certificate. | [optional] 
**public_key** | **str** | PEM encoded public key to include in the signed certificate. | [optional] 
**read_time** | **str** | Optional. Optional snapshot read timestamp to trade freshness for performance. | [optional] 
**valid_duration** | **str** | Optional. If set, it will contain the cert valid duration. | [optional] 

## Example

```python
from openapi_client.models.generate_ephemeral_cert_request import GenerateEphemeralCertRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateEphemeralCertRequest from a JSON string
generate_ephemeral_cert_request_instance = GenerateEphemeralCertRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateEphemeralCertRequest.to_json())

# convert the object into a dict
generate_ephemeral_cert_request_dict = generate_ephemeral_cert_request_instance.to_dict()
# create an instance of GenerateEphemeralCertRequest from a dict
generate_ephemeral_cert_request_from_dict = GenerateEphemeralCertRequest.from_dict(generate_ephemeral_cert_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


