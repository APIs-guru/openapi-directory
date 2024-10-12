# ResourceSku

The billing information of the SignalR resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | Optional, integer. The unit count of SignalR resource. 1 by default.    If present, following values are allowed:      Free: 1      Standard: 1,2,5,10,20,50,100 | [optional] 
**family** | **str** | Optional string. For future use. | [optional] 
**name** | **str** | The name of the SKU. Required.    Allowed values: Standard_S1, Free_F1 | 
**size** | **str** | Optional string. For future use. | [optional] 
**tier** | **str** | Optional tier of this particular SKU. &#39;Standard&#39; or &#39;Free&#39;.     &#x60;Basic&#x60; is deprecated, use &#x60;Standard&#x60; instead. | [optional] 

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


