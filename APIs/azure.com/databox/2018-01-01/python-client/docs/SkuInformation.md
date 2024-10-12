# SkuInformation

Information of the sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | The sku is enabled or not. | [optional] [readonly] 
**properties** | [**SkuProperties**](SkuProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 

## Example

```python
from openapi_client.models.sku_information import SkuInformation

# TODO update the JSON string below
json = "{}"
# create an instance of SkuInformation from a JSON string
sku_information_instance = SkuInformation.from_json(json)
# print the JSON string representation of the object
print(SkuInformation.to_json())

# convert the object into a dict
sku_information_dict = sku_information_instance.to_dict()
# create an instance of SkuInformation from a dict
sku_information_from_dict = SkuInformation.from_dict(sku_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


