# GetAssetInputInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[InputInfo]**](InputInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_asset_input_info_response import GetAssetInputInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAssetInputInfoResponse from a JSON string
get_asset_input_info_response_instance = GetAssetInputInfoResponse.from_json(json)
# print the JSON string representation of the object
print(GetAssetInputInfoResponse.to_json())

# convert the object into a dict
get_asset_input_info_response_dict = get_asset_input_info_response_instance.to_dict()
# create an instance of GetAssetInputInfoResponse from a dict
get_asset_input_info_response_from_dict = GetAssetInputInfoResponse.from_dict(get_asset_input_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


