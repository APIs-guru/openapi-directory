# ResourceTypeSku

Resource type Sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_type** | **str** | Gets or sets the resource type | [optional] 
**skus** | [**List[SkuSetting]**](SkuSetting.md) | Gets or sets the Skus | [optional] 

## Example

```python
from openapi_client.models.resource_type_sku import ResourceTypeSku

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceTypeSku from a JSON string
resource_type_sku_instance = ResourceTypeSku.from_json(json)
# print the JSON string representation of the object
print(ResourceTypeSku.to_json())

# convert the object into a dict
resource_type_sku_dict = resource_type_sku_instance.to_dict()
# create an instance of ResourceTypeSku from a dict
resource_type_sku_from_dict = ResourceTypeSku.from_dict(resource_type_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


