# GoogleCloudApigeeV1KeystoreConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | [**List[GoogleCloudApigeeV1AliasRevisionConfig]**](GoogleCloudApigeeV1AliasRevisionConfig.md) | Aliases in the keystore. | [optional] 
**name** | **str** | Resource name in the following format: &#x60;organizations/{org}/environments/{env}/keystores/{keystore}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_keystore_config import GoogleCloudApigeeV1KeystoreConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1KeystoreConfig from a JSON string
google_cloud_apigee_v1_keystore_config_instance = GoogleCloudApigeeV1KeystoreConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1KeystoreConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_keystore_config_dict = google_cloud_apigee_v1_keystore_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1KeystoreConfig from a dict
google_cloud_apigee_v1_keystore_config_from_dict = GoogleCloudApigeeV1KeystoreConfig.from_dict(google_cloud_apigee_v1_keystore_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


