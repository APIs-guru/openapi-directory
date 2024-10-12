# StreamingComputationConfig

Configuration information for a single streaming computation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computation_id** | **str** | Unique identifier for this computation. | [optional] 
**instructions** | [**List[ParallelInstruction]**](ParallelInstruction.md) | Instructions that comprise the computation. | [optional] 
**stage_name** | **str** | Stage name of this computation. | [optional] 
**system_name** | **str** | System defined name for this computation. | [optional] 
**transform_user_name_to_state_family** | **Dict[str, str]** | Map from user name of stateful transforms in this stage to their state family. | [optional] 

## Example

```python
from openapi_client.models.streaming_computation_config import StreamingComputationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingComputationConfig from a JSON string
streaming_computation_config_instance = StreamingComputationConfig.from_json(json)
# print the JSON string representation of the object
print(StreamingComputationConfig.to_json())

# convert the object into a dict
streaming_computation_config_dict = streaming_computation_config_instance.to_dict()
# create an instance of StreamingComputationConfig from a dict
streaming_computation_config_from_dict = StreamingComputationConfig.from_dict(streaming_computation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


