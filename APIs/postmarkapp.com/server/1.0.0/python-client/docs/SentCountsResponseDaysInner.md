# SentCountsResponseDaysInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** |  | [optional] 
**sent** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.sent_counts_response_days_inner import SentCountsResponseDaysInner

# TODO update the JSON string below
json = "{}"
# create an instance of SentCountsResponseDaysInner from a JSON string
sent_counts_response_days_inner_instance = SentCountsResponseDaysInner.from_json(json)
# print the JSON string representation of the object
print(SentCountsResponseDaysInner.to_json())

# convert the object into a dict
sent_counts_response_days_inner_dict = sent_counts_response_days_inner_instance.to_dict()
# create an instance of SentCountsResponseDaysInner from a dict
sent_counts_response_days_inner_from_dict = SentCountsResponseDaysInner.from_dict(sent_counts_response_days_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


