# GoogleCloudDiscoveryengineV1betaCustomAttribute

A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numbers** | **List[float]** | The numerical values of this custom attribute. For example, &#x60;[2.3, 15.4]&#x60; when the key is \&quot;lengths_cm\&quot;. Exactly one of CustomAttribute.text or CustomAttribute.numbers should be set. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 
**text** | **List[str]** | The textual values of this custom attribute. For example, &#x60;[\&quot;yellow\&quot;, \&quot;green\&quot;]&#x60; when the key is \&quot;color\&quot;. Empty string is not allowed. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. Exactly one of CustomAttribute.text or CustomAttribute.numbers should be set. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_custom_attribute import GoogleCloudDiscoveryengineV1betaCustomAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaCustomAttribute from a JSON string
google_cloud_discoveryengine_v1beta_custom_attribute_instance = GoogleCloudDiscoveryengineV1betaCustomAttribute.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaCustomAttribute.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_custom_attribute_dict = google_cloud_discoveryengine_v1beta_custom_attribute_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaCustomAttribute from a dict
google_cloud_discoveryengine_v1beta_custom_attribute_from_dict = GoogleCloudDiscoveryengineV1betaCustomAttribute.from_dict(google_cloud_discoveryengine_v1beta_custom_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


