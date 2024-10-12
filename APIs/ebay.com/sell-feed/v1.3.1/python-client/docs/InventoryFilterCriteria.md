# InventoryFilterCriteria

The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can retrieve listings for a specified format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listing_format** | **str** | The type of buying option for the order. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:ListingFormatEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.inventory_filter_criteria import InventoryFilterCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryFilterCriteria from a JSON string
inventory_filter_criteria_instance = InventoryFilterCriteria.from_json(json)
# print the JSON string representation of the object
print(InventoryFilterCriteria.to_json())

# convert the object into a dict
inventory_filter_criteria_dict = inventory_filter_criteria_instance.to_dict()
# create an instance of InventoryFilterCriteria from a dict
inventory_filter_criteria_from_dict = InventoryFilterCriteria.from_dict(inventory_filter_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


