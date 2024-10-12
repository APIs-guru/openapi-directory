# TransportAvailabilityDetails

Transport options availability details for given region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_type** | **str** | Transport Shipment Type supported for given region. | [optional] [readonly] 

## Example

```python
from openapi_client.models.transport_availability_details import TransportAvailabilityDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TransportAvailabilityDetails from a JSON string
transport_availability_details_instance = TransportAvailabilityDetails.from_json(json)
# print the JSON string representation of the object
print(TransportAvailabilityDetails.to_json())

# convert the object into a dict
transport_availability_details_dict = transport_availability_details_instance.to_dict()
# create an instance of TransportAvailabilityDetails from a dict
transport_availability_details_from_dict = TransportAvailabilityDetails.from_dict(transport_availability_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


