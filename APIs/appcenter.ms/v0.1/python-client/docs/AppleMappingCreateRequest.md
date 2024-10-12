# AppleMappingCreateRequest

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
from openapi_client.models.apple_mapping_create_request import AppleMappingCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppleMappingCreateRequest from a JSON string
apple_mapping_create_request_instance = AppleMappingCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppleMappingCreateRequest.to_json())

# convert the object into a dict
apple_mapping_create_request_dict = apple_mapping_create_request_instance.to_dict()
# create an instance of AppleMappingCreateRequest from a dict
apple_mapping_create_request_from_dict = AppleMappingCreateRequest.from_dict(apple_mapping_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


