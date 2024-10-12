# ProcessBatchRequestBody

A process batch request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_scheme** | [**DisplayScheme**](DisplayScheme.md) | The display format that the label should be shown in. | [optional] 
**label_format** | [**LabelFormat**](LabelFormat.md) |  | [optional] 
**label_layout** | [**LabelLayout**](LabelLayout.md) |  | [optional] [default to '4x6']
**ship_date** | **datetime** | The Ship date the batch is being processed for | [optional] 

## Example

```python
from openapi_client.models.process_batch_request_body import ProcessBatchRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessBatchRequestBody from a JSON string
process_batch_request_body_instance = ProcessBatchRequestBody.from_json(json)
# print the JSON string representation of the object
print(ProcessBatchRequestBody.to_json())

# convert the object into a dict
process_batch_request_body_dict = process_batch_request_body_instance.to_dict()
# create an instance of ProcessBatchRequestBody from a dict
process_batch_request_body_from_dict = ProcessBatchRequestBody.from_dict(process_batch_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


