# AKSVariantResponse

The response for an AKS variant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_default** | **bool** | Is this the default variant. | [optional] 
**traffic_percentile** | **float** | The amount of traffic variant receives. | [optional] 
**type** | **str** | The type of the variant. | [optional] 

## Example

```python
from openapi_client.models.aks_variant_response import AKSVariantResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AKSVariantResponse from a JSON string
aks_variant_response_instance = AKSVariantResponse.from_json(json)
# print the JSON string representation of the object
print(AKSVariantResponse.to_json())

# convert the object into a dict
aks_variant_response_dict = aks_variant_response_instance.to_dict()
# create an instance of AKSVariantResponse from a dict
aks_variant_response_from_dict = AKSVariantResponse.from_dict(aks_variant_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


