# UpdateAssetRequest

A request to update an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**Asset**](Asset.md) |  | [optional] 
**request_id** | **str** | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 
**update_mask** | **str** | Required. Field mask is used to specify the fields to be overwritten in the &#x60;Asset&#x60; resource by the update. The values specified in the &#x60;update_mask&#x60; field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. | [optional] 

## Example

```python
from openapi_client.models.update_asset_request import UpdateAssetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAssetRequest from a JSON string
update_asset_request_instance = UpdateAssetRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAssetRequest.to_json())

# convert the object into a dict
update_asset_request_dict = update_asset_request_instance.to_dict()
# create an instance of UpdateAssetRequest from a dict
update_asset_request_from_dict = UpdateAssetRequest.from_dict(update_asset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


