# EphemeralIdRegistrationParams

Information a client needs to provision and register beacons that broadcast Eddystone-EID format beacon IDs, using Elliptic curve Diffie-Hellman key exchange. See [the Eddystone specification](https://github.com/google/eddystone/tree/master/eddystone-eid) at GitHub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_rotation_period_exponent** | **int** | Indicates the maximum rotation period supported by the service. See EddystoneEidRegistration.rotation_period_exponent | [optional] 
**min_rotation_period_exponent** | **int** | Indicates the minimum rotation period supported by the service. See EddystoneEidRegistration.rotation_period_exponent | [optional] 
**service_ecdh_public_key** | **bytearray** | The beacon service&#39;s public key for use by a beacon to derive its Identity Key using Elliptic Curve Diffie-Hellman key exchange. | [optional] 

## Example

```python
from openapi_client.models.ephemeral_id_registration_params import EphemeralIdRegistrationParams

# TODO update the JSON string below
json = "{}"
# create an instance of EphemeralIdRegistrationParams from a JSON string
ephemeral_id_registration_params_instance = EphemeralIdRegistrationParams.from_json(json)
# print the JSON string representation of the object
print(EphemeralIdRegistrationParams.to_json())

# convert the object into a dict
ephemeral_id_registration_params_dict = ephemeral_id_registration_params_instance.to_dict()
# create an instance of EphemeralIdRegistrationParams from a dict
ephemeral_id_registration_params_from_dict = EphemeralIdRegistrationParams.from_dict(ephemeral_id_registration_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


