# StoreCheckStatusJsonGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**PartnerStoreStatusStatus**](PartnerStoreStatusStatus.md) |  | [optional] 
**store** | [**NewPartnerStoreStore**](NewPartnerStoreStore.md) |  | [optional] 

## Example

```python
from openapi_client.models.store_check_status_json_get200_response import StoreCheckStatusJsonGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of StoreCheckStatusJsonGet200Response from a JSON string
store_check_status_json_get200_response_instance = StoreCheckStatusJsonGet200Response.from_json(json)
# print the JSON string representation of the object
print(StoreCheckStatusJsonGet200Response.to_json())

# convert the object into a dict
store_check_status_json_get200_response_dict = store_check_status_json_get200_response_instance.to_dict()
# create an instance of StoreCheckStatusJsonGet200Response from a dict
store_check_status_json_get200_response_from_dict = StoreCheckStatusJsonGet200Response.from_dict(store_check_status_json_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


