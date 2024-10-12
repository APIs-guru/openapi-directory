# OperationResultProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**friendly_name** | **str** |  | 
**last_modified_time** | **str** |  | [optional] 
**operation_metadata** | [**List[OperationMetadataProperties]**](OperationMetadataProperties.md) |  | 
**state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.operation_result_properties import OperationResultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResultProperties from a JSON string
operation_result_properties_instance = OperationResultProperties.from_json(json)
# print the JSON string representation of the object
print(OperationResultProperties.to_json())

# convert the object into a dict
operation_result_properties_dict = operation_result_properties_instance.to_dict()
# create an instance of OperationResultProperties from a dict
operation_result_properties_from_dict = OperationResultProperties.from_dict(operation_result_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


