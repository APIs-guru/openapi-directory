# ReservationSummariesListResult

Result of listing reservation summaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[ReservationSummaries]**](ReservationSummaries.md) | The list of reservation summaries. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_summaries_list_result import ReservationSummariesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationSummariesListResult from a JSON string
reservation_summaries_list_result_instance = ReservationSummariesListResult.from_json(json)
# print the JSON string representation of the object
print(ReservationSummariesListResult.to_json())

# convert the object into a dict
reservation_summaries_list_result_dict = reservation_summaries_list_result_instance.to_dict()
# create an instance of ReservationSummariesListResult from a dict
reservation_summaries_list_result_from_dict = ReservationSummariesListResult.from_dict(reservation_summaries_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


