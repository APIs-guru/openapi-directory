# ContentSubmissionSharedBusinessEntitiesRelease

Release class

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_date** | **datetime** | Build Date | [optional] 
**bundle_ids** | **List[str]** | IDs of AUC Bundles associated with this Release. | [optional] 
**release_date** | **datetime** | Release Date | [optional] 
**release_id** | **int** | Release ID | [optional] 
**release_number** | **str** | Release Number | [optional] 
**visible** | **bool** | Visible | [optional] 

## Example

```python
from openapi_client.models.content_submission_shared_business_entities_release import ContentSubmissionSharedBusinessEntitiesRelease

# TODO update the JSON string below
json = "{}"
# create an instance of ContentSubmissionSharedBusinessEntitiesRelease from a JSON string
content_submission_shared_business_entities_release_instance = ContentSubmissionSharedBusinessEntitiesRelease.from_json(json)
# print the JSON string representation of the object
print(ContentSubmissionSharedBusinessEntitiesRelease.to_json())

# convert the object into a dict
content_submission_shared_business_entities_release_dict = content_submission_shared_business_entities_release_instance.to_dict()
# create an instance of ContentSubmissionSharedBusinessEntitiesRelease from a dict
content_submission_shared_business_entities_release_from_dict = ContentSubmissionSharedBusinessEntitiesRelease.from_dict(content_submission_shared_business_entities_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


