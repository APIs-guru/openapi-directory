# GoogleCloudApigeeV1SecurityProfileScoringConfig

Security configurations to manage scoring.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the config. | [optional] 
**score_path** | **str** | Path of the component config used for scoring. | [optional] 
**title** | **str** | Title of the config. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_profile_scoring_config import GoogleCloudApigeeV1SecurityProfileScoringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityProfileScoringConfig from a JSON string
google_cloud_apigee_v1_security_profile_scoring_config_instance = GoogleCloudApigeeV1SecurityProfileScoringConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityProfileScoringConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_profile_scoring_config_dict = google_cloud_apigee_v1_security_profile_scoring_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityProfileScoringConfig from a dict
google_cloud_apigee_v1_security_profile_scoring_config_from_dict = GoogleCloudApigeeV1SecurityProfileScoringConfig.from_dict(google_cloud_apigee_v1_security_profile_scoring_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


