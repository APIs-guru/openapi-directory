# SentCountsResponse

The result of a get sent counts operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | [**List[SentCountsResponseDaysInner]**](SentCountsResponseDaysInner.md) |  | [optional] 
**sent** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.sent_counts_response import SentCountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SentCountsResponse from a JSON string
sent_counts_response_instance = SentCountsResponse.from_json(json)
# print the JSON string representation of the object
print(SentCountsResponse.to_json())

# convert the object into a dict
sent_counts_response_dict = sent_counts_response_instance.to_dict()
# create an instance of SentCountsResponse from a dict
sent_counts_response_from_dict = SentCountsResponse.from_dict(sent_counts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


