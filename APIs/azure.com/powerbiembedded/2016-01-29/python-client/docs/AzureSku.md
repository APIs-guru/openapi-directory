# AzureSku


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | SKU name | 
**tier** | **str** | SKU tier | 

## Example

```python
from openapi_client.models.azure_sku import AzureSku

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSku from a JSON string
azure_sku_instance = AzureSku.from_json(json)
# print the JSON string representation of the object
print(AzureSku.to_json())

# convert the object into a dict
azure_sku_dict = azure_sku_instance.to_dict()
# create an instance of AzureSku from a dict
azure_sku_from_dict = AzureSku.from_dict(azure_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


