# ReservationConfig

The settings for this topic's Reservation usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**throughput_reservation** | **str** | The Reservation to use for this topic&#39;s throughput capacity. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id} | [optional] 

## Example

```python
from openapi_client.models.reservation_config import ReservationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationConfig from a JSON string
reservation_config_instance = ReservationConfig.from_json(json)
# print the JSON string representation of the object
print(ReservationConfig.to_json())

# convert the object into a dict
reservation_config_dict = reservation_config_instance.to_dict()
# create an instance of ReservationConfig from a dict
reservation_config_from_dict = ReservationConfig.from_dict(reservation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


