# TransportPagerDutyPut

The TransportPagerDuty resource is a collection of transports that carry dispatched alerts to the external Pager Duty service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**pager_duty_api_token** | **str** | The API token for the Pager Duty service. Stored in encrypted format. | 
**pager_duty_dedup_key** | **str** | The dedup key for the Pager Duty service. | [optional] 
**pager_duty_event_action** | **str** | The event action for the Pager Duty service. | 
**pager_duty_payload_class** | **str** | The payload class for the Pager Duty service. | [optional] 
**pager_duty_payload_component** | **str** | The payload component for the Pager Duty service. | [optional] 
**pager_duty_payload_group** | **str** | The payload group for the Pager Duty service. | [optional] 
**pager_duty_payload_severity** | **str** | The payload severity for the Pager Duty service. | [optional] 
**pager_duty_payload_source** | **str** | The payload source for the Pager Duty service. | [optional] 
**pager_duty_routing_key** | **str** | The routing key for the Pager Duty service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_pager_duty_put import TransportPagerDutyPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportPagerDutyPut from a JSON string
transport_pager_duty_put_instance = TransportPagerDutyPut.from_json(json)
# print the JSON string representation of the object
print(TransportPagerDutyPut.to_json())

# convert the object into a dict
transport_pager_duty_put_dict = transport_pager_duty_put_instance.to_dict()
# create an instance of TransportPagerDutyPut from a dict
transport_pager_duty_put_from_dict = TransportPagerDutyPut.from_dict(transport_pager_duty_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


