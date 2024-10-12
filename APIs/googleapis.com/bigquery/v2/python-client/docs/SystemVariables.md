# SystemVariables

System variables given to a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**types** | [**Dict[str, StandardSqlDataType]**](StandardSqlDataType.md) | Output only. Data type for each system variable. | [optional] [readonly] 
**values** | **Dict[str, object]** | Output only. Value for each system variable. | [optional] [readonly] 

## Example

```python
from openapi_client.models.system_variables import SystemVariables

# TODO update the JSON string below
json = "{}"
# create an instance of SystemVariables from a JSON string
system_variables_instance = SystemVariables.from_json(json)
# print the JSON string representation of the object
print(SystemVariables.to_json())

# convert the object into a dict
system_variables_dict = system_variables_instance.to_dict()
# create an instance of SystemVariables from a dict
system_variables_from_dict = SystemVariables.from_dict(system_variables_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


