# DestinationDataset

Defines the destination bigquery dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_reference** | [**DestinationDatasetReference**](DestinationDatasetReference.md) |  | [optional] 
**description** | **str** | Optional. A user-friendly description of the dataset. | [optional] 
**friendly_name** | **str** | Optional. A descriptive name for the dataset. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See https://cloud.google.com/resource-manager/docs/creating-managing-labels for more information. | [optional] 
**location** | **str** | Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. | [optional] 

## Example

```python
from openapi_client.models.destination_dataset import DestinationDataset

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationDataset from a JSON string
destination_dataset_instance = DestinationDataset.from_json(json)
# print the JSON string representation of the object
print(DestinationDataset.to_json())

# convert the object into a dict
destination_dataset_dict = destination_dataset_instance.to_dict()
# create an instance of DestinationDataset from a dict
destination_dataset_from_dict = DestinationDataset.from_dict(destination_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


