# GoogleCloudApigeeV1AppGroupAppKey

AppGroupAppKey contains all the information associated with the credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_products** | [**List[GoogleCloudApigeeV1APIProductAssociation]**](GoogleCloudApigeeV1APIProductAssociation.md) | Output only. List of API products and its status for which the credential can be used. **Note**: Use UpdateAppGroupAppKeyApiProductRequest API to make the association after the consumer key and secret are created. | [optional] [readonly] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | List of attributes associated with the credential. | [optional] 
**consumer_key** | **str** | Immutable. Consumer key. | [optional] 
**consumer_secret** | **str** | Secret key. | [optional] 
**expires_at** | **str** | Output only. Time the AppGroup app expires in milliseconds since epoch. | [optional] [readonly] 
**expires_in_seconds** | **str** | Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default value of &#x60;-1&#x60;, the API key never expires. The expiration time can&#39;t be updated after it is set. | [optional] 
**issued_at** | **str** | Output only. Time the AppGroup app was created in milliseconds since epoch. | [optional] [readonly] 
**scopes** | **List[str]** | Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app. | [optional] 
**status** | **str** | Status of the credential. Valid values include &#x60;approved&#x60; or &#x60;revoked&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_app_group_app_key import GoogleCloudApigeeV1AppGroupAppKey

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AppGroupAppKey from a JSON string
google_cloud_apigee_v1_app_group_app_key_instance = GoogleCloudApigeeV1AppGroupAppKey.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AppGroupAppKey.to_json())

# convert the object into a dict
google_cloud_apigee_v1_app_group_app_key_dict = google_cloud_apigee_v1_app_group_app_key_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AppGroupAppKey from a dict
google_cloud_apigee_v1_app_group_app_key_from_dict = GoogleCloudApigeeV1AppGroupAppKey.from_dict(google_cloud_apigee_v1_app_group_app_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


