# CheckNameAvailabilityResponseBody

The response body returned for a request to Bot Service Management to check availability of a bot name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | additional message from the bot management api showing why a bot name is not available | [optional] 
**valid** | **bool** | indicates if the bot name is valid. | [optional] 

## Example

```python
from openapi_client.models.check_name_availability_response_body import CheckNameAvailabilityResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityResponseBody from a JSON string
check_name_availability_response_body_instance = CheckNameAvailabilityResponseBody.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityResponseBody.to_json())

# convert the object into a dict
check_name_availability_response_body_dict = check_name_availability_response_body_instance.to_dict()
# create an instance of CheckNameAvailabilityResponseBody from a dict
check_name_availability_response_body_from_dict = CheckNameAvailabilityResponseBody.from_dict(check_name_availability_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


