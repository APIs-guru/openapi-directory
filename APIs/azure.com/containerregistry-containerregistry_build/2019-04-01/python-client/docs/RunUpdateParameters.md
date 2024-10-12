# RunUpdateParameters

The set of run properties that can be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_archive_enabled** | **bool** | The value that indicates whether archiving is enabled or not. | [optional] 

## Example

```python
from openapi_client.models.run_update_parameters import RunUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RunUpdateParameters from a JSON string
run_update_parameters_instance = RunUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(RunUpdateParameters.to_json())

# convert the object into a dict
run_update_parameters_dict = run_update_parameters_instance.to_dict()
# create an instance of RunUpdateParameters from a dict
run_update_parameters_from_dict = RunUpdateParameters.from_dict(run_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


