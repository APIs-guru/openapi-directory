# SecretAttributes

The secret management attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_level** | **str** | Reflects the deletion recovery level currently in effect for secrets in the current vault. If it contains &#39;Purgeable&#39;, the secret can be permanently deleted by a privileged user; otherwise, only the system can purge the secret, at the end of the retention interval. | [optional] [readonly] 
**created** | **int** | Creation time in UTC. | [optional] [readonly] 
**enabled** | **bool** | Determines whether the object is enabled. | [optional] 
**exp** | **int** | Expiry date in UTC. | [optional] 
**nbf** | **int** | Not before date in UTC. | [optional] 
**updated** | **int** | Last updated time in UTC. | [optional] [readonly] 

## Example

```python
from openapi_client.models.secret_attributes import SecretAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of SecretAttributes from a JSON string
secret_attributes_instance = SecretAttributes.from_json(json)
# print the JSON string representation of the object
print(SecretAttributes.to_json())

# convert the object into a dict
secret_attributes_dict = secret_attributes_instance.to_dict()
# create an instance of SecretAttributes from a dict
secret_attributes_from_dict = SecretAttributes.from_dict(secret_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


