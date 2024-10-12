# ConnectorMappingCompleteOperation

The complete operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_operation_type** | **str** | The type of completion operation. | [optional] 
**destination_folder** | **str** | The destination folder where files will be moved to once the import is done. | [optional] 

## Example

```python
from openapi_client.models.connector_mapping_complete_operation import ConnectorMappingCompleteOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorMappingCompleteOperation from a JSON string
connector_mapping_complete_operation_instance = ConnectorMappingCompleteOperation.from_json(json)
# print the JSON string representation of the object
print(ConnectorMappingCompleteOperation.to_json())

# convert the object into a dict
connector_mapping_complete_operation_dict = connector_mapping_complete_operation_instance.to_dict()
# create an instance of ConnectorMappingCompleteOperation from a dict
connector_mapping_complete_operation_from_dict = ConnectorMappingCompleteOperation.from_dict(connector_mapping_complete_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


