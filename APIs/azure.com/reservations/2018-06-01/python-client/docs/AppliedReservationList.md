# AppliedReservationList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Url to get the next page of reservations | [optional] 
**value** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.applied_reservation_list import AppliedReservationList

# TODO update the JSON string below
json = "{}"
# create an instance of AppliedReservationList from a JSON string
applied_reservation_list_instance = AppliedReservationList.from_json(json)
# print the JSON string representation of the object
print(AppliedReservationList.to_json())

# convert the object into a dict
applied_reservation_list_dict = applied_reservation_list_instance.to_dict()
# create an instance of AppliedReservationList from a dict
applied_reservation_list_from_dict = AppliedReservationList.from_dict(applied_reservation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


