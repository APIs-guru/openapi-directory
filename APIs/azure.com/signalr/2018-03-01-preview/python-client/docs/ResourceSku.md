# ResourceSku

The billing information of the resource.(e.g. basic vs. standard)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | Optional, integer. If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not   possible for the resource this may be omitted. | [optional] 
**family** | **str** | Optional, string. If the service has different generations of hardware, for the same SKU, then that can be captured here. | [optional] 
**name** | **str** | The name of the SKU. This is typically a letter + number code, such as A0 or P3.  Required (if sku is specified) | 
**size** | **str** | Optional, string. When the name field is the combination of tier and some other value, this would be the standalone code. | [optional] 
**tier** | **str** | Optional tier of this particular SKU. &#x60;Basic&#x60; is deprecated, use &#x60;Standard&#x60; instead for Basic tier | [optional] 

## Example

```python
from openapi_client.models.resource_sku import ResourceSku

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSku from a JSON string
resource_sku_instance = ResourceSku.from_json(json)
# print the JSON string representation of the object
print(ResourceSku.to_json())

# convert the object into a dict
resource_sku_dict = resource_sku_instance.to_dict()
# create an instance of ResourceSku from a dict
resource_sku_from_dict = ResourceSku.from_dict(resource_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


