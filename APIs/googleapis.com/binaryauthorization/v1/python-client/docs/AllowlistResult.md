# AllowlistResult

Result of evaluating an image name allowlist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_pattern** | **str** | The allowlist pattern that the image matched. | [optional] 

## Example

```python
from openapi_client.models.allowlist_result import AllowlistResult

# TODO update the JSON string below
json = "{}"
# create an instance of AllowlistResult from a JSON string
allowlist_result_instance = AllowlistResult.from_json(json)
# print the JSON string representation of the object
print(AllowlistResult.to_json())

# convert the object into a dict
allowlist_result_dict = allowlist_result_instance.to_dict()
# create an instance of AllowlistResult from a dict
allowlist_result_from_dict = AllowlistResult.from_dict(allowlist_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


