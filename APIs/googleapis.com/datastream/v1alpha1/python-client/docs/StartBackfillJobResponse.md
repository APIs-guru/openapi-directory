# StartBackfillJobResponse

Response for manually initiating a backfill job for a specific stream object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | [**StreamObject**](StreamObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.start_backfill_job_response import StartBackfillJobResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StartBackfillJobResponse from a JSON string
start_backfill_job_response_instance = StartBackfillJobResponse.from_json(json)
# print the JSON string representation of the object
print(StartBackfillJobResponse.to_json())

# convert the object into a dict
start_backfill_job_response_dict = start_backfill_job_response_instance.to_dict()
# create an instance of StartBackfillJobResponse from a dict
start_backfill_job_response_from_dict = StartBackfillJobResponse.from_dict(start_backfill_job_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


