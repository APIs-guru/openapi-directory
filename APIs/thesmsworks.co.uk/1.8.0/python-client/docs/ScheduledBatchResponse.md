# ScheduledBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batchid** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.scheduled_batch_response import ScheduledBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledBatchResponse from a JSON string
scheduled_batch_response_instance = ScheduledBatchResponse.from_json(json)
# print the JSON string representation of the object
print(ScheduledBatchResponse.to_json())

# convert the object into a dict
scheduled_batch_response_dict = scheduled_batch_response_instance.to_dict()
# create an instance of ScheduledBatchResponse from a dict
scheduled_batch_response_from_dict = ScheduledBatchResponse.from_dict(scheduled_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


