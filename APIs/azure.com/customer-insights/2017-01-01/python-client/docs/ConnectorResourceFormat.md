# ConnectorResourceFormat

The connector resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Connector**](Connector.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector_resource_format import ConnectorResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorResourceFormat from a JSON string
connector_resource_format_instance = ConnectorResourceFormat.from_json(json)
# print the JSON string representation of the object
print(ConnectorResourceFormat.to_json())

# convert the object into a dict
connector_resource_format_dict = connector_resource_format_instance.to_dict()
# create an instance of ConnectorResourceFormat from a dict
connector_resource_format_from_dict = ConnectorResourceFormat.from_dict(connector_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


