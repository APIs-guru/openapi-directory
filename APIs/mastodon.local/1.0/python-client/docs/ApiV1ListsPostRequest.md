# ApiV1ListsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replies_policy** | **str** | Enumerable oneOf followed list none. Defaults to list. | [optional] [default to 'list']
**title** | **str** | The title of the list to be created. | 

## Example

```python
from openapi_client.models.api_v1_lists_post_request import ApiV1ListsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1ListsPostRequest from a JSON string
api_v1_lists_post_request_instance = ApiV1ListsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1ListsPostRequest.to_json())

# convert the object into a dict
api_v1_lists_post_request_dict = api_v1_lists_post_request_instance.to_dict()
# create an instance of ApiV1ListsPostRequest from a dict
api_v1_lists_post_request_from_dict = ApiV1ListsPostRequest.from_dict(api_v1_lists_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


