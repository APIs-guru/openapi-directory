# AppleMappingRequest

Apple Mapping Request Type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apple_id** | **str** | ID of the apple application in apple store, takes precedence over bundle_identifier when both are provided | [optional] 
**bundle_identifier** | **str** | Bundle Identifier of the apple package | [optional] 
**service_connection_id** | **str** | Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center. | 
**team_identifier** | **str** | ID of the Team associated with the app in apple store | 

## Example

```python
from openapi_client.models.apple_mapping_request import AppleMappingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppleMappingRequest from a JSON string
apple_mapping_request_instance = AppleMappingRequest.from_json(json)
# print the JSON string representation of the object
print(AppleMappingRequest.to_json())

# convert the object into a dict
apple_mapping_request_dict = apple_mapping_request_instance.to_dict()
# create an instance of AppleMappingRequest from a dict
apple_mapping_request_from_dict = AppleMappingRequest.from_dict(apple_mapping_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


