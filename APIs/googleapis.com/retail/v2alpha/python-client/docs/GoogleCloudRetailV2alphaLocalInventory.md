# GoogleCloudRetailV2alphaLocalInventory

The inventory information at a place (e.g. a store) identified by a place ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Dict[str, GoogleCloudRetailV2alphaCustomAttribute]**](GoogleCloudRetailV2alphaCustomAttribute.md) | Additional local inventory attributes, for example, store name, promotion tags, etc. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * At most 30 attributes are allowed. * The key must be a UTF-8 encoded string with a length limit of 32 characters. * The key must match the pattern: &#x60;a-zA-Z0-9*&#x60;. For example, key0LikeThis or KEY_1_LIKE_THIS. * The attribute values must be of the same type (text or number). * Only 1 value is allowed for each attribute. * For text values, the length limit is 256 UTF-8 characters. * The attribute does not support search. The &#x60;searchable&#x60; field should be unset or set to false. * The max summed total bytes of custom attribute keys and values per product is 5MiB. | [optional] 
**fulfillment_types** | **List[str]** | Input only. Supported fulfillment types. Valid fulfillment type values include commonly used types (such as pickup in store and same day delivery), and custom types. Customers have to map custom types to their display names before rendering UI. Supported values: * \&quot;pickup-in-store\&quot; * \&quot;ship-to-store\&quot; * \&quot;same-day-delivery\&quot; * \&quot;next-day-delivery\&quot; * \&quot;custom-type-1\&quot; * \&quot;custom-type-2\&quot; * \&quot;custom-type-3\&quot; * \&quot;custom-type-4\&quot; * \&quot;custom-type-5\&quot; If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. All the elements must be distinct. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**place_id** | **str** | The place ID for the current set of inventory information. | [optional] 
**price_info** | [**GoogleCloudRetailV2alphaPriceInfo**](GoogleCloudRetailV2alphaPriceInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_local_inventory import GoogleCloudRetailV2alphaLocalInventory

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaLocalInventory from a JSON string
google_cloud_retail_v2alpha_local_inventory_instance = GoogleCloudRetailV2alphaLocalInventory.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaLocalInventory.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_local_inventory_dict = google_cloud_retail_v2alpha_local_inventory_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaLocalInventory from a dict
google_cloud_retail_v2alpha_local_inventory_from_dict = GoogleCloudRetailV2alphaLocalInventory.from_dict(google_cloud_retail_v2alpha_local_inventory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


