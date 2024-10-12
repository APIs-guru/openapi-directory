# GetBatchByExternalIdResponseBody

A get batch by external id response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_errors_url** | [**OptionalLink**](OptionalLink.md) | Link to batch errors endpoint | [readonly] 
**batch_id** | **str** | A string that uniquely identifies the batch | [readonly] 
**batch_labels_url** | [**OptionalLink**](OptionalLink.md) | Link to batch labels query | 
**batch_notes** | **str** | Custom notes you can add for each created batch | [readonly] [default to '']
**batch_number** | **str** | The batch number. | [readonly] 
**batch_shipments_url** | [**OptionalLink**](OptionalLink.md) | The batch shipments endpoint | 
**completed** | **int** | The number of labels generated in the batch | [readonly] 
**count** | **int** | The total of errors, warnings, and completed properties | [readonly] 
**created_at** | **datetime** | The date and time the batch was created in ShipEngine | [readonly] 
**errors** | **int** | The number of errors that occurred while generating the batch | [readonly] 
**external_batch_id** | **str** | A string that uniquely identifies the external batch | [readonly] 
**form_download** | [**OptionalLink**](OptionalLink.md) | The form download for any customs that are needed | [readonly] 
**forms** | **int** | The number of forms for customs that are available for download | [readonly] 
**label_download** | [**LabelDownload**](LabelDownload.md) | The label download for the batch | [readonly] 
**label_format** | [**LabelFormat**](LabelFormat.md) |  | [readonly] 
**label_layout** | [**LabelLayout**](LabelLayout.md) | label layout | [readonly] 
**processed_at** | **datetime** | The date and time the batch was processed in ShipEngine | [readonly] 
**status** | [**BatchStatus**](BatchStatus.md) |  | [readonly] 
**warnings** | **int** | The number of warnings that occurred while generating the batch | [readonly] 

## Example

```python
from openapi_client.models.get_batch_by_external_id_response_body import GetBatchByExternalIdResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetBatchByExternalIdResponseBody from a JSON string
get_batch_by_external_id_response_body_instance = GetBatchByExternalIdResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetBatchByExternalIdResponseBody.to_json())

# convert the object into a dict
get_batch_by_external_id_response_body_dict = get_batch_by_external_id_response_body_instance.to_dict()
# create an instance of GetBatchByExternalIdResponseBody from a dict
get_batch_by_external_id_response_body_from_dict = GetBatchByExternalIdResponseBody.from_dict(get_batch_by_external_id_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


