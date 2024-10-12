# ResourceListKeys

Namespace/NotificationHub Connection String

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_connection_string** | **str** | Gets or sets the primaryConnectionString of the created Namespace AuthorizationRule. | [optional] 
**secondary_connection_string** | **str** | Gets or sets the secondaryConnectionString of the created Namespace AuthorizationRule | [optional] 

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


