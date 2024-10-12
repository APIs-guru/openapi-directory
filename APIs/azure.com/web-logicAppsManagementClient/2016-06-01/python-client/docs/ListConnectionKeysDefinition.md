# ListConnectionKeysDefinition

List connection keys

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**etag** | **str** | Resource ETag | [optional] 
**id** | **str** | Resource id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_connection_keys_definition import ListConnectionKeysDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ListConnectionKeysDefinition from a JSON string
list_connection_keys_definition_instance = ListConnectionKeysDefinition.from_json(json)
# print the JSON string representation of the object
print(ListConnectionKeysDefinition.to_json())

# convert the object into a dict
list_connection_keys_definition_dict = list_connection_keys_definition_instance.to_dict()
# create an instance of ListConnectionKeysDefinition from a dict
list_connection_keys_definition_from_dict = ListConnectionKeysDefinition.from_dict(list_connection_keys_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


