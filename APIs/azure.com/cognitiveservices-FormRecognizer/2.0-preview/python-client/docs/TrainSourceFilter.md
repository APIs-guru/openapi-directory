# TrainSourceFilter

Filter to apply to the documents in the source path for training.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_sub_folders** | **bool** | A flag to indicate if sub folders within the set of prefix folders will also need to be included when searching for content to be preprocessed. | [optional] [default to False]
**prefix** | **str** | A case-sensitive prefix string to filter documents in the source path for training. For example, when using a Azure storage blob Uri, use the prefix to restrict sub folders for training. | [optional] 

## Example

```python
from openapi_client.models.train_source_filter import TrainSourceFilter

# TODO update the JSON string below
json = "{}"
# create an instance of TrainSourceFilter from a JSON string
train_source_filter_instance = TrainSourceFilter.from_json(json)
# print the JSON string representation of the object
print(TrainSourceFilter.to_json())

# convert the object into a dict
train_source_filter_dict = train_source_filter_instance.to_dict()
# create an instance of TrainSourceFilter from a dict
train_source_filter_from_dict = TrainSourceFilter.from_dict(train_source_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


