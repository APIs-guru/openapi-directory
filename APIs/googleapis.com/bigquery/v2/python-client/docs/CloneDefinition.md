# CloneDefinition

Information about base table and clone time of a table clone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_table_reference** | [**TableReference**](TableReference.md) |  | [optional] 
**clone_time** | **datetime** | Required. The time at which the base table was cloned. This value is reported in the JSON response using RFC3339 format. | [optional] 

## Example

```python
from openapi_client.models.clone_definition import CloneDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of CloneDefinition from a JSON string
clone_definition_instance = CloneDefinition.from_json(json)
# print the JSON string representation of the object
print(CloneDefinition.to_json())

# convert the object into a dict
clone_definition_dict = clone_definition_instance.to_dict()
# create an instance of CloneDefinition from a dict
clone_definition_from_dict = CloneDefinition.from_dict(clone_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


