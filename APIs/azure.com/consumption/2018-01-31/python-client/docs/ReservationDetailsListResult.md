# ReservationDetailsListResult

Result of listing reservation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[ReservationDetails]**](ReservationDetails.md) | The list of reservation details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_details_list_result import ReservationDetailsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationDetailsListResult from a JSON string
reservation_details_list_result_instance = ReservationDetailsListResult.from_json(json)
# print the JSON string representation of the object
print(ReservationDetailsListResult.to_json())

# convert the object into a dict
reservation_details_list_result_dict = reservation_details_list_result_instance.to_dict()
# create an instance of ReservationDetailsListResult from a dict
reservation_details_list_result_from_dict = ReservationDetailsListResult.from_dict(reservation_details_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


