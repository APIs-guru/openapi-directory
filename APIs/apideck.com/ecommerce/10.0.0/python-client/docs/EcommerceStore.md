# EcommerceStore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_url** | **str** | The store&#39;s admin login URL | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**id** | **str** | A unique identifier for an object. | [readonly] 
**name** | **str** | The store&#39;s name | [optional] 
**store_url** | **str** | The store&#39;s website URL | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ecommerce_store import EcommerceStore

# TODO update the JSON string below
json = "{}"
# create an instance of EcommerceStore from a JSON string
ecommerce_store_instance = EcommerceStore.from_json(json)
# print the JSON string representation of the object
print(EcommerceStore.to_json())

# convert the object into a dict
ecommerce_store_dict = ecommerce_store_instance.to_dict()
# create an instance of EcommerceStore from a dict
ecommerce_store_from_dict = EcommerceStore.from_dict(ecommerce_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


