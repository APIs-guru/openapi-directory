# CheckNameAvailabilityRequestBody

The request body for a request to Bot Service Management to check availability of a bot name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of the bot for which availability needs to be checked. | [optional] 
**type** | **str** | the type of the bot for which availability needs to be checked | [optional] 

## Example

```python
from openapi_client.models.check_name_availability_request_body import CheckNameAvailabilityRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityRequestBody from a JSON string
check_name_availability_request_body_instance = CheckNameAvailabilityRequestBody.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityRequestBody.to_json())

# convert the object into a dict
check_name_availability_request_body_dict = check_name_availability_request_body_instance.to_dict()
# create an instance of CheckNameAvailabilityRequestBody from a dict
check_name_availability_request_body_from_dict = CheckNameAvailabilityRequestBody.from_dict(check_name_availability_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


