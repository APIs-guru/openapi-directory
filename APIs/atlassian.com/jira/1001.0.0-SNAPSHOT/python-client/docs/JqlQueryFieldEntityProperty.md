# JqlQueryFieldEntityProperty

Details of an entity property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | The object on which the property is set. | 
**key** | **str** | The key of the property. | 
**path** | **str** | The path in the property value to query. | 
**type** | **str** | The type of the property value extraction. Not available if the extraction for the property is not registered on the instance with the [Entity property](https://developer.atlassian.com/cloud/jira/platform/modules/entity-property/) module. | [optional] 

## Example

```python
from openapi_client.models.jql_query_field_entity_property import JqlQueryFieldEntityProperty

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQueryFieldEntityProperty from a JSON string
jql_query_field_entity_property_instance = JqlQueryFieldEntityProperty.from_json(json)
# print the JSON string representation of the object
print(JqlQueryFieldEntityProperty.to_json())

# convert the object into a dict
jql_query_field_entity_property_dict = jql_query_field_entity_property_instance.to_dict()
# create an instance of JqlQueryFieldEntityProperty from a dict
jql_query_field_entity_property_from_dict = JqlQueryFieldEntityProperty.from_dict(jql_query_field_entity_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


