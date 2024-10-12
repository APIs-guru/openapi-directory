# ConnectionStringDictionary

String dictionary resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Dict[str, ConnStringValueTypePair]**](ConnStringValueTypePair.md) | Connection strings. | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_string_dictionary import ConnectionStringDictionary

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionStringDictionary from a JSON string
connection_string_dictionary_instance = ConnectionStringDictionary.from_json(json)
# print the JSON string representation of the object
print(ConnectionStringDictionary.to_json())

# convert the object into a dict
connection_string_dictionary_dict = connection_string_dictionary_instance.to_dict()
# create an instance of ConnectionStringDictionary from a dict
connection_string_dictionary_from_dict = ConnectionStringDictionary.from_dict(connection_string_dictionary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


