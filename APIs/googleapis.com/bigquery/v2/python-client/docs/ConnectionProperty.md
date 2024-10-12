# ConnectionProperty

A connection-level property to customize query behavior. Under JDBC, these correspond directly to connection properties passed to the DriverManager. Under ODBC, these correspond to properties in the connection string. Currently supported connection properties: * **dataset_project_id**: represents the default project for datasets that are used in the query. Setting the system variable `@@dataset_project_id` achieves the same behavior. For more information about system variables, see: https://cloud.google.com/bigquery/docs/reference/system-variables * **time_zone**: represents the default timezone used to run the query. * **session_id**: associates the query with a given session. * **query_label**: associates the query with a given job label. If set, all subsequent queries in a script or session will have this label. For the format in which a you can specify a query label, see labels in the JobConfiguration resource type: https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfiguration Additional properties are allowed, but ignored. Specifying multiple connection properties with the same key returns an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the property to set. | [optional] 
**value** | **str** | The value of the property to set. | [optional] 

## Example

```python
from openapi_client.models.connection_property import ConnectionProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionProperty from a JSON string
connection_property_instance = ConnectionProperty.from_json(json)
# print the JSON string representation of the object
print(ConnectionProperty.to_json())

# convert the object into a dict
connection_property_dict = connection_property_instance.to_dict()
# create an instance of ConnectionProperty from a dict
connection_property_from_dict = ConnectionProperty.from_dict(connection_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


