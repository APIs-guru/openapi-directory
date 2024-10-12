# ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute

The definition of the content for submission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_submission_id** | **int** | The ID of the content submission to which this attribute belongs. | [optional] 
**id** | **int** | The ID of this attribute. | [optional] 
**name** | **str** | The name of this Attribute. | 
**value** | **str** | The value of this Attribute | [optional] 

## Example

```python
from openapi_client.models.content_submission_shared_business_entities_content_submission_attribute import ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute from a JSON string
content_submission_shared_business_entities_content_submission_attribute_instance = ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute.from_json(json)
# print the JSON string representation of the object
print(ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute.to_json())

# convert the object into a dict
content_submission_shared_business_entities_content_submission_attribute_dict = content_submission_shared_business_entities_content_submission_attribute_instance.to_dict()
# create an instance of ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute from a dict
content_submission_shared_business_entities_content_submission_attribute_from_dict = ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute.from_dict(content_submission_shared_business_entities_content_submission_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


