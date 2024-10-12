# ExitCodeRangeMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** |  | 
**exit_options** | [**ExitOptions**](ExitOptions.md) |  | 
**start** | **int** |  | 

## Example

```python
from openapi_client.models.exit_code_range_mapping import ExitCodeRangeMapping

# TODO update the JSON string below
json = "{}"
# create an instance of ExitCodeRangeMapping from a JSON string
exit_code_range_mapping_instance = ExitCodeRangeMapping.from_json(json)
# print the JSON string representation of the object
print(ExitCodeRangeMapping.to_json())

# convert the object into a dict
exit_code_range_mapping_dict = exit_code_range_mapping_instance.to_dict()
# create an instance of ExitCodeRangeMapping from a dict
exit_code_range_mapping_from_dict = ExitCodeRangeMapping.from_dict(exit_code_range_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


