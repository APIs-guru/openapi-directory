# SkuDescription

Describes a sku for a scalable resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | Current number of instances assigned to the resource | [optional] 
**family** | **str** | Family code of the resource sku | [optional] 
**name** | **str** | Name of the resource sku | [optional] 
**size** | **str** | Size specifier of the resource sku | [optional] 
**tier** | **str** | Service Tier of the resource sku | [optional] 

## Example

```python
from openapi_client.models.sku_description import SkuDescription

# TODO update the JSON string below
json = "{}"
# create an instance of SkuDescription from a JSON string
sku_description_instance = SkuDescription.from_json(json)
# print the JSON string representation of the object
print(SkuDescription.to_json())

# convert the object into a dict
sku_description_dict = sku_description_instance.to_dict()
# create an instance of SkuDescription from a dict
sku_description_from_dict = SkuDescription.from_dict(sku_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


