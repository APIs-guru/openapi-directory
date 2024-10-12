# ExitCodeMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**exit_options** | [**ExitOptions**](ExitOptions.md) |  | 

## Example

```python
from openapi_client.models.exit_code_mapping import ExitCodeMapping

# TODO update the JSON string below
json = "{}"
# create an instance of ExitCodeMapping from a JSON string
exit_code_mapping_instance = ExitCodeMapping.from_json(json)
# print the JSON string representation of the object
print(ExitCodeMapping.to_json())

# convert the object into a dict
exit_code_mapping_dict = exit_code_mapping_instance.to_dict()
# create an instance of ExitCodeMapping from a dict
exit_code_mapping_from_dict = ExitCodeMapping.from_dict(exit_code_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


