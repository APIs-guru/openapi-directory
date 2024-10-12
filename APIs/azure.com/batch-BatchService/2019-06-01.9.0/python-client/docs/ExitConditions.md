# ExitConditions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | [**ExitOptions**](ExitOptions.md) |  | [optional] 
**exit_code_ranges** | [**List[ExitCodeRangeMapping]**](ExitCodeRangeMapping.md) |  | [optional] 
**exit_codes** | [**List[ExitCodeMapping]**](ExitCodeMapping.md) |  | [optional] 
**file_upload_error** | [**ExitOptions**](ExitOptions.md) |  | [optional] 
**pre_processing_error** | [**ExitOptions**](ExitOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.exit_conditions import ExitConditions

# TODO update the JSON string below
json = "{}"
# create an instance of ExitConditions from a JSON string
exit_conditions_instance = ExitConditions.from_json(json)
# print the JSON string representation of the object
print(ExitConditions.to_json())

# convert the object into a dict
exit_conditions_dict = exit_conditions_instance.to_dict()
# create an instance of ExitConditions from a dict
exit_conditions_from_dict = ExitConditions.from_dict(exit_conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


