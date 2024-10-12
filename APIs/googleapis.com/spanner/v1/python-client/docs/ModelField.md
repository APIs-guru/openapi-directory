# ModelField

Message representing a single field of a struct.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the field. For reads, this is the column name. For SQL queries, it is the column alias (e.g., &#x60;\&quot;Word\&quot;&#x60; in the query &#x60;\&quot;SELECT &#39;hello&#39; AS Word\&quot;&#x60;), or the column name (e.g., &#x60;\&quot;ColName\&quot;&#x60; in the query &#x60;\&quot;SELECT ColName FROM Table\&quot;&#x60;). Some columns might have an empty name (e.g., &#x60;\&quot;SELECT UPPER(ColName)\&quot;&#x60;). Note that a query result can contain multiple fields with the same name. | [optional] 
**type** | [**Type**](Type.md) |  | [optional] 

## Example

```python
from openapi_client.models.model_field import ModelField

# TODO update the JSON string below
json = "{}"
# create an instance of ModelField from a JSON string
model_field_instance = ModelField.from_json(json)
# print the JSON string representation of the object
print(ModelField.to_json())

# convert the object into a dict
model_field_dict = model_field_instance.to_dict()
# create an instance of ModelField from a dict
model_field_from_dict = ModelField.from_dict(model_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


