# ExitInfo

Information about how a command ended.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error message. Empty if there was no error. | [optional] 
**exit_code** | **int** | The exit code from the command execution. | [optional] 

## Example

```python
from openapi_client.models.exit_info import ExitInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExitInfo from a JSON string
exit_info_instance = ExitInfo.from_json(json)
# print the JSON string representation of the object
print(ExitInfo.to_json())

# convert the object into a dict
exit_info_dict = exit_info_instance.to_dict()
# create an instance of ExitInfo from a dict
exit_info_from_dict = ExitInfo.from_dict(exit_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


