# AutoScaleRunError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An identifier for the error. Codes are invariant and are intended to be consumed programmatically. | 
**details** | [**List[AutoScaleRunError]**](AutoScaleRunError.md) |  | [optional] 
**message** | **str** | A message describing the error, intended to be suitable for display in a user interface. | 

## Example

```python
from openapi_client.models.auto_scale_run_error import AutoScaleRunError

# TODO update the JSON string below
json = "{}"
# create an instance of AutoScaleRunError from a JSON string
auto_scale_run_error_instance = AutoScaleRunError.from_json(json)
# print the JSON string representation of the object
print(AutoScaleRunError.to_json())

# convert the object into a dict
auto_scale_run_error_dict = auto_scale_run_error_instance.to_dict()
# create an instance of AutoScaleRunError from a dict
auto_scale_run_error_from_dict = AutoScaleRunError.from_dict(auto_scale_run_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


