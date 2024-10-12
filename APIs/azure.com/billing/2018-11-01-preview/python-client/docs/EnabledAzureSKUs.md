# EnabledAzureSKUs

Details about the enabled azure sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku_description** | **str** | The sku description. | [optional] [readonly] 
**sku_id** | **str** | The sku id. | [optional] 

## Example

```python
from openapi_client.models.enabled_azure_skus import EnabledAzureSKUs

# TODO update the JSON string below
json = "{}"
# create an instance of EnabledAzureSKUs from a JSON string
enabled_azure_skus_instance = EnabledAzureSKUs.from_json(json)
# print the JSON string representation of the object
print(EnabledAzureSKUs.to_json())

# convert the object into a dict
enabled_azure_skus_dict = enabled_azure_skus_instance.to_dict()
# create an instance of EnabledAzureSKUs from a dict
enabled_azure_skus_from_dict = EnabledAzureSKUs.from_dict(enabled_azure_skus_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


