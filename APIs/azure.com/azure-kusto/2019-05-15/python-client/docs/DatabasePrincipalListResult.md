# DatabasePrincipalListResult

The list Kusto database principals operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DatabasePrincipal]**](DatabasePrincipal.md) | The list of Kusto database principals. | [optional] 

## Example

```python
from openapi_client.models.database_principal_list_result import DatabasePrincipalListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePrincipalListResult from a JSON string
database_principal_list_result_instance = DatabasePrincipalListResult.from_json(json)
# print the JSON string representation of the object
print(DatabasePrincipalListResult.to_json())

# convert the object into a dict
database_principal_list_result_dict = database_principal_list_result_instance.to_dict()
# create an instance of DatabasePrincipalListResult from a dict
database_principal_list_result_from_dict = DatabasePrincipalListResult.from_dict(database_principal_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


