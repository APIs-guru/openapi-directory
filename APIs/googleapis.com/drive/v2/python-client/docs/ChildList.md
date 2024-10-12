# ChildList

A list of children of a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The ETag of the list. | [optional] 
**items** | [**List[ChildReference]**](ChildReference.md) | The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 
**kind** | **str** | This is always &#x60;drive#childList&#x60;. | [optional] [default to 'drive#childList']
**next_link** | **str** | A link to the next page of children. | [optional] 
**next_page_token** | **str** | The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. | [optional] 
**self_link** | **str** | A link back to this list. | [optional] 

## Example

```python
from openapi_client.models.child_list import ChildList

# TODO update the JSON string below
json = "{}"
# create an instance of ChildList from a JSON string
child_list_instance = ChildList.from_json(json)
# print the JSON string representation of the object
print(ChildList.to_json())

# convert the object into a dict
child_list_dict = child_list_instance.to_dict()
# create an instance of ChildList from a dict
child_list_from_dict = ChildList.from_dict(child_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


