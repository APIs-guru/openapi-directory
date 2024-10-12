# OperationImpact

The impact of an operation, both in absolute and relative terms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_value_absolute** | **float** | The absolute impact to dimension. | [optional] [readonly] 
**change_value_relative** | **float** | The relative impact to dimension (null if not applicable) | [optional] [readonly] 
**name** | **str** | The name of the impact dimension. | [optional] [readonly] 
**unit** | **str** | The unit in which estimated impact to dimension is measured. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_impact import OperationImpact

# TODO update the JSON string below
json = "{}"
# create an instance of OperationImpact from a JSON string
operation_impact_instance = OperationImpact.from_json(json)
# print the JSON string representation of the object
print(OperationImpact.to_json())

# convert the object into a dict
operation_impact_dict = operation_impact_instance.to_dict()
# create an instance of OperationImpact from a dict
operation_impact_from_dict = OperationImpact.from_dict(operation_impact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


