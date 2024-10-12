# Sku

The purchase SKU for CloudSimple paid resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **str** | The capacity of the SKU | [optional] 
**description** | **str** | dedicatedCloudNode example: 8 x Ten-Core Intel® Xeon® Processor E5-2640 v4 2.40GHz 25MB Cache (90W); 12 x 64GB PC4-19200 2400MHz DDR4 ECC Registered DIMM, ... | [optional] 
**family** | **str** | If the service has different generations of hardware, for the same SKU, then that can be captured here | [optional] 
**name** | **str** | The name of the SKU for VMWare CloudSimple Node | 
**tier** | **str** | The tier of the SKU | [optional] 

## Example

```python
from openapi_client.models.sku import Sku

# TODO update the JSON string below
json = "{}"
# create an instance of Sku from a JSON string
sku_instance = Sku.from_json(json)
# print the JSON string representation of the object
print(Sku.to_json())

# convert the object into a dict
sku_dict = sku_instance.to_dict()
# create an instance of Sku from a dict
sku_from_dict = Sku.from_dict(sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


