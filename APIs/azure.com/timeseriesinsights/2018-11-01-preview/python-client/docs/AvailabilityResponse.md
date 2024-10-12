# AvailabilityResponse

Response of Get Availability operation. When environment has no data, availability property is null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | [**Availability**](Availability.md) |  | [optional] 

## Example

```python
from openapi_client.models.availability_response import AvailabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityResponse from a JSON string
availability_response_instance = AvailabilityResponse.from_json(json)
# print the JSON string representation of the object
print(AvailabilityResponse.to_json())

# convert the object into a dict
availability_response_dict = availability_response_instance.to_dict()
# create an instance of AvailabilityResponse from a dict
availability_response_from_dict = AvailabilityResponse.from_dict(availability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


