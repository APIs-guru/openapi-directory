# AccessKeyListResponseAccessKeysInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** | Account name of creator. | [optional] 
**created_time** | **float** | Created time of access key | [optional] 
**description** | **str** | Description of access key | [optional] 
**expires** | **float** | Time of expiry of access key | [optional] 
**friendly_name** | **str** | Friendly name of access key | [optional] 
**id** | **str** | Id of accessKey | [optional] 
**is_session** | **bool** | Legacy property which indicate if accessKey was created from session | [optional] 
**name** | **str** | Key of access key | [optional] 

## Example

```python
from openapi_client.models.access_key_list_response_access_keys_inner import AccessKeyListResponseAccessKeysInner

# TODO update the JSON string below
json = "{}"
# create an instance of AccessKeyListResponseAccessKeysInner from a JSON string
access_key_list_response_access_keys_inner_instance = AccessKeyListResponseAccessKeysInner.from_json(json)
# print the JSON string representation of the object
print(AccessKeyListResponseAccessKeysInner.to_json())

# convert the object into a dict
access_key_list_response_access_keys_inner_dict = access_key_list_response_access_keys_inner_instance.to_dict()
# create an instance of AccessKeyListResponseAccessKeysInner from a dict
access_key_list_response_access_keys_inner_from_dict = AccessKeyListResponseAccessKeysInner.from_dict(access_key_list_response_access_keys_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


