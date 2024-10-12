# APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[ContentSubmissionSharedBusinessEntitiesUserContentDefinition]**](ContentSubmissionSharedBusinessEntitiesUserContentDefinition.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_content_submission_shared_business_entities_user_content_definition import APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition from a JSON string
api_paged_response_content_submission_shared_business_entities_user_content_definition_instance = APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition.to_json())

# convert the object into a dict
api_paged_response_content_submission_shared_business_entities_user_content_definition_dict = api_paged_response_content_submission_shared_business_entities_user_content_definition_instance.to_dict()
# create an instance of APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition from a dict
api_paged_response_content_submission_shared_business_entities_user_content_definition_from_dict = APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition.from_dict(api_paged_response_content_submission_shared_business_entities_user_content_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


