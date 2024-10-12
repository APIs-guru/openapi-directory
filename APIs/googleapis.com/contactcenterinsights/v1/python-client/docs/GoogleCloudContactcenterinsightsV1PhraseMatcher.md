# GoogleCloudContactcenterinsightsV1PhraseMatcher

The phrase matcher resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_update_time** | **str** | Output only. The most recent time at which the activation status was updated. | [optional] [readonly] 
**active** | **bool** | Applies the phrase matcher only when it is active. | [optional] 
**display_name** | **str** | The human-readable name of the phrase matcher. | [optional] 
**name** | **str** | The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher} | [optional] 
**phrase_match_rule_groups** | [**List[GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup]**](GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup.md) | A list of phase match rule groups that are included in this matcher. | [optional] 
**revision_create_time** | **str** | Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added. | [optional] [readonly] 
**revision_id** | **str** | Output only. Immutable. The revision ID of the phrase matcher. A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567 | [optional] [readonly] 
**role_match** | **str** | The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript. | [optional] 
**type** | **str** | Required. The type of this phrase matcher. | [optional] 
**update_time** | **str** | Output only. The most recent time at which the phrase matcher was updated. | [optional] [readonly] 
**version_tag** | **str** | The customized version tag to use for the phrase matcher. If not specified, it will default to &#x60;revision_id&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_phrase_matcher import GoogleCloudContactcenterinsightsV1PhraseMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1PhraseMatcher from a JSON string
google_cloud_contactcenterinsights_v1_phrase_matcher_instance = GoogleCloudContactcenterinsightsV1PhraseMatcher.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1PhraseMatcher.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_phrase_matcher_dict = google_cloud_contactcenterinsights_v1_phrase_matcher_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1PhraseMatcher from a dict
google_cloud_contactcenterinsights_v1_phrase_matcher_from_dict = GoogleCloudContactcenterinsightsV1PhraseMatcher.from_dict(google_cloud_contactcenterinsights_v1_phrase_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


