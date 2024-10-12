# SBSku

SKU of the namespace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4. | [optional] 
**name** | **str** | Name of this SKU. | 
**tier** | **str** | The billing tier of this particular SKU. | [optional] 

## Example

```python
from openapi_client.models.sb_sku import SBSku

# TODO update the JSON string below
json = "{}"
# create an instance of SBSku from a JSON string
sb_sku_instance = SBSku.from_json(json)
# print the JSON string representation of the object
print(SBSku.to_json())

# convert the object into a dict
sb_sku_dict = sb_sku_instance.to_dict()
# create an instance of SBSku from a dict
sb_sku_from_dict = SBSku.from_dict(sb_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


