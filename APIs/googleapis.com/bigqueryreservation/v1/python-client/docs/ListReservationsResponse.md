# ListReservationsResponse

The response for ReservationService.ListReservations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**reservations** | [**List[Reservation]**](Reservation.md) | List of reservations visible to the user. | [optional] 

## Example

```python
from openapi_client.models.list_reservations_response import ListReservationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReservationsResponse from a JSON string
list_reservations_response_instance = ListReservationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListReservationsResponse.to_json())

# convert the object into a dict
list_reservations_response_dict = list_reservations_response_instance.to_dict()
# create an instance of ListReservationsResponse from a dict
list_reservations_response_from_dict = ListReservationsResponse.from_dict(list_reservations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


