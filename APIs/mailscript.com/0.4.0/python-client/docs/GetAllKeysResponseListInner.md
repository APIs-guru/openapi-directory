# GetAllKeysResponseListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**created_by** | **str** |  | 
**id** | **str** |  | 
**name** | **str** |  | 
**read** | **bool** |  | 
**write** | **bool** |  | 

## Example

```python
from openapi_client.models.get_all_keys_response_list_inner import GetAllKeysResponseListInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllKeysResponseListInner from a JSON string
get_all_keys_response_list_inner_instance = GetAllKeysResponseListInner.from_json(json)
# print the JSON string representation of the object
print(GetAllKeysResponseListInner.to_json())

# convert the object into a dict
get_all_keys_response_list_inner_dict = get_all_keys_response_list_inner_instance.to_dict()
# create an instance of GetAllKeysResponseListInner from a dict
get_all_keys_response_list_inner_from_dict = GetAllKeysResponseListInner.from_dict(get_all_keys_response_list_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


