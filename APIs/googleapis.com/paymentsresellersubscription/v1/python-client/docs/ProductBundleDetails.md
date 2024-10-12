# ProductBundleDetails

Details for a bundle product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_elements** | [**List[GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElement]**](GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElement.md) | The individual products that are included in the bundle. | [optional] 
**entitlement_mode** | **str** | The entitlement mode of the bundle product. | [optional] 

## Example

```python
from openapi_client.models.product_bundle_details import ProductBundleDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProductBundleDetails from a JSON string
product_bundle_details_instance = ProductBundleDetails.from_json(json)
# print the JSON string representation of the object
print(ProductBundleDetails.to_json())

# convert the object into a dict
product_bundle_details_dict = product_bundle_details_instance.to_dict()
# create an instance of ProductBundleDetails from a dict
product_bundle_details_from_dict = ProductBundleDetails.from_dict(product_bundle_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


