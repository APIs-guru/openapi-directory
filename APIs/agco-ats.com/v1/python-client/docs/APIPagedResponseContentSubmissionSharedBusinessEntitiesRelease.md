# APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[ContentSubmissionSharedBusinessEntitiesRelease]**](ContentSubmissionSharedBusinessEntitiesRelease.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_content_submission_shared_business_entities_release import APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease from a JSON string
api_paged_response_content_submission_shared_business_entities_release_instance = APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease.to_json())

# convert the object into a dict
api_paged_response_content_submission_shared_business_entities_release_dict = api_paged_response_content_submission_shared_business_entities_release_instance.to_dict()
# create an instance of APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease from a dict
api_paged_response_content_submission_shared_business_entities_release_from_dict = APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease.from_dict(api_paged_response_content_submission_shared_business_entities_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


