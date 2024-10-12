# KeyAttributes

The attributes of a key managed by the key vault service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_level** | **str** | Reflects the deletion recovery level currently in effect for keys in the current vault. If it contains &#39;Purgeable&#39; the key can be permanently deleted by a privileged user; otherwise, only the system can purge the key, at the end of the retention interval. | [optional] [readonly] 
**created** | **int** | Creation time in UTC. | [optional] [readonly] 
**enabled** | **bool** | Determines whether the object is enabled. | [optional] 
**exp** | **int** | Expiry date in UTC. | [optional] 
**nbf** | **int** | Not before date in UTC. | [optional] 
**updated** | **int** | Last updated time in UTC. | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_attributes import KeyAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of KeyAttributes from a JSON string
key_attributes_instance = KeyAttributes.from_json(json)
# print the JSON string representation of the object
print(KeyAttributes.to_json())

# convert the object into a dict
key_attributes_dict = key_attributes_instance.to_dict()
# create an instance of KeyAttributes from a dict
key_attributes_from_dict = KeyAttributes.from_dict(key_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


