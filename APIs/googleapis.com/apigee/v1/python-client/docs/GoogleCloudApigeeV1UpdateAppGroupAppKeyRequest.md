# GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest

Request for UpdateAppGroupAppKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Approve or revoke the consumer key by setting this value to &#x60;approve&#x60; or &#x60;revoke&#x60; respectively. The &#x60;Content-Type&#x60; header, if set, must be set to &#x60;application/octet-stream&#x60;, with empty body. | [optional] 
**api_products** | **List[str]** | The list of API products that will be associated with the credential. This list will be appended to the existing list of associated API Products for this App Key. Duplicates will be ignored. | [optional] 
**app_group_app_key** | [**GoogleCloudApigeeV1AppGroupAppKey**](GoogleCloudApigeeV1AppGroupAppKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_update_app_group_app_key_request import GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest from a JSON string
google_cloud_apigee_v1_update_app_group_app_key_request_instance = GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_update_app_group_app_key_request_dict = google_cloud_apigee_v1_update_app_group_app_key_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest from a dict
google_cloud_apigee_v1_update_app_group_app_key_request_from_dict = GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest.from_dict(google_cloud_apigee_v1_update_app_group_app_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


