# ExtendedProduct

Extended description about the product required for installing it into Azure Stack.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gallery_package_blob_sas_uri** | **str** | The URI to the .azpkg file that provides information required for showing product in the gallery. | [optional] [readonly] 
**product_kind** | **str** | Specifies the kind of the product (virtualMachine or virtualMachineExtension). | [optional] [readonly] 
**properties** | [**ExtendedProductProperties**](ExtendedProductProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.extended_product import ExtendedProduct

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedProduct from a JSON string
extended_product_instance = ExtendedProduct.from_json(json)
# print the JSON string representation of the object
print(ExtendedProduct.to_json())

# convert the object into a dict
extended_product_dict = extended_product_instance.to_dict()
# create an instance of ExtendedProduct from a dict
extended_product_from_dict = ExtendedProduct.from_dict(extended_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


