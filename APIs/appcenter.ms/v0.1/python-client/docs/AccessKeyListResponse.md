# AccessKeyListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_keys** | [**List[AccessKeyListResponseAccessKeysInner]**](AccessKeyListResponseAccessKeysInner.md) | Array containing the list of existing AccessKeys | [optional] 

## Example

```python
from openapi_client.models.access_key_list_response import AccessKeyListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccessKeyListResponse from a JSON string
access_key_list_response_instance = AccessKeyListResponse.from_json(json)
# print the JSON string representation of the object
print(AccessKeyListResponse.to_json())

# convert the object into a dict
access_key_list_response_dict = access_key_list_response_instance.to_dict()
# create an instance of AccessKeyListResponse from a dict
access_key_list_response_from_dict = AccessKeyListResponse.from_dict(access_key_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


