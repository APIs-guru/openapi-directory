# CircuitsCircuitTerminationsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[CircuitTermination]**](CircuitTermination.md) |  | 

## Example

```python
from openapi_client.models.circuits_circuit_terminations_list200_response import CircuitsCircuitTerminationsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CircuitsCircuitTerminationsList200Response from a JSON string
circuits_circuit_terminations_list200_response_instance = CircuitsCircuitTerminationsList200Response.from_json(json)
# print the JSON string representation of the object
print(CircuitsCircuitTerminationsList200Response.to_json())

# convert the object into a dict
circuits_circuit_terminations_list200_response_dict = circuits_circuit_terminations_list200_response_instance.to_dict()
# create an instance of CircuitsCircuitTerminationsList200Response from a dict
circuits_circuit_terminations_list200_response_from_dict = CircuitsCircuitTerminationsList200Response.from_dict(circuits_circuit_terminations_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


