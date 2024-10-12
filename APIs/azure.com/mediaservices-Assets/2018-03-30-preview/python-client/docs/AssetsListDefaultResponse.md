# AssetsListDefaultResponse

The API error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AssetsListDefaultResponseError**](AssetsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.assets_list_default_response import AssetsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsListDefaultResponse from a JSON string
assets_list_default_response_instance = AssetsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AssetsListDefaultResponse.to_json())

# convert the object into a dict
assets_list_default_response_dict = assets_list_default_response_instance.to_dict()
# create an instance of AssetsListDefaultResponse from a dict
assets_list_default_response_from_dict = AssetsListDefaultResponse.from_dict(assets_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


