# EnterpriseChannelCheckNameAvailabilityRequest

A request to Bot Service Management to check availability of an Enterprise Channel name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the Enterprise Channel for which availability needs to be checked. | [optional] 

## Example

```python
from openapi_client.models.enterprise_channel_check_name_availability_request import EnterpriseChannelCheckNameAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseChannelCheckNameAvailabilityRequest from a JSON string
enterprise_channel_check_name_availability_request_instance = EnterpriseChannelCheckNameAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(EnterpriseChannelCheckNameAvailabilityRequest.to_json())

# convert the object into a dict
enterprise_channel_check_name_availability_request_dict = enterprise_channel_check_name_availability_request_instance.to_dict()
# create an instance of EnterpriseChannelCheckNameAvailabilityRequest from a dict
enterprise_channel_check_name_availability_request_from_dict = EnterpriseChannelCheckNameAvailabilityRequest.from_dict(enterprise_channel_check_name_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


