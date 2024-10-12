# QueryAssetsOutputConfig

Output configuration query assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination**](GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_assets_output_config import QueryAssetsOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of QueryAssetsOutputConfig from a JSON string
query_assets_output_config_instance = QueryAssetsOutputConfig.from_json(json)
# print the JSON string representation of the object
print(QueryAssetsOutputConfig.to_json())

# convert the object into a dict
query_assets_output_config_dict = query_assets_output_config_instance.to_dict()
# create an instance of QueryAssetsOutputConfig from a dict
query_assets_output_config_from_dict = QueryAssetsOutputConfig.from_dict(query_assets_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


