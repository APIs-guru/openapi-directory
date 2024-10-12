# GoogleCloudApigeeV1Keystore

Datastore for Certificates and Aliases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | **List[str]** | Output only. Aliases in this keystore. | [optional] [readonly] 
**name** | **str** | Required. Resource ID for this keystore. Values must match the regular expression &#x60;[\\w[:space:].-]{1,255}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_keystore import GoogleCloudApigeeV1Keystore

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Keystore from a JSON string
google_cloud_apigee_v1_keystore_instance = GoogleCloudApigeeV1Keystore.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Keystore.to_json())

# convert the object into a dict
google_cloud_apigee_v1_keystore_dict = google_cloud_apigee_v1_keystore_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Keystore from a dict
google_cloud_apigee_v1_keystore_from_dict = GoogleCloudApigeeV1Keystore.from_dict(google_cloud_apigee_v1_keystore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


