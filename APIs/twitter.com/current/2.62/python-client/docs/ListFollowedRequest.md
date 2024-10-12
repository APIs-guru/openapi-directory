# ListFollowedRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_id** | **str** | The unique identifier of this List. | 

## Example

```python
from openapi_client.models.list_followed_request import ListFollowedRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListFollowedRequest from a JSON string
list_followed_request_instance = ListFollowedRequest.from_json(json)
# print the JSON string representation of the object
print(ListFollowedRequest.to_json())

# convert the object into a dict
list_followed_request_dict = list_followed_request_instance.to_dict()
# create an instance of ListFollowedRequest from a dict
list_followed_request_from_dict = ListFollowedRequest.from_dict(list_followed_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


