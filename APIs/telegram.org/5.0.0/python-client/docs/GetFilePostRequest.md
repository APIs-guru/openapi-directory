# GetFilePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** | File identifier to get info about | 

## Example

```python
from openapi_client.models.get_file_post_request import GetFilePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetFilePostRequest from a JSON string
get_file_post_request_instance = GetFilePostRequest.from_json(json)
# print the JSON string representation of the object
print(GetFilePostRequest.to_json())

# convert the object into a dict
get_file_post_request_dict = get_file_post_request_instance.to_dict()
# create an instance of GetFilePostRequest from a dict
get_file_post_request_from_dict = GetFilePostRequest.from_dict(get_file_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


