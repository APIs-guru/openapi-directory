# CheckSystemServicesUpdatesAvailableResponse

Information about updates available for system services in a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updates_available** | **str** | Yes if updates are available for the system services, No if not. | [optional] [readonly] 

## Example

```python
from openapi_client.models.check_system_services_updates_available_response import CheckSystemServicesUpdatesAvailableResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckSystemServicesUpdatesAvailableResponse from a JSON string
check_system_services_updates_available_response_instance = CheckSystemServicesUpdatesAvailableResponse.from_json(json)
# print the JSON string representation of the object
print(CheckSystemServicesUpdatesAvailableResponse.to_json())

# convert the object into a dict
check_system_services_updates_available_response_dict = check_system_services_updates_available_response_instance.to_dict()
# create an instance of CheckSystemServicesUpdatesAvailableResponse from a dict
check_system_services_updates_available_response_from_dict = CheckSystemServicesUpdatesAvailableResponse.from_dict(check_system_services_updates_available_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


