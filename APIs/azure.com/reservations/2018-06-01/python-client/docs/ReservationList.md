# ReservationList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Url to get the next page of reservations. | [optional] 
**value** | [**List[ReservationResponse]**](ReservationResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.reservation_list import ReservationList

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationList from a JSON string
reservation_list_instance = ReservationList.from_json(json)
# print the JSON string representation of the object
print(ReservationList.to_json())

# convert the object into a dict
reservation_list_dict = reservation_list_instance.to_dict()
# create an instance of ReservationList from a dict
reservation_list_from_dict = ReservationList.from_dict(reservation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


