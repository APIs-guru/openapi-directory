# Connection

Configuration parameters to establish connection with an external data source, except the credential attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_sql** | [**CloudSqlProperties**](CloudSqlProperties.md) |  | [optional] 
**creation_time** | **str** | Output only. The creation timestamp of the connection. | [optional] [readonly] 
**description** | **str** | User provided description. | [optional] 
**friendly_name** | **str** | User provided display name for the connection. | [optional] 
**has_credential** | **bool** | Output only. True, if credential is configured for this connection. | [optional] [readonly] 
**last_modified_time** | **str** | Output only. The last update timestamp of the connection. | [optional] [readonly] 
**name** | **str** | The resource name of the connection in the form of: &#x60;projects/{project_id}/locations/{location_id}/connections/{connection_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.connection import Connection

# TODO update the JSON string below
json = "{}"
# create an instance of Connection from a JSON string
connection_instance = Connection.from_json(json)
# print the JSON string representation of the object
print(Connection.to_json())

# convert the object into a dict
connection_dict = connection_instance.to_dict()
# create an instance of Connection from a dict
connection_from_dict = Connection.from_dict(connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


