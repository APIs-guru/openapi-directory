# DatabaseInstance

Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_url** | **str** | Output only. Output Only. The globally unique hostname of the database. | [optional] [readonly] 
**name** | **str** | The fully qualified resource name of the database instance, in the form: &#x60;projects/{project-number}/locations/{location-id}/instances/{database-id}&#x60;. | [optional] 
**project** | **str** | Output only. The resource name of the project this instance belongs to. For example: &#x60;projects/{project-number}&#x60;. | [optional] [readonly] 
**state** | **str** | Output only. The database&#39;s lifecycle state. Read-only. | [optional] [readonly] 
**type** | **str** | Immutable. The database instance type. On creation only USER_DATABASE is allowed, which is also the default when omitted. | [optional] 

## Example

```python
from openapi_client.models.database_instance import DatabaseInstance

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseInstance from a JSON string
database_instance_instance = DatabaseInstance.from_json(json)
# print the JSON string representation of the object
print(DatabaseInstance.to_json())

# convert the object into a dict
database_instance_dict = database_instance_instance.to_dict()
# create an instance of DatabaseInstance from a dict
database_instance_from_dict = DatabaseInstance.from_dict(database_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


