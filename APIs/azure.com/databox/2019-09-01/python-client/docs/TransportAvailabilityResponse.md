# TransportAvailabilityResponse

Transport options available for given sku in a region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transport_availability_details** | [**List[TransportAvailabilityDetails]**](TransportAvailabilityDetails.md) | List of transport availability details for given region | [optional] [readonly] 

## Example

```python
from openapi_client.models.transport_availability_response import TransportAvailabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransportAvailabilityResponse from a JSON string
transport_availability_response_instance = TransportAvailabilityResponse.from_json(json)
# print the JSON string representation of the object
print(TransportAvailabilityResponse.to_json())

# convert the object into a dict
transport_availability_response_dict = transport_availability_response_instance.to_dict()
# create an instance of TransportAvailabilityResponse from a dict
transport_availability_response_from_dict = TransportAvailabilityResponse.from_dict(transport_availability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


