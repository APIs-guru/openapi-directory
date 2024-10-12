# DatabasePrincipal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Application id - relevant only for application principal type. | [optional] 
**email** | **str** | Database principal email if exists. | [optional] 
**fqn** | **str** | Database principal fully qualified name. | [optional] 
**name** | **str** | Database principal name. | 
**role** | **str** | Database principal role. | 
**type** | **str** | Database principal type. | 

## Example

```python
from openapi_client.models.database_principal import DatabasePrincipal

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePrincipal from a JSON string
database_principal_instance = DatabasePrincipal.from_json(json)
# print the JSON string representation of the object
print(DatabasePrincipal.to_json())

# convert the object into a dict
database_principal_dict = database_principal_instance.to_dict()
# create an instance of DatabasePrincipal from a dict
database_principal_from_dict = DatabasePrincipal.from_dict(database_principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


