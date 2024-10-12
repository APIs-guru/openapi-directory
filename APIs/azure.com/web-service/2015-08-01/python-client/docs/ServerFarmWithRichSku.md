# ServerFarmWithRichSku

App Service Plan Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**sku** | [**SkuDescription**](SkuDescription.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.server_farm_with_rich_sku import ServerFarmWithRichSku

# TODO update the JSON string below
json = "{}"
# create an instance of ServerFarmWithRichSku from a JSON string
server_farm_with_rich_sku_instance = ServerFarmWithRichSku.from_json(json)
# print the JSON string representation of the object
print(ServerFarmWithRichSku.to_json())

# convert the object into a dict
server_farm_with_rich_sku_dict = server_farm_with_rich_sku_instance.to_dict()
# create an instance of ServerFarmWithRichSku from a dict
server_farm_with_rich_sku_from_dict = ServerFarmWithRichSku.from_dict(server_farm_with_rich_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


