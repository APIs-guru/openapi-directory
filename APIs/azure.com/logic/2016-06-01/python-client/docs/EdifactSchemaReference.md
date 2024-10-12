# EdifactSchemaReference

The Edifact schema reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**association_assigned_code** | **str** | The association assigned code. | [optional] 
**message_id** | **str** | The message id. | 
**message_release** | **str** | The message release version. | 
**message_version** | **str** | The message version. | 
**schema_name** | **str** | The schema name. | 
**sender_application_id** | **str** | The sender application id. | [optional] 
**sender_application_qualifier** | **str** | The sender application qualifier. | [optional] 

## Example

```python
from openapi_client.models.edifact_schema_reference import EdifactSchemaReference

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactSchemaReference from a JSON string
edifact_schema_reference_instance = EdifactSchemaReference.from_json(json)
# print the JSON string representation of the object
print(EdifactSchemaReference.to_json())

# convert the object into a dict
edifact_schema_reference_dict = edifact_schema_reference_instance.to_dict()
# create an instance of EdifactSchemaReference from a dict
edifact_schema_reference_from_dict = EdifactSchemaReference.from_dict(edifact_schema_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


