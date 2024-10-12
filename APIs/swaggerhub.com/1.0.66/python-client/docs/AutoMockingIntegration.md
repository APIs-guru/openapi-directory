# AutoMockingIntegration

Configuration details for the [API Auto Mocking](https://support.smartbear.com/swaggerhub/docs/integrations/api-auto-mocking.html) integration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the integration is enabled or disabled | [optional] [default to True]
**id** | **str** | ID of the integration | [optional] [readonly] 
**name** | **str** | The display name of the integration. Must be unique among all integrations configured for the given API version. | 
**config_type** | **str** | Integration type | 
**default_response_type** | **str** | Response content type that the mock server will return if no &#x60;Accept&#x60; header is specified. | [optional] [default to 'json']
**modify** | **bool** | Whether to update the &#x60;host&#x60;/&#x60;servers&#x60; in the API definition to point to the mock server. &#x60;modify&#x60;&#x3D;&#x60;true&#x60; can only be used if the API is _unpublished_. | [optional] [default to True]
**token** | **str** | (For private APIs only.) An arbitrary bearer token that the users will need to send in requests to the mock server. | [optional] 

## Example

```python
from openapi_client.models.auto_mocking_integration import AutoMockingIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of AutoMockingIntegration from a JSON string
auto_mocking_integration_instance = AutoMockingIntegration.from_json(json)
# print the JSON string representation of the object
print(AutoMockingIntegration.to_json())

# convert the object into a dict
auto_mocking_integration_dict = auto_mocking_integration_instance.to_dict()
# create an instance of AutoMockingIntegration from a dict
auto_mocking_integration_from_dict = AutoMockingIntegration.from_dict(auto_mocking_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


