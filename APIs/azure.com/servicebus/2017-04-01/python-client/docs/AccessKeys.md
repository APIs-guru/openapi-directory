# AccessKeys

Namespace/ServiceBus Connection String

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias_primary_connection_string** | **str** | Primary connection string of the alias if GEO DR is enabled | [optional] [readonly] 
**alias_secondary_connection_string** | **str** | Secondary  connection string of the alias if GEO DR is enabled | [optional] [readonly] 
**key_name** | **str** | A string that describes the authorization rule. | [optional] [readonly] 
**primary_connection_string** | **str** | Primary connection string of the created namespace authorization rule. | [optional] [readonly] 
**primary_key** | **str** | A base64-encoded 256-bit primary key for signing and validating the SAS token. | [optional] [readonly] 
**secondary_connection_string** | **str** | Secondary connection string of the created namespace authorization rule. | [optional] [readonly] 
**secondary_key** | **str** | A base64-encoded 256-bit primary key for signing and validating the SAS token. | [optional] [readonly] 

## Example

```python
from openapi_client.models.access_keys import AccessKeys

# TODO update the JSON string below
json = "{}"
# create an instance of AccessKeys from a JSON string
access_keys_instance = AccessKeys.from_json(json)
# print the JSON string representation of the object
print(AccessKeys.to_json())

# convert the object into a dict
access_keys_dict = access_keys_instance.to_dict()
# create an instance of AccessKeys from a dict
access_keys_from_dict = AccessKeys.from_dict(access_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


