# AppleMappingTestFlightGroups200ResponseInner

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
from openapi_client.models.apple_mapping_test_flight_groups200_response_inner import AppleMappingTestFlightGroups200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppleMappingTestFlightGroups200ResponseInner from a JSON string
apple_mapping_test_flight_groups200_response_inner_instance = AppleMappingTestFlightGroups200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(AppleMappingTestFlightGroups200ResponseInner.to_json())

# convert the object into a dict
apple_mapping_test_flight_groups200_response_inner_dict = apple_mapping_test_flight_groups200_response_inner_instance.to_dict()
# create an instance of AppleMappingTestFlightGroups200ResponseInner from a dict
apple_mapping_test_flight_groups200_response_inner_from_dict = AppleMappingTestFlightGroups200ResponseInner.from_dict(apple_mapping_test_flight_groups200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


