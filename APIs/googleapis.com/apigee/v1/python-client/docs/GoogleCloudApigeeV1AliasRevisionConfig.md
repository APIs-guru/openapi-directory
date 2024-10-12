# GoogleCloudApigeeV1AliasRevisionConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the alias file. For example, a Google Cloud Storage URI. | [optional] 
**name** | **str** | Name of the alias revision included in the keystore in the following format: &#x60;organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}/revisions/{rev}&#x60; | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_alias_revision_config import GoogleCloudApigeeV1AliasRevisionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AliasRevisionConfig from a JSON string
google_cloud_apigee_v1_alias_revision_config_instance = GoogleCloudApigeeV1AliasRevisionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AliasRevisionConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_alias_revision_config_dict = google_cloud_apigee_v1_alias_revision_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AliasRevisionConfig from a dict
google_cloud_apigee_v1_alias_revision_config_from_dict = GoogleCloudApigeeV1AliasRevisionConfig.from_dict(google_cloud_apigee_v1_alias_revision_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


