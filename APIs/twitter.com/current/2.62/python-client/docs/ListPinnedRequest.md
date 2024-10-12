# ListPinnedRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_id** | **str** | The unique identifier of this List. | 

## Example

```python
from openapi_client.models.list_pinned_request import ListPinnedRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListPinnedRequest from a JSON string
list_pinned_request_instance = ListPinnedRequest.from_json(json)
# print the JSON string representation of the object
print(ListPinnedRequest.to_json())

# convert the object into a dict
list_pinned_request_dict = list_pinned_request_instance.to_dict()
# create an instance of ListPinnedRequest from a dict
list_pinned_request_from_dict = ListPinnedRequest.from_dict(list_pinned_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


