# GoogleCloudApigeeV1DeveloperAppKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_products** | **List[object]** | List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. | [optional] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | List of attributes associated with the credential. | [optional] 
**consumer_key** | **str** | Consumer key. | [optional] 
**consumer_secret** | **str** | Secret key. | [optional] 
**expires_at** | **str** | Time the developer app expires in milliseconds since epoch. | [optional] 
**expires_in_seconds** | **str** | Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of &#x60;-1&#x60;, the API key never expires. The expiration time can&#39;t be updated after it is set. | [optional] 
**issued_at** | **str** | Time the developer app was created in milliseconds since epoch. | [optional] 
**scopes** | **List[str]** | Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app. | [optional] 
**status** | **str** | Status of the credential. Valid values include &#x60;approved&#x60; or &#x60;revoked&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_developer_app_key import GoogleCloudApigeeV1DeveloperAppKey

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeveloperAppKey from a JSON string
google_cloud_apigee_v1_developer_app_key_instance = GoogleCloudApigeeV1DeveloperAppKey.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeveloperAppKey.to_json())

# convert the object into a dict
google_cloud_apigee_v1_developer_app_key_dict = google_cloud_apigee_v1_developer_app_key_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeveloperAppKey from a dict
google_cloud_apigee_v1_developer_app_key_from_dict = GoogleCloudApigeeV1DeveloperAppKey.from_dict(google_cloud_apigee_v1_developer_app_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


