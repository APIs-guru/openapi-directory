# PackageShippingDetails

Shipping details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_name** | **str** | Name of the carrier. | [optional] [readonly] 
**tracking_id** | **str** | Tracking Id of shipment. | [optional] [readonly] 
**tracking_url** | **str** | Url where shipment can be tracked. | [optional] [readonly] 

## Example

```python
from openapi_client.models.package_shipping_details import PackageShippingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PackageShippingDetails from a JSON string
package_shipping_details_instance = PackageShippingDetails.from_json(json)
# print the JSON string representation of the object
print(PackageShippingDetails.to_json())

# convert the object into a dict
package_shipping_details_dict = package_shipping_details_instance.to_dict()
# create an instance of PackageShippingDetails from a dict
package_shipping_details_from_dict = PackageShippingDetails.from_dict(package_shipping_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


