# AutoScaleRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AutoScaleRunError**](AutoScaleRunError.md) |  | [optional] 
**results** | **str** | Each variable value is returned in the form $variable&#x3D;value, and variables are separated by semicolons. | [optional] 
**timestamp** | **datetime** |  | 

## Example

```python
from openapi_client.models.auto_scale_run import AutoScaleRun

# TODO update the JSON string below
json = "{}"
# create an instance of AutoScaleRun from a JSON string
auto_scale_run_instance = AutoScaleRun.from_json(json)
# print the JSON string representation of the object
print(AutoScaleRun.to_json())

# convert the object into a dict
auto_scale_run_dict = auto_scale_run_instance.to_dict()
# create an instance of AutoScaleRun from a dict
auto_scale_run_from_dict = AutoScaleRun.from_dict(auto_scale_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


