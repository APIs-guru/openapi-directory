# DataplexConfig

Specifies how metastore metadata should be integrated with the Dataplex service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lake_resources** | [**Dict[str, Lake]**](Lake.md) | A reference to the Lake resources that this metastore service is attached to. The key is the lake resource name. Example: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. | [optional] 

## Example

```python
from openapi_client.models.dataplex_config import DataplexConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DataplexConfig from a JSON string
dataplex_config_instance = DataplexConfig.from_json(json)
# print the JSON string representation of the object
print(DataplexConfig.to_json())

# convert the object into a dict
dataplex_config_dict = dataplex_config_instance.to_dict()
# create an instance of DataplexConfig from a dict
dataplex_config_from_dict = DataplexConfig.from_dict(dataplex_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


