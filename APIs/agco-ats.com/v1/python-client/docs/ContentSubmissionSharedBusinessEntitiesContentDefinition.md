# ContentSubmissionSharedBusinessEntitiesContentDefinition

The definition of the content for submission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute]**](ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute.md) | Attributes of this ContentDefinition | [optional] 
**content_definition_id** | **int** | The ID of this content definition. | [optional] 
**description** | **str** | The description used on the package type in the AGCO Update System | 
**name** | **str** | The name of this content. Name must be valid for Attribute on PackageType. | [optional] 
**package_type_id** | **str** | Read Only. The ID of the package type used for this content. | [optional] 
**type_id** | **int** | The type of content. | [optional] 

## Example

```python
from openapi_client.models.content_submission_shared_business_entities_content_definition import ContentSubmissionSharedBusinessEntitiesContentDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ContentSubmissionSharedBusinessEntitiesContentDefinition from a JSON string
content_submission_shared_business_entities_content_definition_instance = ContentSubmissionSharedBusinessEntitiesContentDefinition.from_json(json)
# print the JSON string representation of the object
print(ContentSubmissionSharedBusinessEntitiesContentDefinition.to_json())

# convert the object into a dict
content_submission_shared_business_entities_content_definition_dict = content_submission_shared_business_entities_content_definition_instance.to_dict()
# create an instance of ContentSubmissionSharedBusinessEntitiesContentDefinition from a dict
content_submission_shared_business_entities_content_definition_from_dict = ContentSubmissionSharedBusinessEntitiesContentDefinition.from_dict(content_submission_shared_business_entities_content_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


