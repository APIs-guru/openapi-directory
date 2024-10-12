# VariationDetails

This type is used to identify the product variation that has the listing violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **str** | The seller-defined SKU value of the variation within the multiple-variation listing with the violation{s). This field is only returned if a seller-defined SKU value is defined for the variation. SKU values are optional in listing except when creating listings using the Inventory API. | [optional] 
**variation_aspects** | [**List[NameValueList]**](NameValueList.md) | An array of one or more variation aspects that define a variation within a multiple-variation listing. The aspect{s) returned here define the individual variation, because these aspects will differ for each variation. Common varying aspects include color and size. | [optional] 

## Example

```python
from openapi_client.models.variation_details import VariationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VariationDetails from a JSON string
variation_details_instance = VariationDetails.from_json(json)
# print the JSON string representation of the object
print(VariationDetails.to_json())

# convert the object into a dict
variation_details_dict = variation_details_instance.to_dict()
# create an instance of VariationDetails from a dict
variation_details_from_dict = VariationDetails.from_dict(variation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


