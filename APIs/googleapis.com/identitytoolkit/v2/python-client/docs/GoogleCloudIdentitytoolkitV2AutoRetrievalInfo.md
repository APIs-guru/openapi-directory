# GoogleCloudIdentitytoolkitV2AutoRetrievalInfo

The information required to auto-retrieve an SMS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_signature_hash** | **str** | The Android app&#39;s signature hash for Google Play Service&#39;s SMS Retriever API. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_auto_retrieval_info import GoogleCloudIdentitytoolkitV2AutoRetrievalInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2AutoRetrievalInfo from a JSON string
google_cloud_identitytoolkit_v2_auto_retrieval_info_instance = GoogleCloudIdentitytoolkitV2AutoRetrievalInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2AutoRetrievalInfo.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_auto_retrieval_info_dict = google_cloud_identitytoolkit_v2_auto_retrieval_info_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2AutoRetrievalInfo from a dict
google_cloud_identitytoolkit_v2_auto_retrieval_info_from_dict = GoogleCloudIdentitytoolkitV2AutoRetrievalInfo.from_dict(google_cloud_identitytoolkit_v2_auto_retrieval_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


