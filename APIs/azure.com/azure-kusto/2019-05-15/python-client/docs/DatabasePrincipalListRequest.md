# DatabasePrincipalListRequest

The list Kusto database principals operation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DatabasePrincipal]**](DatabasePrincipal.md) | The list of Kusto database principals. | [optional] 

## Example

```python
from openapi_client.models.database_principal_list_request import DatabasePrincipalListRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePrincipalListRequest from a JSON string
database_principal_list_request_instance = DatabasePrincipalListRequest.from_json(json)
# print the JSON string representation of the object
print(DatabasePrincipalListRequest.to_json())

# convert the object into a dict
database_principal_list_request_dict = database_principal_list_request_instance.to_dict()
# create an instance of DatabasePrincipalListRequest from a dict
database_principal_list_request_from_dict = DatabasePrincipalListRequest.from_dict(database_principal_list_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


