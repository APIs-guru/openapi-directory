# RevertTemplateResponse

The result of reverting a template in a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | [**CustomTemplate**](CustomTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.revert_template_response import RevertTemplateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RevertTemplateResponse from a JSON string
revert_template_response_instance = RevertTemplateResponse.from_json(json)
# print the JSON string representation of the object
print(RevertTemplateResponse.to_json())

# convert the object into a dict
revert_template_response_dict = revert_template_response_instance.to_dict()
# create an instance of RevertTemplateResponse from a dict
revert_template_response_from_dict = RevertTemplateResponse.from_dict(revert_template_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


