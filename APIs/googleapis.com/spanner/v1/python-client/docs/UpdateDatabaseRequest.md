# UpdateDatabaseRequest

The request for UpdateDatabase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | [**Database**](Database.md) |  | [optional] 
**update_mask** | **str** | Required. The list of fields to update. Currently, only &#x60;enable_drop_protection&#x60; field can be updated. | [optional] 

## Example

```python
from openapi_client.models.update_database_request import UpdateDatabaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDatabaseRequest from a JSON string
update_database_request_instance = UpdateDatabaseRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDatabaseRequest.to_json())

# convert the object into a dict
update_database_request_dict = update_database_request_instance.to_dict()
# create an instance of UpdateDatabaseRequest from a dict
update_database_request_from_dict = UpdateDatabaseRequest.from_dict(update_database_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


