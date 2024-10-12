# ConsumerRequestCountsInDateRangeResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_request_count** | **float** |  | [optional] 
**application_id** | **str** |  | [optional] 
**consumer_id** | **str** |  | [optional] 
**end_datetime** | **str** |  | [optional] 
**request_counts** | [**RequestCountAllocation**](RequestCountAllocation.md) |  | [optional] 
**start_datetime** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.consumer_request_counts_in_date_range_response_data import ConsumerRequestCountsInDateRangeResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerRequestCountsInDateRangeResponseData from a JSON string
consumer_request_counts_in_date_range_response_data_instance = ConsumerRequestCountsInDateRangeResponseData.from_json(json)
# print the JSON string representation of the object
print(ConsumerRequestCountsInDateRangeResponseData.to_json())

# convert the object into a dict
consumer_request_counts_in_date_range_response_data_dict = consumer_request_counts_in_date_range_response_data_instance.to_dict()
# create an instance of ConsumerRequestCountsInDateRangeResponseData from a dict
consumer_request_counts_in_date_range_response_data_from_dict = ConsumerRequestCountsInDateRangeResponseData.from_dict(consumer_request_counts_in_date_range_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


