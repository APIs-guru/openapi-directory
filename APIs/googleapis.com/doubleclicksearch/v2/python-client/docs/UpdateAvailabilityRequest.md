# UpdateAvailabilityRequest

The request to update availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availabilities** | [**List[Availability]**](Availability.md) | The availabilities being requested. | [optional] 

## Example

```python
from openapi_client.models.update_availability_request import UpdateAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAvailabilityRequest from a JSON string
update_availability_request_instance = UpdateAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAvailabilityRequest.to_json())

# convert the object into a dict
update_availability_request_dict = update_availability_request_instance.to_dict()
# create an instance of UpdateAvailabilityRequest from a dict
update_availability_request_from_dict = UpdateAvailabilityRequest.from_dict(update_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


