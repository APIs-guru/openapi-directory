# OperationMetadataProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.operation_metadata_properties import OperationMetadataProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetadataProperties from a JSON string
operation_metadata_properties_instance = OperationMetadataProperties.from_json(json)
# print the JSON string representation of the object
print(OperationMetadataProperties.to_json())

# convert the object into a dict
operation_metadata_properties_dict = operation_metadata_properties_instance.to_dict()
# create an instance of OperationMetadataProperties from a dict
operation_metadata_properties_from_dict = OperationMetadataProperties.from_dict(operation_metadata_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


