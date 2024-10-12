# DatasetOutputConfig

Output configuration for datasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | [**GcsOutputDestination**](GcsOutputDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.dataset_output_config import DatasetOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetOutputConfig from a JSON string
dataset_output_config_instance = DatasetOutputConfig.from_json(json)
# print the JSON string representation of the object
print(DatasetOutputConfig.to_json())

# convert the object into a dict
dataset_output_config_dict = dataset_output_config_instance.to_dict()
# create an instance of DatasetOutputConfig from a dict
dataset_output_config_from_dict = DatasetOutputConfig.from_dict(dataset_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


