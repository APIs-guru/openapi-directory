# V3StopTicket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_free_fare_zone** | **bool** | Indicates whether the stop is inside the free fare zone | [optional] 
**ticket_checks** | **bool** |  | [optional] 
**ticket_machine** | **bool** |  | [optional] 
**ticket_type** | **str** | Indicates the ticket type for the stop (myki, paper or both) | [optional] 
**ticket_zones** | **List[int]** |  | [optional] 
**vline_reservation** | **bool** |  | [optional] 
**zone** | **str** | Description of the zone | [optional] 

## Example

```python
from openapi_client.models.v3_stop_ticket import V3StopTicket

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopTicket from a JSON string
v3_stop_ticket_instance = V3StopTicket.from_json(json)
# print the JSON string representation of the object
print(V3StopTicket.to_json())

# convert the object into a dict
v3_stop_ticket_dict = v3_stop_ticket_instance.to_dict()
# create an instance of V3StopTicket from a dict
v3_stop_ticket_from_dict = V3StopTicket.from_dict(v3_stop_ticket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


