# UpdateAvailabilityResponse

The response to a update availability request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availabilities** | [**List[Availability]**](Availability.md) | The availabilities being returned. | [optional] 

## Example

```python
from openapi_client.models.update_availability_response import UpdateAvailabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAvailabilityResponse from a JSON string
update_availability_response_instance = UpdateAvailabilityResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateAvailabilityResponse.to_json())

# convert the object into a dict
update_availability_response_dict = update_availability_response_instance.to_dict()
# create an instance of UpdateAvailabilityResponse from a dict
update_availability_response_from_dict = UpdateAvailabilityResponse.from_dict(update_availability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


