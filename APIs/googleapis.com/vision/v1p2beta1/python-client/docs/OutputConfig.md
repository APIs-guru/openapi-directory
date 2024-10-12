# OutputConfig

The desired output location and metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_size** | **int** | The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If &#x60;batch_size&#x60; &#x3D; 20, then 5 json files each containing 20 response protos will be written under the prefix &#x60;gcs_destination&#x60;.&#x60;uri&#x60;. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations. | [optional] 
**gcs_destination** | [**GcsDestination**](GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.output_config import OutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OutputConfig from a JSON string
output_config_instance = OutputConfig.from_json(json)
# print the JSON string representation of the object
print(OutputConfig.to_json())

# convert the object into a dict
output_config_dict = output_config_instance.to_dict()
# create an instance of OutputConfig from a dict
output_config_from_dict = OutputConfig.from_dict(output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


