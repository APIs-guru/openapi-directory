# BatchDeleteAssetsRequest

A request to delete a list of asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_missing** | **bool** | Optional. When this value is set to &#x60;true&#x60; the request is a no-op for non-existing assets. See https://google.aip.dev/135#delete-if-existing for additional details. Default value is &#x60;false&#x60;. | [optional] 
**names** | **List[str]** | Required. The IDs of the assets to delete. A maximum of 1000 assets can be deleted in a batch. Format: projects/{project}/locations/{location}/assets/{name}. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_assets_request import BatchDeleteAssetsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteAssetsRequest from a JSON string
batch_delete_assets_request_instance = BatchDeleteAssetsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteAssetsRequest.to_json())

# convert the object into a dict
batch_delete_assets_request_dict = batch_delete_assets_request_instance.to_dict()
# create an instance of BatchDeleteAssetsRequest from a dict
batch_delete_assets_request_from_dict = BatchDeleteAssetsRequest.from_dict(batch_delete_assets_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


