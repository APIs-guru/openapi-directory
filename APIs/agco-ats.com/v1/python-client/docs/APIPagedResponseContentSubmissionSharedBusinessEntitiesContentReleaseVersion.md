# APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[ContentSubmissionSharedBusinessEntitiesContentReleaseVersion]**](ContentSubmissionSharedBusinessEntitiesContentReleaseVersion.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_content_submission_shared_business_entities_content_release_version import APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion from a JSON string
api_paged_response_content_submission_shared_business_entities_content_release_version_instance = APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion.to_json())

# convert the object into a dict
api_paged_response_content_submission_shared_business_entities_content_release_version_dict = api_paged_response_content_submission_shared_business_entities_content_release_version_instance.to_dict()
# create an instance of APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion from a dict
api_paged_response_content_submission_shared_business_entities_content_release_version_from_dict = APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion.from_dict(api_paged_response_content_submission_shared_business_entities_content_release_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


