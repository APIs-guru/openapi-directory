# BuildGetLogResult

The result of get log link operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_link** | **str** | The link to logs for a azure container registry build. | [optional] 

## Example

```python
from openapi_client.models.build_get_log_result import BuildGetLogResult

# TODO update the JSON string below
json = "{}"
# create an instance of BuildGetLogResult from a JSON string
build_get_log_result_instance = BuildGetLogResult.from_json(json)
# print the JSON string representation of the object
print(BuildGetLogResult.to_json())

# convert the object into a dict
build_get_log_result_dict = build_get_log_result_instance.to_dict()
# create an instance of BuildGetLogResult from a dict
build_get_log_result_from_dict = BuildGetLogResult.from_dict(build_get_log_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


