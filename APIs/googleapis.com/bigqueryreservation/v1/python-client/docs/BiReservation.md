# BiReservation

Represents a BI Reservation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of the singleton BI reservation. Reservation names have the form &#x60;projects/{project_id}/locations/{location_id}/biReservation&#x60;. | [optional] 
**preferred_tables** | [**List[TableReference]**](TableReference.md) | Preferred tables to use BI capacity for. | [optional] 
**size** | **str** | Size of a reservation, in bytes. | [optional] 
**update_time** | **str** | Output only. The last update timestamp of a reservation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bi_reservation import BiReservation

# TODO update the JSON string below
json = "{}"
# create an instance of BiReservation from a JSON string
bi_reservation_instance = BiReservation.from_json(json)
# print the JSON string representation of the object
print(BiReservation.to_json())

# convert the object into a dict
bi_reservation_dict = bi_reservation_instance.to_dict()
# create an instance of BiReservation from a dict
bi_reservation_from_dict = BiReservation.from_dict(bi_reservation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


