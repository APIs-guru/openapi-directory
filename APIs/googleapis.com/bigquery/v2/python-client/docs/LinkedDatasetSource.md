# LinkedDatasetSource

A dataset source type which refers to another BigQuery dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_dataset** | [**DatasetReference**](DatasetReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.linked_dataset_source import LinkedDatasetSource

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedDatasetSource from a JSON string
linked_dataset_source_instance = LinkedDatasetSource.from_json(json)
# print the JSON string representation of the object
print(LinkedDatasetSource.to_json())

# convert the object into a dict
linked_dataset_source_dict = linked_dataset_source_instance.to_dict()
# create an instance of LinkedDatasetSource from a dict
linked_dataset_source_from_dict = LinkedDatasetSource.from_dict(linked_dataset_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


