# ListReservationsResponse

Response for ListReservations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page of results. If this field is omitted, there are no more results. | [optional] 
**reservations** | [**List[Reservation]**](Reservation.md) | The list of reservation in the requested parent. The order of the reservations is unspecified. | [optional] 

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


