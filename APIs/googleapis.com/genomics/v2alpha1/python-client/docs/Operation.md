# Operation

This resource represents a long-running operation that is the result of a network API call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**done** | **bool** | If the value is &#x60;false&#x60;, it means the operation is still in progress. If &#x60;true&#x60;, the operation is completed, and either &#x60;error&#x60; or &#x60;response&#x60; is available. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**metadata** | **Dict[str, object]** | An OperationMetadata or Metadata object. This will always be returned with the Operation. | [optional] 
**name** | **str** | The server-assigned name, which is only unique within the same service that originally returns it. For example: &#x60;operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw&#x60; | [optional] 
**response** | **Dict[str, object]** | An Empty object. | [optional] 

## Example

```python
from openapi_client.models.operation import Operation

# TODO update the JSON string below
json = "{}"
# create an instance of Operation from a JSON string
operation_instance = Operation.from_json(json)
# print the JSON string representation of the object
print(Operation.to_json())

# convert the object into a dict
operation_dict = operation_instance.to_dict()
# create an instance of Operation from a dict
operation_from_dict = Operation.from_dict(operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


