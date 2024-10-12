# UpdateSystemServicesResponse

Response of the update system services API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_completed_on** | **datetime** | The date and time when the last system services update completed. | [optional] [readonly] 
**update_started_on** | **datetime** | The date and time when the last system services update was started. | [optional] [readonly] 
**update_status** | **str** | Update status | [optional] [readonly] 

## Example

```python
from openapi_client.models.update_system_services_response import UpdateSystemServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemServicesResponse from a JSON string
update_system_services_response_instance = UpdateSystemServicesResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemServicesResponse.to_json())

# convert the object into a dict
update_system_services_response_dict = update_system_services_response_instance.to_dict()
# create an instance of UpdateSystemServicesResponse from a dict
update_system_services_response_from_dict = UpdateSystemServicesResponse.from_dict(update_system_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


