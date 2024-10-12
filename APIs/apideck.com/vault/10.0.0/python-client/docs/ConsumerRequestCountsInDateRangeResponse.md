# ConsumerRequestCountsInDateRangeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ConsumerRequestCountsInDateRangeResponseData**](ConsumerRequestCountsInDateRangeResponseData.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.consumer_request_counts_in_date_range_response import ConsumerRequestCountsInDateRangeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerRequestCountsInDateRangeResponse from a JSON string
consumer_request_counts_in_date_range_response_instance = ConsumerRequestCountsInDateRangeResponse.from_json(json)
# print the JSON string representation of the object
print(ConsumerRequestCountsInDateRangeResponse.to_json())

# convert the object into a dict
consumer_request_counts_in_date_range_response_dict = consumer_request_counts_in_date_range_response_instance.to_dict()
# create an instance of ConsumerRequestCountsInDateRangeResponse from a dict
consumer_request_counts_in_date_range_response_from_dict = ConsumerRequestCountsInDateRangeResponse.from_dict(consumer_request_counts_in_date_range_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


