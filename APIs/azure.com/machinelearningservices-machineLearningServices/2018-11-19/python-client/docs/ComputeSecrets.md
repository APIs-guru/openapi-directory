# ComputeSecrets

Secrets related to a Machine Learning compute. Might differ for every type of compute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_type** | [**ComputeType**](ComputeType.md) |  | 

## Example

```python
from openapi_client.models.compute_secrets import ComputeSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeSecrets from a JSON string
compute_secrets_instance = ComputeSecrets.from_json(json)
# print the JSON string representation of the object
print(ComputeSecrets.to_json())

# convert the object into a dict
compute_secrets_dict = compute_secrets_instance.to_dict()
# create an instance of ComputeSecrets from a dict
compute_secrets_from_dict = ComputeSecrets.from_dict(compute_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


