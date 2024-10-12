# ResourceSkusListSkus200ResponseValueInnerCapabilitiesInner

Describes The SKU capabilites object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | An invariant to describe the feature. | [optional] [readonly] 
**value** | **str** | An invariant if the feature is measured by quantity. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_skus_list_skus200_response_value_inner_capabilities_inner import ResourceSkusListSkus200ResponseValueInnerCapabilitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkusListSkus200ResponseValueInnerCapabilitiesInner from a JSON string
resource_skus_list_skus200_response_value_inner_capabilities_inner_instance = ResourceSkusListSkus200ResponseValueInnerCapabilitiesInner.from_json(json)
# print the JSON string representation of the object
print(ResourceSkusListSkus200ResponseValueInnerCapabilitiesInner.to_json())

# convert the object into a dict
resource_skus_list_skus200_response_value_inner_capabilities_inner_dict = resource_skus_list_skus200_response_value_inner_capabilities_inner_instance.to_dict()
# create an instance of ResourceSkusListSkus200ResponseValueInnerCapabilitiesInner from a dict
resource_skus_list_skus200_response_value_inner_capabilities_inner_from_dict = ResourceSkusListSkus200ResponseValueInnerCapabilitiesInner.from_dict(resource_skus_list_skus200_response_value_inner_capabilities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


