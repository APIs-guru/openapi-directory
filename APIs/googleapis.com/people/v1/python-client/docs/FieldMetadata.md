# FieldMetadata

Metadata about a field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **bool** | Output only. True if the field is the primary field for all sources in the person. Each person will have at most one field with &#x60;primary&#x60; set to true. | [optional] [readonly] 
**source** | [**Source**](Source.md) |  | [optional] 
**source_primary** | **bool** | True if the field is the primary field for the source. Each source must have at most one field with &#x60;source_primary&#x60; set to true. | [optional] 
**verified** | **bool** | Output only. True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person. | [optional] [readonly] 

## Example

```python
from openapi_client.models.field_metadata import FieldMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of FieldMetadata from a JSON string
field_metadata_instance = FieldMetadata.from_json(json)
# print the JSON string representation of the object
print(FieldMetadata.to_json())

# convert the object into a dict
field_metadata_dict = field_metadata_instance.to_dict()
# create an instance of FieldMetadata from a dict
field_metadata_from_dict = FieldMetadata.from_dict(field_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


