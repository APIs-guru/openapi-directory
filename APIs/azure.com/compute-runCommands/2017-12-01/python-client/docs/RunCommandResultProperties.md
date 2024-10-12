# RunCommandResultProperties

Compute-specific operation properties, including output

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output** | **object** | Operation output data (raw JSON) | [optional] 

## Example

```python
from openapi_client.models.run_command_result_properties import RunCommandResultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RunCommandResultProperties from a JSON string
run_command_result_properties_instance = RunCommandResultProperties.from_json(json)
# print the JSON string representation of the object
print(RunCommandResultProperties.to_json())

# convert the object into a dict
run_command_result_properties_dict = run_command_result_properties_instance.to_dict()
# create an instance of RunCommandResultProperties from a dict
run_command_result_properties_from_dict = RunCommandResultProperties.from_dict(run_command_result_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


