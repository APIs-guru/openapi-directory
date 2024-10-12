# SecretState

Represents the secret state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **datetime** | The secret expiration date. | [optional] 
**rotation_status** | [**SecretRotationStatus**](SecretRotationStatus.md) |  | [optional] 
**status** | [**SecretStatus**](SecretStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.secret_state import SecretState

# TODO update the JSON string below
json = "{}"
# create an instance of SecretState from a JSON string
secret_state_instance = SecretState.from_json(json)
# print the JSON string representation of the object
print(SecretState.to_json())

# convert the object into a dict
secret_state_dict = secret_state_instance.to_dict()
# create an instance of SecretState from a dict
secret_state_from_dict = SecretState.from_dict(secret_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


