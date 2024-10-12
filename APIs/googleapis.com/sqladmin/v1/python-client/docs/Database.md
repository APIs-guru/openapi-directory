# Database

Represents a SQL database on the Cloud SQL instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charset** | **str** | The Cloud SQL charset value. | [optional] 
**collation** | **str** | The Cloud SQL collation value. | [optional] 
**etag** | **str** | This field is deprecated and will be removed from a future version of the API. | [optional] 
**instance** | **str** | The name of the Cloud SQL instance. This does not include the project ID. | [optional] 
**kind** | **str** | This is always &#x60;sql#database&#x60;. | [optional] 
**name** | **str** | The name of the database in the Cloud SQL instance. This does not include the project ID or instance name. | [optional] 
**project** | **str** | The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. | [optional] 
**self_link** | **str** | The URI of this resource. | [optional] 
**sqlserver_database_details** | [**SqlServerDatabaseDetails**](SqlServerDatabaseDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.database import Database

# TODO update the JSON string below
json = "{}"
# create an instance of Database from a JSON string
database_instance = Database.from_json(json)
# print the JSON string representation of the object
print(Database.to_json())

# convert the object into a dict
database_dict = database_instance.to_dict()
# create an instance of Database from a dict
database_from_dict = Database.from_dict(database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


