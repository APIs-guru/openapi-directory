# ConnectorObjectError

The connector object error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchor** | **str** | The name for the anchor of the object. | [optional] 
**attribute_name** | **str** | The attribute name of the object. | [optional] 
**column_number** | **int** | The column number for the object error. | [optional] 
**connector_id** | **str** | The connector Id. | [optional] 
**dn** | **str** | The distinguished name of the object. | [optional] 
**entry_number** | **int** | The entry number for object error occurred. | [optional] 
**error_code** | **str** | The error code. | [optional] 
**id** | **str** | The error Id. | [optional] 
**line_number** | **int** | The line number for the object error. | [optional] 
**message** | **str** | The message for the object error. | [optional] 
**run_step_result_id** | **str** | The run step result Id. | [optional] 
**server_error_detail** | **str** | The server side error details. | [optional] 
**type** | **str** | The type of error. | [optional] 
**values** | **List[str]** | The value corresponding to attribute name. | [optional] 

## Example

```python
from openapi_client.models.connector_object_error import ConnectorObjectError

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorObjectError from a JSON string
connector_object_error_instance = ConnectorObjectError.from_json(json)
# print the JSON string representation of the object
print(ConnectorObjectError.to_json())

# convert the object into a dict
connector_object_error_dict = connector_object_error_instance.to_dict()
# create an instance of ConnectorObjectError from a dict
connector_object_error_from_dict = ConnectorObjectError.from_dict(connector_object_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


