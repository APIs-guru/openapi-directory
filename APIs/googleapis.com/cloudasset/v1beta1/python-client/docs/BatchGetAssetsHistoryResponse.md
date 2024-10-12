# BatchGetAssetsHistoryResponse

Batch get assets history response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[TemporalAsset]**](TemporalAsset.md) | A list of assets with valid time windows. | [optional] 

## Example

```python
from openapi_client.models.batch_get_assets_history_response import BatchGetAssetsHistoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetAssetsHistoryResponse from a JSON string
batch_get_assets_history_response_instance = BatchGetAssetsHistoryResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetAssetsHistoryResponse.to_json())

# convert the object into a dict
batch_get_assets_history_response_dict = batch_get_assets_history_response_instance.to_dict()
# create an instance of BatchGetAssetsHistoryResponse from a dict
batch_get_assets_history_response_from_dict = BatchGetAssetsHistoryResponse.from_dict(batch_get_assets_history_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


