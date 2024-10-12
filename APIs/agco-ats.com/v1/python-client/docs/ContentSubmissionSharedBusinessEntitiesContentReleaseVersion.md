# ContentSubmissionSharedBusinessEntitiesContentReleaseVersion

ContentReleaseVersion class

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_definition_id** | **int** | ContentDefinitionID | [optional] 
**content_release_id** | **int** | ContentReleaseID | [optional] 
**deleted** | **bool** | deleted flag | [optional] 
**publisher_user_id** | **int** | PublisherUser ID | [optional] 
**release_id** | **int** | rele4ase Id | [optional] 
**test_report_url** | **str** | The URL at which test reports for this content can be found | [optional] 
**updated_date** | **datetime** | Updated Date | [optional] 
**version** | **int** | version | [optional] 

## Example

```python
from openapi_client.models.content_submission_shared_business_entities_content_release_version import ContentSubmissionSharedBusinessEntitiesContentReleaseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ContentSubmissionSharedBusinessEntitiesContentReleaseVersion from a JSON string
content_submission_shared_business_entities_content_release_version_instance = ContentSubmissionSharedBusinessEntitiesContentReleaseVersion.from_json(json)
# print the JSON string representation of the object
print(ContentSubmissionSharedBusinessEntitiesContentReleaseVersion.to_json())

# convert the object into a dict
content_submission_shared_business_entities_content_release_version_dict = content_submission_shared_business_entities_content_release_version_instance.to_dict()
# create an instance of ContentSubmissionSharedBusinessEntitiesContentReleaseVersion from a dict
content_submission_shared_business_entities_content_release_version_from_dict = ContentSubmissionSharedBusinessEntitiesContentReleaseVersion.from_dict(content_submission_shared_business_entities_content_release_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


