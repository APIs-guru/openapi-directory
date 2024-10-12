# ConnectorMappingErrorManagement

The error management.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_limit** | **int** | The error limit allowed while importing data. | [optional] 
**error_management_type** | **str** | The type of error management to use for the mapping. | 

## Example

```python
from openapi_client.models.connector_mapping_error_management import ConnectorMappingErrorManagement

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorMappingErrorManagement from a JSON string
connector_mapping_error_management_instance = ConnectorMappingErrorManagement.from_json(json)
# print the JSON string representation of the object
print(ConnectorMappingErrorManagement.to_json())

# convert the object into a dict
connector_mapping_error_management_dict = connector_mapping_error_management_instance.to_dict()
# create an instance of ConnectorMappingErrorManagement from a dict
connector_mapping_error_management_from_dict = ConnectorMappingErrorManagement.from_dict(connector_mapping_error_management_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


