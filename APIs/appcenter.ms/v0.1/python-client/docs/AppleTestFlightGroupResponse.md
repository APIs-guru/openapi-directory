# AppleTestFlightGroupResponse

test flight group details for the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | true if group is in active state. | [optional] 
**app_adam_id** | **float** | apple id of the group. | [optional] 
**id** | **str** | id of the group. | [optional] 
**is_internal_group** | **bool** | true if the group is an internal group. | [optional] 
**name** | **str** | name of the group. | [optional] 
**provider_id** | **float** | provider id of the group. | [optional] 

## Example

```python
from openapi_client.models.apple_test_flight_group_response import AppleTestFlightGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppleTestFlightGroupResponse from a JSON string
apple_test_flight_group_response_instance = AppleTestFlightGroupResponse.from_json(json)
# print the JSON string representation of the object
print(AppleTestFlightGroupResponse.to_json())

# convert the object into a dict
apple_test_flight_group_response_dict = apple_test_flight_group_response_instance.to_dict()
# create an instance of AppleTestFlightGroupResponse from a dict
apple_test_flight_group_response_from_dict = AppleTestFlightGroupResponse.from_dict(apple_test_flight_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


