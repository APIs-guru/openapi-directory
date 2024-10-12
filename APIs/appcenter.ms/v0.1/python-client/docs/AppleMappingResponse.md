# AppleMappingResponse

Apple Mapping Request Type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | ID of the apple application in Mobile Center | [optional] 
**apple_id** | **str** | ID of the apple application in apple store | [optional] 
**service_connection_id** | **str** | Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center. | [optional] 
**team_identifier** | **str** | ID of the Team associated with the app in apple store | [optional] 

## Example

```python
from openapi_client.models.apple_mapping_response import AppleMappingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppleMappingResponse from a JSON string
apple_mapping_response_instance = AppleMappingResponse.from_json(json)
# print the JSON string representation of the object
print(AppleMappingResponse.to_json())

# convert the object into a dict
apple_mapping_response_dict = apple_mapping_response_instance.to_dict()
# create an instance of AppleMappingResponse from a dict
apple_mapping_response_from_dict = AppleMappingResponse.from_dict(apple_mapping_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


