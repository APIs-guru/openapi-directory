# DatabaseUpdate

Represents a database update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DatabaseProperties**](DatabaseProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_update import DatabaseUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseUpdate from a JSON string
database_update_instance = DatabaseUpdate.from_json(json)
# print the JSON string representation of the object
print(DatabaseUpdate.to_json())

# convert the object into a dict
database_update_dict = database_update_instance.to_dict()
# create an instance of DatabaseUpdate from a dict
database_update_from_dict = DatabaseUpdate.from_dict(database_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


