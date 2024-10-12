# AppleTestFlightGroupsResponse

Apple Test Flight Groups Response Type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apple_id** | **float** | apple id of the group. | [optional] 
**id** | **str** | id of the group. | [optional] 
**name** | **str** | name of the group. | [optional] 
**provider_id** | **float** | provider id of the group. | [optional] 

## Example

```python
from openapi_client.models.apple_test_flight_groups_response import AppleTestFlightGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppleTestFlightGroupsResponse from a JSON string
apple_test_flight_groups_response_instance = AppleTestFlightGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(AppleTestFlightGroupsResponse.to_json())

# convert the object into a dict
apple_test_flight_groups_response_dict = apple_test_flight_groups_response_instance.to_dict()
# create an instance of AppleTestFlightGroupsResponse from a dict
apple_test_flight_groups_response_from_dict = AppleTestFlightGroupsResponse.from_dict(apple_test_flight_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


