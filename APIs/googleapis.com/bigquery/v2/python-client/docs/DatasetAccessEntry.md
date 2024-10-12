# DatasetAccessEntry

Grants all resources of particular types in a particular dataset read access to the current dataset. Similar to how individually authorized views work, updates to any resource granted through its dataset (including creation of new resources) requires read permission to referenced resources, plus write permission to the authorizing dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | [**DatasetReference**](DatasetReference.md) |  | [optional] 
**target_types** | **List[str]** | Which resources in the dataset this entry applies to. Currently, only views are supported, but additional target types may be added in the future. | [optional] 

## Example

```python
from openapi_client.models.dataset_access_entry import DatasetAccessEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetAccessEntry from a JSON string
dataset_access_entry_instance = DatasetAccessEntry.from_json(json)
# print the JSON string representation of the object
print(DatasetAccessEntry.to_json())

# convert the object into a dict
dataset_access_entry_dict = dataset_access_entry_instance.to_dict()
# create an instance of DatasetAccessEntry from a dict
dataset_access_entry_from_dict = DatasetAccessEntry.from_dict(dataset_access_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


