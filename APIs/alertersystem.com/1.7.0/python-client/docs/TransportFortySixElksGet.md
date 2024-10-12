# TransportFortySixElksGet

The TransportFortySixElks resource is a collection of transports that carry dispatched alerts to the external 46elks service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**forty_six_elks_api_password** | **str** | The API password for the 46elks service. Stored in encrypted format. | 
**forty_six_elks_api_username** | **str** | The API username for the 46elks service. | 
**forty_six_elks_from** | **str** | The alphanumeric originator for the message to appear to originate from for the 46elks service. | 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_forty_six_elks_get import TransportFortySixElksGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportFortySixElksGet from a JSON string
transport_forty_six_elks_get_instance = TransportFortySixElksGet.from_json(json)
# print the JSON string representation of the object
print(TransportFortySixElksGet.to_json())

# convert the object into a dict
transport_forty_six_elks_get_dict = transport_forty_six_elks_get_instance.to_dict()
# create an instance of TransportFortySixElksGet from a dict
transport_forty_six_elks_get_from_dict = TransportFortySixElksGet.from_dict(transport_forty_six_elks_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


