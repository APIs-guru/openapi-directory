# ServicesCheckNameAvailabilityRequest

A resource type and proposed name

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The proposed resource name | [optional] 
**type** | **str** | The resource type chain (e.g. virtualMachines/extensions) | [optional] 

## Example

```python
from openapi_client.models.services_check_name_availability_request import ServicesCheckNameAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesCheckNameAvailabilityRequest from a JSON string
services_check_name_availability_request_instance = ServicesCheckNameAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(ServicesCheckNameAvailabilityRequest.to_json())

# convert the object into a dict
services_check_name_availability_request_dict = services_check_name_availability_request_instance.to_dict()
# create an instance of ServicesCheckNameAvailabilityRequest from a dict
services_check_name_availability_request_from_dict = ServicesCheckNameAvailabilityRequest.from_dict(services_check_name_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


