# DatabaseCheckNameRequest

The result returned from a database check name availability request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Database name. | 
**type** | **str** | The type of resource, Microsoft.Kusto/clusters/databases. | 

## Example

```python
from openapi_client.models.database_check_name_request import DatabaseCheckNameRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseCheckNameRequest from a JSON string
database_check_name_request_instance = DatabaseCheckNameRequest.from_json(json)
# print the JSON string representation of the object
print(DatabaseCheckNameRequest.to_json())

# convert the object into a dict
database_check_name_request_dict = database_check_name_request_instance.to_dict()
# create an instance of DatabaseCheckNameRequest from a dict
database_check_name_request_from_dict = DatabaseCheckNameRequest.from_dict(database_check_name_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


