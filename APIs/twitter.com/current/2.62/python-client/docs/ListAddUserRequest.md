# ListAddUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 

## Example

```python
from openapi_client.models.list_add_user_request import ListAddUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListAddUserRequest from a JSON string
list_add_user_request_instance = ListAddUserRequest.from_json(json)
# print the JSON string representation of the object
print(ListAddUserRequest.to_json())

# convert the object into a dict
list_add_user_request_dict = list_add_user_request_instance.to_dict()
# create an instance of ListAddUserRequest from a dict
list_add_user_request_from_dict = ListAddUserRequest.from_dict(list_add_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


