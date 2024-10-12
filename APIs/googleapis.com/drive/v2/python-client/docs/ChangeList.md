# ChangeList

A list of changes for a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The ETag of the list. | [optional] 
**items** | [**List[Change]**](Change.md) | The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 
**kind** | **str** | This is always &#x60;drive#changeList&#x60;. | [optional] [default to 'drive#changeList']
**largest_change_id** | **str** | The current largest change ID. | [optional] 
**new_start_page_token** | **str** | The starting page token for future changes. This will be present only if the end of the current changes list has been reached. | [optional] 
**next_link** | **str** | A link to the next page of changes. | [optional] 
**next_page_token** | **str** | The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. | [optional] 
**self_link** | **str** | A link back to this list. | [optional] 

## Example

```python
from openapi_client.models.change_list import ChangeList

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeList from a JSON string
change_list_instance = ChangeList.from_json(json)
# print the JSON string representation of the object
print(ChangeList.to_json())

# convert the object into a dict
change_list_dict = change_list_instance.to_dict()
# create an instance of ChangeList from a dict
change_list_from_dict = ChangeList.from_dict(change_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


