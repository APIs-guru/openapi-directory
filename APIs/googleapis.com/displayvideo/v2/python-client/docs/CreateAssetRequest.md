# CreateAssetRequest

A request message for CreateAsset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **str** | Required. The filename of the asset, including the file extension. The filename must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 

## Example

```python
from openapi_client.models.create_asset_request import CreateAssetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAssetRequest from a JSON string
create_asset_request_instance = CreateAssetRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAssetRequest.to_json())

# convert the object into a dict
create_asset_request_dict = create_asset_request_instance.to_dict()
# create an instance of CreateAssetRequest from a dict
create_asset_request_from_dict = CreateAssetRequest.from_dict(create_asset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


