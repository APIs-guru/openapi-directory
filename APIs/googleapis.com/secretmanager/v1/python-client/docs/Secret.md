# Secret

A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Optional. Custom metadata about the secret. Annotations are distinct from various forms of labels. Annotations exist to allow client tools to store their own state information without requiring a database. Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and may have dashes (-), underscores (_), dots (.), and alphanumerics in between these symbols. The total size of annotation keys and values must be less than 16KiB. | [optional] 
**create_time** | **str** | Output only. The time at which the Secret was created. | [optional] [readonly] 
**etag** | **str** | Optional. Etag of the currently stored Secret. | [optional] 
**expire_time** | **str** | Optional. Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input. | [optional] 
**labels** | **Dict[str, str]** | The labels assigned to this Secret. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: &#x60;\\p{Ll}\\p{Lo}{0,62}&#x60; Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: &#x60;[\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}&#x60; No more than 64 labels can be assigned to a given resource. | [optional] 
**name** | **str** | Output only. The resource name of the Secret in the format &#x60;projects/*/secrets/*&#x60;. | [optional] [readonly] 
**replication** | [**Replication**](Replication.md) |  | [optional] 
**rotation** | [**Rotation**](Rotation.md) |  | [optional] 
**topics** | [**List[Topic]**](Topic.md) | Optional. A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions. | [optional] 
**ttl** | **str** | Input only. The TTL for the Secret. | [optional] 
**version_aliases** | **Dict[str, str]** | Optional. Mapping from version alias to version name. A version alias is a string with a maximum length of 63 characters and can contain uppercase and lowercase letters, numerals, and the hyphen (&#x60;-&#x60;) and underscore (&#39;_&#39;) characters. An alias string must start with a letter and cannot be the string &#39;latest&#39; or &#39;NEW&#39;. No more than 50 aliases can be assigned to a given secret. Version-Alias pairs will be viewable via GetSecret and modifiable via UpdateSecret. Access by alias is only be supported on GetSecretVersion and AccessSecretVersion. | [optional] 

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


