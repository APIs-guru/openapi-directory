# NodeSettings

Settings for Node client libraries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**CommonLanguageSettings**](CommonLanguageSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_settings import NodeSettings

# TODO update the JSON string below
json = "{}"
# create an instance of NodeSettings from a JSON string
node_settings_instance = NodeSettings.from_json(json)
# print the JSON string representation of the object
print(NodeSettings.to_json())

# convert the object into a dict
node_settings_dict = node_settings_instance.to_dict()
# create an instance of NodeSettings from a dict
node_settings_from_dict = NodeSettings.from_dict(node_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


