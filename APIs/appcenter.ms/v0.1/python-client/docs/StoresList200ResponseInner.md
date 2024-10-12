# StoresList200ResponseInner

ExternalStoreResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** | The ID of the principal that created the store. | [optional] 
**created_by_principal_type** | **str** | The type of the principal that created the store. | [optional] 
**id** | **str** | Store id | [optional] 
**intune_details** | [**StoresList200ResponseInnerIntuneDetails**](StoresList200ResponseInnerIntuneDetails.md) |  | [optional] 
**name** | **str** | Store Name | [optional] 
**service_connection_id** | **str** | Id for the shared service connection. In case of Apple / GooglePlay stores, this connection will be used to connect to the Apple / Google stores in App Center. | [optional] 
**track** | **str** | Store track | [optional] 
**type** | **str** | Store Type | [optional] 

## Example

```python
from openapi_client.models.stores_list200_response_inner import StoresList200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of StoresList200ResponseInner from a JSON string
stores_list200_response_inner_instance = StoresList200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(StoresList200ResponseInner.to_json())

# convert the object into a dict
stores_list200_response_inner_dict = stores_list200_response_inner_instance.to_dict()
# create an instance of StoresList200ResponseInner from a dict
stores_list200_response_inner_from_dict = StoresList200ResponseInner.from_dict(stores_list200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


