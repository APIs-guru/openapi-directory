# FailureInfo

A fatal problem encountered during the execution of the build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Explains the failure issue in more detail using hard-coded text. | [optional] 
**type** | **str** | The name of the failure. | [optional] 

## Example

```python
from openapi_client.models.failure_info import FailureInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FailureInfo from a JSON string
failure_info_instance = FailureInfo.from_json(json)
# print the JSON string representation of the object
print(FailureInfo.to_json())

# convert the object into a dict
failure_info_dict = failure_info_instance.to_dict()
# create an instance of FailureInfo from a dict
failure_info_from_dict = FailureInfo.from_dict(failure_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


