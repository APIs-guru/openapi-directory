# DatasetInputConfig

Input configuration for datasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_files** | [**List[InputFile]**](InputFile.md) | Files containing the sentence pairs to be imported to the dataset. | [optional] 

## Example

```python
from openapi_client.models.dataset_input_config import DatasetInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetInputConfig from a JSON string
dataset_input_config_instance = DatasetInputConfig.from_json(json)
# print the JSON string representation of the object
print(DatasetInputConfig.to_json())

# convert the object into a dict
dataset_input_config_dict = dataset_input_config_instance.to_dict()
# create an instance of DatasetInputConfig from a dict
dataset_input_config_from_dict = DatasetInputConfig.from_dict(dataset_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


