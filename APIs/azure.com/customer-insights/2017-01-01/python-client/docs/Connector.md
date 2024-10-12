# Connector

Properties of connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_id** | **int** | ID of the connector. | [optional] [readonly] 
**connector_name** | **str** | Name of the connector. | [optional] 
**connector_properties** | **Dict[str, object]** | The connector properties. | 
**connector_type** | [**ConnectorType**](ConnectorType.md) |  | 
**created** | **datetime** | The created time. | [optional] [readonly] 
**description** | **str** | Description of the connector. | [optional] 
**display_name** | **str** | Display name of the connector. | [optional] 
**is_internal** | **bool** | If this is an internal connector. | [optional] 
**last_modified** | **datetime** | The last modified time. | [optional] [readonly] 
**state** | **str** | State of connector. | [optional] [readonly] 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector import Connector

# TODO update the JSON string below
json = "{}"
# create an instance of Connector from a JSON string
connector_instance = Connector.from_json(json)
# print the JSON string representation of the object
print(Connector.to_json())

# convert the object into a dict
connector_dict = connector_instance.to_dict()
# create an instance of Connector from a dict
connector_from_dict = Connector.from_dict(connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


