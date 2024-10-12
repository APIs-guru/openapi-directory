# DestinationDatasetReference

Contains the reference that identifies a destination bigquery dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | Required. A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. | [optional] 
**project_id** | **str** | Required. The ID of the project containing this dataset. | [optional] 

## Example

```python
from openapi_client.models.destination_dataset_reference import DestinationDatasetReference

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationDatasetReference from a JSON string
destination_dataset_reference_instance = DestinationDatasetReference.from_json(json)
# print the JSON string representation of the object
print(DestinationDatasetReference.to_json())

# convert the object into a dict
destination_dataset_reference_dict = destination_dataset_reference_instance.to_dict()
# create an instance of DestinationDatasetReference from a dict
destination_dataset_reference_from_dict = DestinationDatasetReference.from_dict(destination_dataset_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


