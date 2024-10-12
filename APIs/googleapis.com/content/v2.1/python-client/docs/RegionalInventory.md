# RegionalInventory

Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | **str** | The availability of the product. | [optional] 
**custom_attributes** | [**List[CustomAttribute]**](CustomAttribute.md) | A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#regionalInventory&#x60;\&quot;. | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**region_id** | **str** | The ID uniquely identifying each region. | [optional] 
**sale_price** | [**Price**](Price.md) |  | [optional] 
**sale_price_effective_date** | **str** | A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as &#39;null&#39; if undecided. | [optional] 

## Example

```python
from openapi_client.models.regional_inventory import RegionalInventory

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalInventory from a JSON string
regional_inventory_instance = RegionalInventory.from_json(json)
# print the JSON string representation of the object
print(RegionalInventory.to_json())

# convert the object into a dict
regional_inventory_dict = regional_inventory_instance.to_dict()
# create an instance of RegionalInventory from a dict
regional_inventory_from_dict = RegionalInventory.from_dict(regional_inventory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


