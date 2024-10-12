# EnterpriseChannelCheckNameAvailabilityResponse

A request to Bot Service Management to check availability of an Enterprise Channel name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Additional information about why a bot name is not available. | [optional] 
**valid** | **bool** | Indicates if the Enterprise Channel name is valid. | [optional] 

## Example

```python
from openapi_client.models.enterprise_channel_check_name_availability_response import EnterpriseChannelCheckNameAvailabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseChannelCheckNameAvailabilityResponse from a JSON string
enterprise_channel_check_name_availability_response_instance = EnterpriseChannelCheckNameAvailabilityResponse.from_json(json)
# print the JSON string representation of the object
print(EnterpriseChannelCheckNameAvailabilityResponse.to_json())

# convert the object into a dict
enterprise_channel_check_name_availability_response_dict = enterprise_channel_check_name_availability_response_instance.to_dict()
# create an instance of EnterpriseChannelCheckNameAvailabilityResponse from a dict
enterprise_channel_check_name_availability_response_from_dict = EnterpriseChannelCheckNameAvailabilityResponse.from_dict(enterprise_channel_check_name_availability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


