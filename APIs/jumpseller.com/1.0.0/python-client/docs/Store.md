# Store


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**StoreAddress**](StoreAddress.md) |  | [optional] 
**code** | **str** | Store Code | [optional] 
**country** | **str** | Store Country | [optional] 
**currency** | **str** | Store Currency | [optional] 
**email** | **str** | Store Admin Email | [optional] 
**hooks_token** | **str** | Store Hooks Auth token | [optional] 
**logo** | **str** | Store Logo URL | [optional] 
**name** | **str** | Store Name | [optional] 
**timezone** | **str** | Store Timezone | [optional] 
**url** | **str** | Store URL | [optional] 
**weight_unit** | **str** | Store Weight Unit | [optional] 

## Example

```python
from openapi_client.models.store import Store

# TODO update the JSON string below
json = "{}"
# create an instance of Store from a JSON string
store_instance = Store.from_json(json)
# print the JSON string representation of the object
print(Store.to_json())

# convert the object into a dict
store_dict = store_instance.to_dict()
# create an instance of Store from a dict
store_from_dict = Store.from_dict(store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


