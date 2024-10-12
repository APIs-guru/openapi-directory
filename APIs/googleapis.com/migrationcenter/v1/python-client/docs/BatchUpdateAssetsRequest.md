# BatchUpdateAssetsRequest

A request to update a list of assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[UpdateAssetRequest]**](UpdateAssetRequest.md) | Required. The request message specifying the resources to update. A maximum of 1000 assets can be modified in a batch. | [optional] 

## Example

```python
from openapi_client.models.batch_update_assets_request import BatchUpdateAssetsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateAssetsRequest from a JSON string
batch_update_assets_request_instance = BatchUpdateAssetsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateAssetsRequest.to_json())

# convert the object into a dict
batch_update_assets_request_dict = batch_update_assets_request_instance.to_dict()
# create an instance of BatchUpdateAssetsRequest from a dict
batch_update_assets_request_from_dict = BatchUpdateAssetsRequest.from_dict(batch_update_assets_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


