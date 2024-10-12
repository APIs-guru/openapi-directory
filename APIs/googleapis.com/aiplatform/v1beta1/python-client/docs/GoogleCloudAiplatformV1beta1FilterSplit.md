# GoogleCloudAiplatformV1beta1FilterSplit

Assigns input data to training, validation, and test sets based on the given filters, data pieces not matched by any filter are ignored. Currently only supported for Datasets containing DataItems. If any of the filters in this message are to match nothing, then they can be set as '-' (the minus sign). Supported only for unstructured Datasets. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_filter** | **str** | Required. A filter on DataItems of the Dataset. DataItems that match this filter are used to test the Model. A filter with same syntax as the one used in DatasetService.ListDataItems may be used. If a single DataItem is matched by more than one of the FilterSplit filters, then it is assigned to the first set that applies to it in the training, validation, test order. | [optional] 
**training_filter** | **str** | Required. A filter on DataItems of the Dataset. DataItems that match this filter are used to train the Model. A filter with same syntax as the one used in DatasetService.ListDataItems may be used. If a single DataItem is matched by more than one of the FilterSplit filters, then it is assigned to the first set that applies to it in the training, validation, test order. | [optional] 
**validation_filter** | **str** | Required. A filter on DataItems of the Dataset. DataItems that match this filter are used to validate the Model. A filter with same syntax as the one used in DatasetService.ListDataItems may be used. If a single DataItem is matched by more than one of the FilterSplit filters, then it is assigned to the first set that applies to it in the training, validation, test order. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_filter_split import GoogleCloudAiplatformV1beta1FilterSplit

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FilterSplit from a JSON string
google_cloud_aiplatform_v1beta1_filter_split_instance = GoogleCloudAiplatformV1beta1FilterSplit.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FilterSplit.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_filter_split_dict = google_cloud_aiplatform_v1beta1_filter_split_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FilterSplit from a dict
google_cloud_aiplatform_v1beta1_filter_split_from_dict = GoogleCloudAiplatformV1beta1FilterSplit.from_dict(google_cloud_aiplatform_v1beta1_filter_split_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


