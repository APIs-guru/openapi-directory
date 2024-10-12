# AlertServiceTransportCodeGet

The AlertServiceTransportCode resource is a set of codes that describes the type of transport that is used by an alert service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_name** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert_service_transport_code_get import AlertServiceTransportCodeGet

# TODO update the JSON string below
json = "{}"
# create an instance of AlertServiceTransportCodeGet from a JSON string
alert_service_transport_code_get_instance = AlertServiceTransportCodeGet.from_json(json)
# print the JSON string representation of the object
print(AlertServiceTransportCodeGet.to_json())

# convert the object into a dict
alert_service_transport_code_get_dict = alert_service_transport_code_get_instance.to_dict()
# create an instance of AlertServiceTransportCodeGet from a dict
alert_service_transport_code_get_from_dict = AlertServiceTransportCodeGet.from_dict(alert_service_transport_code_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


