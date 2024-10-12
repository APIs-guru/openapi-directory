# X12SchemaReference

The X12 schema reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** | The message id. | 
**schema_name** | **str** | The schema name. | 
**schema_version** | **str** | The schema version. | 
**sender_application_id** | **str** | The sender application id. | [optional] 

## Example

```python
from openapi_client.models.x12_schema_reference import X12SchemaReference

# TODO update the JSON string below
json = "{}"
# create an instance of X12SchemaReference from a JSON string
x12_schema_reference_instance = X12SchemaReference.from_json(json)
# print the JSON string representation of the object
print(X12SchemaReference.to_json())

# convert the object into a dict
x12_schema_reference_dict = x12_schema_reference_instance.to_dict()
# create an instance of X12SchemaReference from a dict
x12_schema_reference_from_dict = X12SchemaReference.from_dict(x12_schema_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


