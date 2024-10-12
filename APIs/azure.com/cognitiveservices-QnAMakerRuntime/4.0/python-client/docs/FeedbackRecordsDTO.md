# FeedbackRecordsDTO

Active learning feedback records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback_records** | [**List[FeedbackRecordDTO]**](FeedbackRecordDTO.md) | List of feedback records. | [optional] 

## Example

```python
from openapi_client.models.feedback_records_dto import FeedbackRecordsDTO

# TODO update the JSON string below
json = "{}"
# create an instance of FeedbackRecordsDTO from a JSON string
feedback_records_dto_instance = FeedbackRecordsDTO.from_json(json)
# print the JSON string representation of the object
print(FeedbackRecordsDTO.to_json())

# convert the object into a dict
feedback_records_dto_dict = feedback_records_dto_instance.to_dict()
# create an instance of FeedbackRecordsDTO from a dict
feedback_records_dto_from_dict = FeedbackRecordsDTO.from_dict(feedback_records_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


