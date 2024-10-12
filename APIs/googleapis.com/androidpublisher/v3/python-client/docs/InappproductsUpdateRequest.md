# InappproductsUpdateRequest

Request to update an in-app product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_missing** | **bool** | If set to true, and the in-app product with the given package_name and sku doesn&#39;t exist, the in-app product will be created. | [optional] 
**auto_convert_missing_prices** | **bool** | If true the prices for all regions targeted by the parent app that don&#39;t have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. | [optional] 
**inappproduct** | [**InAppProduct**](InAppProduct.md) |  | [optional] 
**latency_tolerance** | **str** | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. | [optional] 
**package_name** | **str** | Package name of the app. | [optional] 
**sku** | **str** | Unique identifier for the in-app product. | [optional] 

## Example

```python
from openapi_client.models.inappproducts_update_request import InappproductsUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InappproductsUpdateRequest from a JSON string
inappproducts_update_request_instance = InappproductsUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(InappproductsUpdateRequest.to_json())

# convert the object into a dict
inappproducts_update_request_dict = inappproducts_update_request_instance.to_dict()
# create an instance of InappproductsUpdateRequest from a dict
inappproducts_update_request_from_dict = InappproductsUpdateRequest.from_dict(inappproducts_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


