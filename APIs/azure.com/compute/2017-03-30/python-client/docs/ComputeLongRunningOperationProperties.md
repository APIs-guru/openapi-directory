# ComputeLongRunningOperationProperties

Compute-specific operation properties, including output

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output** | **object** | Operation output data (raw JSON) | [optional] 

## Example

```python
from openapi_client.models.compute_long_running_operation_properties import ComputeLongRunningOperationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeLongRunningOperationProperties from a JSON string
compute_long_running_operation_properties_instance = ComputeLongRunningOperationProperties.from_json(json)
# print the JSON string representation of the object
print(ComputeLongRunningOperationProperties.to_json())

# convert the object into a dict
compute_long_running_operation_properties_dict = compute_long_running_operation_properties_instance.to_dict()
# create an instance of ComputeLongRunningOperationProperties from a dict
compute_long_running_operation_properties_from_dict = ComputeLongRunningOperationProperties.from_dict(compute_long_running_operation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


