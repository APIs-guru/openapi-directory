# AssetsListDefaultResponseError

Information about an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | A language-independent error name. | [optional] 
**details** | **List[object]** | The error details. | [optional] 
**message** | **str** | The error message. | [optional] 
**target** | **str** | The target of the error (for example, the name of the property in error). | [optional] 

## Example

```python
from openapi_client.models.assets_list_default_response_error import AssetsListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsListDefaultResponseError from a JSON string
assets_list_default_response_error_instance = AssetsListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(AssetsListDefaultResponseError.to_json())

# convert the object into a dict
assets_list_default_response_error_dict = assets_list_default_response_error_instance.to_dict()
# create an instance of AssetsListDefaultResponseError from a dict
assets_list_default_response_error_from_dict = AssetsListDefaultResponseError.from_dict(assets_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


