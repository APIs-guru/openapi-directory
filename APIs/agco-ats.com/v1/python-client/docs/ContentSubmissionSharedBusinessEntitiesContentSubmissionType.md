# ContentSubmissionSharedBusinessEntitiesContentSubmissionType

A type of content available for submission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_template** | **str** | A template for the Attribute from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName} | [optional] 
**build_definition_id** | **int** | The ID of the Azure DevOps Build Definition for which to create a Build. Either &#39;BuildDefinitionID&#39; or &#39;JobID&#39; is required. | [optional] 
**category_template** | **str** | A template for the category from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName} | [optional] 
**description** | **str** | A description for the Content Submission Type | 
**enabled** | **bool** | Indicates whether this submission type is available to be used | [optional] 
**id** | **int** | The ID of the Content Submission Type | [optional] 
**inventory_package_id** | **str** | The ID of the Inventory Package from which to read the version of the package installed. | [optional] 
**job_id** | **int** | The ID of the JobDefinition for which to initiate a Job. A value of &#39;0&#39; will cause a submission to fail. Either &#39;BuildDefinitionID&#39; or &#39;JobID&#39; is required. | [optional] 
**name** | **str** | The Name of the Content Submission Type | 
**release_notes_description** | **str** | A description of how release notes for this Content Submission Type are used | [optional] 

## Example

```python
from openapi_client.models.content_submission_shared_business_entities_content_submission_type import ContentSubmissionSharedBusinessEntitiesContentSubmissionType

# TODO update the JSON string below
json = "{}"
# create an instance of ContentSubmissionSharedBusinessEntitiesContentSubmissionType from a JSON string
content_submission_shared_business_entities_content_submission_type_instance = ContentSubmissionSharedBusinessEntitiesContentSubmissionType.from_json(json)
# print the JSON string representation of the object
print(ContentSubmissionSharedBusinessEntitiesContentSubmissionType.to_json())

# convert the object into a dict
content_submission_shared_business_entities_content_submission_type_dict = content_submission_shared_business_entities_content_submission_type_instance.to_dict()
# create an instance of ContentSubmissionSharedBusinessEntitiesContentSubmissionType from a dict
content_submission_shared_business_entities_content_submission_type_from_dict = ContentSubmissionSharedBusinessEntitiesContentSubmissionType.from_dict(content_submission_shared_business_entities_content_submission_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


