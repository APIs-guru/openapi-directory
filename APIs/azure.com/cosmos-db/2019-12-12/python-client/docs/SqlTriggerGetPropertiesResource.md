# SqlTriggerGetPropertiesResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body of the Trigger | [optional] 
**id** | **str** | Name of the Cosmos DB SQL trigger | 
**trigger_operation** | **str** | The operation the trigger is associated with | [optional] 
**trigger_type** | **str** | Type of the Trigger | [optional] 
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] [readonly] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] [readonly] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_trigger_get_properties_resource import SqlTriggerGetPropertiesResource

# TODO update the JSON string below
json = "{}"
# create an instance of SqlTriggerGetPropertiesResource from a JSON string
sql_trigger_get_properties_resource_instance = SqlTriggerGetPropertiesResource.from_json(json)
# print the JSON string representation of the object
print(SqlTriggerGetPropertiesResource.to_json())

# convert the object into a dict
sql_trigger_get_properties_resource_dict = sql_trigger_get_properties_resource_instance.to_dict()
# create an instance of SqlTriggerGetPropertiesResource from a dict
sql_trigger_get_properties_resource_from_dict = SqlTriggerGetPropertiesResource.from_dict(sql_trigger_get_properties_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


