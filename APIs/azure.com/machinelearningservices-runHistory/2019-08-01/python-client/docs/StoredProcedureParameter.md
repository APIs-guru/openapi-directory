# StoredProcedureParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.stored_procedure_parameter import StoredProcedureParameter

# TODO update the JSON string below
json = "{}"
# create an instance of StoredProcedureParameter from a JSON string
stored_procedure_parameter_instance = StoredProcedureParameter.from_json(json)
# print the JSON string representation of the object
print(StoredProcedureParameter.to_json())

# convert the object into a dict
stored_procedure_parameter_dict = stored_procedure_parameter_instance.to_dict()
# create an instance of StoredProcedureParameter from a dict
stored_procedure_parameter_from_dict = StoredProcedureParameter.from_dict(stored_procedure_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


