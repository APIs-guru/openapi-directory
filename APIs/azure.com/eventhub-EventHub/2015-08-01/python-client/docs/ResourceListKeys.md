# ResourceListKeys

Namespace/EventHub Connection String

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | A string that describes the AuthorizationRule. | [optional] [readonly] 
**primary_connection_string** | **str** | Primary connection string of the created Namespace AuthorizationRule. | [optional] [readonly] 
**primary_key** | **str** | A base64-encoded 256-bit primary key for signing and validating the SAS token. | [optional] [readonly] 
**secondary_connection_string** | **str** | Secondary connection string of the created Namespace AuthorizationRule. | [optional] [readonly] 
**secondary_key** | **str** | A base64-encoded 256-bit primary key for signing and validating the SAS token. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_list_keys import ResourceListKeys

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceListKeys from a JSON string
resource_list_keys_instance = ResourceListKeys.from_json(json)
# print the JSON string representation of the object
print(ResourceListKeys.to_json())

# convert the object into a dict
resource_list_keys_dict = resource_list_keys_instance.to_dict()
# create an instance of ResourceListKeys from a dict
resource_list_keys_from_dict = ResourceListKeys.from_dict(resource_list_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


