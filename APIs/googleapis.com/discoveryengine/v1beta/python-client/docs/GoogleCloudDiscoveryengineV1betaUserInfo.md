# GoogleCloudDiscoveryengineV1betaUserInfo

Information of an end user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_agent** | **str** | User agent as included in the HTTP header. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if UserEvent.direct_user_request is set. | [optional] 
**user_id** | **str** | Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don&#39;t set for anonymous users. Always use a hashed value for this ID. Don&#39;t set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_user_info import GoogleCloudDiscoveryengineV1betaUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaUserInfo from a JSON string
google_cloud_discoveryengine_v1beta_user_info_instance = GoogleCloudDiscoveryengineV1betaUserInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaUserInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_user_info_dict = google_cloud_discoveryengine_v1beta_user_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaUserInfo from a dict
google_cloud_discoveryengine_v1beta_user_info_from_dict = GoogleCloudDiscoveryengineV1betaUserInfo.from_dict(google_cloud_discoveryengine_v1beta_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


