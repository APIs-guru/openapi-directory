# SecretVersion

A secret version resource in the Secret Manager API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which the SecretVersion was created. | [optional] [readonly] 
**destroy_time** | **str** | Output only. The time this SecretVersion was destroyed. Only present if state is DESTROYED. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the SecretVersion in the format &#x60;projects/*/secrets/*/versions/*&#x60;. SecretVersion IDs in a Secret start at 1 and are incremented for each subsequent version of the secret. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the SecretVersion. | [optional] [readonly] 

## Example

```python
from openapi_client.models.secret_version import SecretVersion

# TODO update the JSON string below
json = "{}"
# create an instance of SecretVersion from a JSON string
secret_version_instance = SecretVersion.from_json(json)
# print the JSON string representation of the object
print(SecretVersion.to_json())

# convert the object into a dict
secret_version_dict = secret_version_instance.to_dict()
# create an instance of SecretVersion from a dict
secret_version_from_dict = SecretVersion.from_dict(secret_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


