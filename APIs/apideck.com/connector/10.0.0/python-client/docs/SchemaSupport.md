# SchemaSupport

When a connector has schema_support, a call can be made to retrieve a json schema that describes a downstream resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supported** | **bool** | Can a resource schema be retrieved for this connector? | [optional] 

## Example

```python
from openapi_client.models.schema_support import SchemaSupport

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaSupport from a JSON string
schema_support_instance = SchemaSupport.from_json(json)
# print the JSON string representation of the object
print(SchemaSupport.to_json())

# convert the object into a dict
schema_support_dict = schema_support_instance.to_dict()
# create an instance of SchemaSupport from a dict
schema_support_from_dict = SchemaSupport.from_dict(schema_support_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


