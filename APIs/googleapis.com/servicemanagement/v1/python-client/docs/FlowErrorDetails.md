# FlowErrorDetails

Encapsulation of flow-specific error details for debugging. Used as a details field on an error Status, not intended for external use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception_type** | **str** | The type of exception (as a class name). | [optional] 
**flow_step_id** | **str** | The step that failed. | [optional] 

## Example

```python
from openapi_client.models.flow_error_details import FlowErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FlowErrorDetails from a JSON string
flow_error_details_instance = FlowErrorDetails.from_json(json)
# print the JSON string representation of the object
print(FlowErrorDetails.to_json())

# convert the object into a dict
flow_error_details_dict = flow_error_details_instance.to_dict()
# create an instance of FlowErrorDetails from a dict
flow_error_details_from_dict = FlowErrorDetails.from_dict(flow_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


