# RevisionList

A list of revisions of a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#revisionList\&quot;&#x60;. | [optional] [default to 'drive#revisionList']
**next_page_token** | **str** | The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. | [optional] 
**revisions** | [**List[Revision]**](Revision.md) | The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 

## Example

```python
from openapi_client.models.revision_list import RevisionList

# TODO update the JSON string below
json = "{}"
# create an instance of RevisionList from a JSON string
revision_list_instance = RevisionList.from_json(json)
# print the JSON string representation of the object
print(RevisionList.to_json())

# convert the object into a dict
revision_list_dict = revision_list_instance.to_dict()
# create an instance of RevisionList from a dict
revision_list_from_dict = RevisionList.from_dict(revision_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


