# GlobalCsmSkuDescriptionCapacity

Description of the App Service plan scale options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **int** | Default number of workers for this App Service plan SKU. | [optional] 
**maximum** | **int** | Maximum number of workers for this App Service plan SKU. | [optional] 
**minimum** | **int** | Minimum number of workers for this App Service plan SKU. | [optional] 
**scale_type** | **str** | Available scale configurations for an App Service plan. | [optional] 

## Example

```python
from openapi_client.models.global_csm_sku_description_capacity import GlobalCsmSkuDescriptionCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalCsmSkuDescriptionCapacity from a JSON string
global_csm_sku_description_capacity_instance = GlobalCsmSkuDescriptionCapacity.from_json(json)
# print the JSON string representation of the object
print(GlobalCsmSkuDescriptionCapacity.to_json())

# convert the object into a dict
global_csm_sku_description_capacity_dict = global_csm_sku_description_capacity_instance.to_dict()
# create an instance of GlobalCsmSkuDescriptionCapacity from a dict
global_csm_sku_description_capacity_from_dict = GlobalCsmSkuDescriptionCapacity.from_dict(global_csm_sku_description_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


