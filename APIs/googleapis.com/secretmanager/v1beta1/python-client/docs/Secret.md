# Secret

A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which the Secret was created. | [optional] [readonly] 
**labels** | **Dict[str, str]** | The labels assigned to this Secret. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: &#x60;\\p{Ll}\\p{Lo}{0,62}&#x60; Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: &#x60;[\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}&#x60; No more than 64 labels can be assigned to a given resource. | [optional] 
**name** | **str** | Output only. The resource name of the Secret in the format &#x60;projects/*/secrets/*&#x60;. | [optional] [readonly] 
**replication** | [**Replication**](Replication.md) |  | [optional] 

## Example

```python
from openapi_client.models.secret import Secret

# TODO update the JSON string below
json = "{}"
# create an instance of Secret from a JSON string
secret_instance = Secret.from_json(json)
# print the JSON string representation of the object
print(Secret.to_json())

# convert the object into a dict
secret_dict = secret_instance.to_dict()
# create an instance of Secret from a dict
secret_from_dict = Secret.from_dict(secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


