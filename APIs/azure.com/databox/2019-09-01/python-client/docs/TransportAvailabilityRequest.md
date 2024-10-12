# TransportAvailabilityRequest

Request body to get the transport availability for given sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku_name** | **str** | Type of the device. | [optional] 

## Example

```python
from openapi_client.models.transport_availability_request import TransportAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransportAvailabilityRequest from a JSON string
transport_availability_request_instance = TransportAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(TransportAvailabilityRequest.to_json())

# convert the object into a dict
transport_availability_request_dict = transport_availability_request_instance.to_dict()
# create an instance of TransportAvailabilityRequest from a dict
transport_availability_request_from_dict = TransportAvailabilityRequest.from_dict(transport_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


