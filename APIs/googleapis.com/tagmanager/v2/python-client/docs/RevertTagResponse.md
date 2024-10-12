# RevertTagResponse

The result of reverting a tag in a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | [**Tag**](Tag.md) |  | [optional] 

## Example

```python
from openapi_client.models.revert_tag_response import RevertTagResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RevertTagResponse from a JSON string
revert_tag_response_instance = RevertTagResponse.from_json(json)
# print the JSON string representation of the object
print(RevertTagResponse.to_json())

# convert the object into a dict
revert_tag_response_dict = revert_tag_response_instance.to_dict()
# create an instance of RevertTagResponse from a dict
revert_tag_response_from_dict = RevertTagResponse.from_dict(revert_tag_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


