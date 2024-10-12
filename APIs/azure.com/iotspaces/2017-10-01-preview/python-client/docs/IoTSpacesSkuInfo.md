# IoTSpacesSkuInfo

Information about the SKU of the IoTSpaces instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the SKU. | 

## Example

```python
from openapi_client.models.io_t_spaces_sku_info import IoTSpacesSkuInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSpacesSkuInfo from a JSON string
io_t_spaces_sku_info_instance = IoTSpacesSkuInfo.from_json(json)
# print the JSON string representation of the object
print(IoTSpacesSkuInfo.to_json())

# convert the object into a dict
io_t_spaces_sku_info_dict = io_t_spaces_sku_info_instance.to_dict()
# create an instance of IoTSpacesSkuInfo from a dict
io_t_spaces_sku_info_from_dict = IoTSpacesSkuInfo.from_dict(io_t_spaces_sku_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


