# BatchUpdateAssetsResponse

Response for updating a list of assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[Asset]**](Asset.md) | Update asset content. The content only includes values after field mask being applied. | [optional] 

## Example

```python
from openapi_client.models.batch_update_assets_response import BatchUpdateAssetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateAssetsResponse from a JSON string
batch_update_assets_response_instance = BatchUpdateAssetsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateAssetsResponse.to_json())

# convert the object into a dict
batch_update_assets_response_dict = batch_update_assets_response_instance.to_dict()
# create an instance of BatchUpdateAssetsResponse from a dict
batch_update_assets_response_from_dict = BatchUpdateAssetsResponse.from_dict(batch_update_assets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


