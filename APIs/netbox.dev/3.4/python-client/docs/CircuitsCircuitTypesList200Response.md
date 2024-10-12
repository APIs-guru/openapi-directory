# CircuitsCircuitTypesList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[CircuitType]**](CircuitType.md) |  | 

## Example

```python
from openapi_client.models.circuits_circuit_types_list200_response import CircuitsCircuitTypesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CircuitsCircuitTypesList200Response from a JSON string
circuits_circuit_types_list200_response_instance = CircuitsCircuitTypesList200Response.from_json(json)
# print the JSON string representation of the object
print(CircuitsCircuitTypesList200Response.to_json())

# convert the object into a dict
circuits_circuit_types_list200_response_dict = circuits_circuit_types_list200_response_instance.to_dict()
# create an instance of CircuitsCircuitTypesList200Response from a dict
circuits_circuit_types_list200_response_from_dict = CircuitsCircuitTypesList200Response.from_dict(circuits_circuit_types_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


