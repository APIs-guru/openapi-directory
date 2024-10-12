# SqlTriggerResource

Cosmos DB SQL trigger resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body of the Trigger | [optional] 
**id** | **str** | Name of the Cosmos DB SQL trigger | 
**trigger_operation** | **str** | The operation the trigger is associated with | [optional] 
**trigger_type** | **str** | Type of the Trigger | [optional] 

## Example

```python
from openapi_client.models.sql_trigger_resource import SqlTriggerResource

# TODO update the JSON string below
json = "{}"
# create an instance of SqlTriggerResource from a JSON string
sql_trigger_resource_instance = SqlTriggerResource.from_json(json)
# print the JSON string representation of the object
print(SqlTriggerResource.to_json())

# convert the object into a dict
sql_trigger_resource_dict = sql_trigger_resource_instance.to_dict()
# create an instance of SqlTriggerResource from a dict
sql_trigger_resource_from_dict = SqlTriggerResource.from_dict(sql_trigger_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


