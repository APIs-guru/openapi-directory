# GetAllVerificationsResponseListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**verified** | **bool** |  | [optional] 
**verified_at** | **datetime** |  | [optional] 
**verified_by** | **str** |  | [optional] 
**sms** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_all_verifications_response_list_inner import GetAllVerificationsResponseListInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllVerificationsResponseListInner from a JSON string
get_all_verifications_response_list_inner_instance = GetAllVerificationsResponseListInner.from_json(json)
# print the JSON string representation of the object
print(GetAllVerificationsResponseListInner.to_json())

# convert the object into a dict
get_all_verifications_response_list_inner_dict = get_all_verifications_response_list_inner_instance.to_dict()
# create an instance of GetAllVerificationsResponseListInner from a dict
get_all_verifications_response_list_inner_from_dict = GetAllVerificationsResponseListInner.from_dict(get_all_verifications_response_list_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


