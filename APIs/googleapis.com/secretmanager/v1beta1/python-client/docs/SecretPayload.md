# SecretPayload

A secret payload resource in the Secret Manager API. This contains the sensitive secret data that is associated with a SecretVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | The secret data. Must be no larger than 64KiB. | [optional] 

## Example

```python
from openapi_client.models.secret_payload import SecretPayload

# TODO update the JSON string below
json = "{}"
# create an instance of SecretPayload from a JSON string
secret_payload_instance = SecretPayload.from_json(json)
# print the JSON string representation of the object
print(SecretPayload.to_json())

# convert the object into a dict
secret_payload_dict = secret_payload_instance.to_dict()
# create an instance of SecretPayload from a dict
secret_payload_from_dict = SecretPayload.from_dict(secret_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


