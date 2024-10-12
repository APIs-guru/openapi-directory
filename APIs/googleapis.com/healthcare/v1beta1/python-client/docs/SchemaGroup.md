# SchemaGroup

An HL7v2 logical group construct.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**choice** | **bool** | True indicates that this is a choice group, meaning that only one of its segments can exist in a given message. | [optional] 
**max_occurs** | **int** | The maximum number of times this group can be repeated. 0 or -1 means unbounded. | [optional] 
**members** | [**List[GroupOrSegment]**](GroupOrSegment.md) | Nested groups and/or segments. | [optional] 
**min_occurs** | **int** | The minimum number of times this group must be present/repeated. | [optional] 
**name** | **str** | The name of this group. For example, \&quot;ORDER_DETAIL\&quot;. | [optional] 

## Example

```python
from openapi_client.models.schema_group import SchemaGroup

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaGroup from a JSON string
schema_group_instance = SchemaGroup.from_json(json)
# print the JSON string representation of the object
print(SchemaGroup.to_json())

# convert the object into a dict
schema_group_dict = schema_group_instance.to_dict()
# create an instance of SchemaGroup from a dict
schema_group_from_dict = SchemaGroup.from_dict(schema_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


