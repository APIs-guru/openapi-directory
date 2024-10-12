# TrainSourceFilter

Filters to be applied when traversing a data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_sub_folders** | **bool** | A flag to indicate if sub folders within the set of  prefix folders will also need to be included when searching  for content to be preprocessed. | [optional] 
**prefix** | **str** | A case-sensitive prefix string to filter content  under the source location. For e.g., when using a Azure Blob  Uri use the prefix to restrict subfolders for content. | [optional] 

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


