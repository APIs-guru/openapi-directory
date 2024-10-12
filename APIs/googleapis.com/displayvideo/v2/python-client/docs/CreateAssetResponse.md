# CreateAssetResponse

A response message for CreateAsset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**Asset**](Asset.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_asset_response import CreateAssetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAssetResponse from a JSON string
create_asset_response_instance = CreateAssetResponse.from_json(json)
# print the JSON string representation of the object
print(CreateAssetResponse.to_json())

# convert the object into a dict
create_asset_response_dict = create_asset_response_instance.to_dict()
# create an instance of CreateAssetResponse from a dict
create_asset_response_from_dict = CreateAssetResponse.from_dict(create_asset_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


