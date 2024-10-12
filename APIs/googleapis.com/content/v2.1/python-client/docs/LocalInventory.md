# LocalInventory

Local inventory resource. For accepted attribute values, see the local product inventory feed specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | **str** | The availability of the product. For accepted attribute values, see the local product inventory feed specification. | [optional] 
**custom_attributes** | [**List[CustomAttribute]**](CustomAttribute.md) | A list of custom (merchant-provided) attributes. Can also be used to submit any attribute of the feed specification in its generic form, for example, &#x60;{ \&quot;name\&quot;: \&quot;size type\&quot;, \&quot;value\&quot;: \&quot;regular\&quot; }&#x60;. | [optional] 
**instore_product_location** | **str** | The in-store product location. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#localInventory&#x60;\&quot; | [optional] 
**pickup_method** | **str** | The supported pickup method for this offer. Unless the value is \&quot;not supported\&quot;, this field must be submitted together with &#x60;pickupSla&#x60;. For accepted attribute values, see the local product inventory feed specification. | [optional] 
**pickup_sla** | **str** | The expected date that an order will be ready for pickup relative to the order date. Must be submitted together with &#x60;pickupMethod&#x60;. For accepted attribute values, see the local product inventory feed specification. | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**quantity** | **int** | The quantity of the product. Must be nonnegative. | [optional] 
**sale_price** | [**Price**](Price.md) |  | [optional] 
**sale_price_effective_date** | **str** | A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates may be specified as &#39;null&#39; if undecided. | [optional] 
**store_code** | **str** | Required. The store code of this local inventory resource. | [optional] 

## Example

```python
from openapi_client.models.local_inventory import LocalInventory

# TODO update the JSON string below
json = "{}"
# create an instance of LocalInventory from a JSON string
local_inventory_instance = LocalInventory.from_json(json)
# print the JSON string representation of the object
print(LocalInventory.to_json())

# convert the object into a dict
local_inventory_dict = local_inventory_instance.to_dict()
# create an instance of LocalInventory from a dict
local_inventory_from_dict = LocalInventory.from_dict(local_inventory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


