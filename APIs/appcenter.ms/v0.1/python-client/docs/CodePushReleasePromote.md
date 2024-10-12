# CodePushReleasePromote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**is_disabled** | **bool** |  | [optional] 
**is_mandatory** | **bool** |  | [optional] 
**rollout** | **int** |  | [optional] 
**target_binary_range** | **str** |  | [optional] 
**label** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.code_push_release_promote import CodePushReleasePromote

# TODO update the JSON string below
json = "{}"
# create an instance of CodePushReleasePromote from a JSON string
code_push_release_promote_instance = CodePushReleasePromote.from_json(json)
# print the JSON string representation of the object
print(CodePushReleasePromote.to_json())

# convert the object into a dict
code_push_release_promote_dict = code_push_release_promote_instance.to_dict()
# create an instance of CodePushReleasePromote from a dict
code_push_release_promote_from_dict = CodePushReleasePromote.from_dict(code_push_release_promote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


