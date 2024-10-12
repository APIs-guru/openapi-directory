# Database

Database REST resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the relative URL to get to this REST resource. | [optional] 
**name** | **str** | Gets or sets the name of this REST resource. | [optional] 
**properties** | [**DatabaseProperties**](DatabaseProperties.md) |  | [optional] 
**type** | **str** | Gets the type of this REST resource. | [optional] [readonly] 

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


