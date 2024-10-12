# ContentSubmissionSharedBusinessEntitiesUserContentDefinition

Relationship indicating that a User can manage submissions for the Content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_definition_id** | **int** | The ID of the ContentDefinition. | [optional] 
**user_content_definition_id** | **int** | Read Only. The ID of the User to ContentDefinition relationship. | [optional] 
**user_id** | **int** | The ID of the user. | [optional] 

## Example

```python
from openapi_client.models.content_submission_shared_business_entities_user_content_definition import ContentSubmissionSharedBusinessEntitiesUserContentDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ContentSubmissionSharedBusinessEntitiesUserContentDefinition from a JSON string
content_submission_shared_business_entities_user_content_definition_instance = ContentSubmissionSharedBusinessEntitiesUserContentDefinition.from_json(json)
# print the JSON string representation of the object
print(ContentSubmissionSharedBusinessEntitiesUserContentDefinition.to_json())

# convert the object into a dict
content_submission_shared_business_entities_user_content_definition_dict = content_submission_shared_business_entities_user_content_definition_instance.to_dict()
# create an instance of ContentSubmissionSharedBusinessEntitiesUserContentDefinition from a dict
content_submission_shared_business_entities_user_content_definition_from_dict = ContentSubmissionSharedBusinessEntitiesUserContentDefinition.from_dict(content_submission_shared_business_entities_user_content_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


