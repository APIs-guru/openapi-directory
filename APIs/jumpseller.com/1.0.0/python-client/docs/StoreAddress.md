# StoreAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the Store&#39;s Address | [optional] 
**city** | **str** | City of the Store&#39;s Address | [optional] 
**country** | **str** | Country of the Store&#39;s Address (ISO 3166-1 alpha-2) | [optional] 
**country_code** | **str** | Country code of the Store&#39;s Address | [optional] 
**postal** | **str** | Postal code of the Store&#39;s Address | [optional] 
**region** | **str** | Region of the Store&#39;s Address | [optional] 
**region_code** | **str** | Region code of the Store&#39;s Address | [optional] 

## Example

```python
from openapi_client.models.store_address import StoreAddress

# TODO update the JSON string below
json = "{}"
# create an instance of StoreAddress from a JSON string
store_address_instance = StoreAddress.from_json(json)
# print the JSON string representation of the object
print(StoreAddress.to_json())

# convert the object into a dict
store_address_dict = store_address_instance.to_dict()
# create an instance of StoreAddress from a dict
store_address_from_dict = StoreAddress.from_dict(store_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


