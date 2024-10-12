# AppleTestFlightGroupRequest

Apple details for fetching test flight groups from Apple Developer Portal. pass either apple_id or bundle_identifier to get the test flight groups. if both are passed than apple_id will take preference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apple_id** | **str** | apple_id of the app for which test flight groups need to be fetched. | [optional] 
**bundle_identifier** | **str** | apple_id of the app for which test flight groups need to be fetched. | [optional] 
**cookie** | **str** | The 30-day session cookie for multi-factor authentication backed accounts. | [optional] 
**password** | **str** | The password for the Apple Developer account. | [optional] 
**service_connection_id** | **str** | The service_connection_id of the stored Apple credentials instead of username, password. | [optional] 
**team_identifier** | **str** | Identifier of the team to use when logged in. | [optional] 
**username** | **str** | The username for the Apple Developer account. | [optional] 

## Example

```python
from openapi_client.models.apple_test_flight_group_request import AppleTestFlightGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppleTestFlightGroupRequest from a JSON string
apple_test_flight_group_request_instance = AppleTestFlightGroupRequest.from_json(json)
# print the JSON string representation of the object
print(AppleTestFlightGroupRequest.to_json())

# convert the object into a dict
apple_test_flight_group_request_dict = apple_test_flight_group_request_instance.to_dict()
# create an instance of AppleTestFlightGroupRequest from a dict
apple_test_flight_group_request_from_dict = AppleTestFlightGroupRequest.from_dict(apple_test_flight_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


