# MigrateMySqlRequest

MySQL migration request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | MigrateMySqlRequest resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migrate_my_sql_request import MigrateMySqlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateMySqlRequest from a JSON string
migrate_my_sql_request_instance = MigrateMySqlRequest.from_json(json)
# print the JSON string representation of the object
print(MigrateMySqlRequest.to_json())

# convert the object into a dict
migrate_my_sql_request_dict = migrate_my_sql_request_instance.to_dict()
# create an instance of MigrateMySqlRequest from a dict
migrate_my_sql_request_from_dict = MigrateMySqlRequest.from_dict(migrate_my_sql_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


