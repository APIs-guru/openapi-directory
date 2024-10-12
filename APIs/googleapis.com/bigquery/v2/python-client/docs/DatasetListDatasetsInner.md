# DatasetListDatasetsInner

A dataset resource with only a subset of fields, to be returned in a list of datasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_reference** | [**DatasetReference**](DatasetReference.md) |  | [optional] 
**friendly_name** | **str** | An alternate name for the dataset. The friendly name is purely decorative in nature. | [optional] 
**id** | **str** | The fully-qualified, unique, opaque ID of the dataset. | [optional] 
**kind** | **str** | The resource type. This property always returns the value \&quot;bigquery#dataset\&quot; | [optional] 
**labels** | **Dict[str, str]** | The labels associated with this dataset. You can use these to organize and group your datasets. | [optional] 
**location** | **str** | The geographic location where the dataset resides. | [optional] 

## Example

```python
from openapi_client.models.dataset_list_datasets_inner import DatasetListDatasetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetListDatasetsInner from a JSON string
dataset_list_datasets_inner_instance = DatasetListDatasetsInner.from_json(json)
# print the JSON string representation of the object
print(DatasetListDatasetsInner.to_json())

# convert the object into a dict
dataset_list_datasets_inner_dict = dataset_list_datasets_inner_instance.to_dict()
# create an instance of DatasetListDatasetsInner from a dict
dataset_list_datasets_inner_from_dict = DatasetListDatasetsInner.from_dict(dataset_list_datasets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


