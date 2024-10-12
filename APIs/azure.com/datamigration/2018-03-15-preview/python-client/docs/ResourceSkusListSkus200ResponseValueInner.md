# ResourceSkusListSkus200ResponseValueInner

Describes an available DMS SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_versions** | **List[str]** | The api versions that support this SKU. | [optional] [readonly] 
**capabilities** | [**List[ResourceSkusListSkus200ResponseValueInnerCapabilitiesInner]**](ResourceSkusListSkus200ResponseValueInnerCapabilitiesInner.md) | A name value pair to describe the capability. | [optional] [readonly] 
**capacity** | [**ResourceSkusListSkus200ResponseValueInnerCapacity**](ResourceSkusListSkus200ResponseValueInnerCapacity.md) |  | [optional] 
**costs** | [**List[ResourceSkusListSkus200ResponseValueInnerCostsInner]**](ResourceSkusListSkus200ResponseValueInnerCostsInner.md) | Metadata for retrieving price info. | [optional] [readonly] 
**family** | **str** | The Family of this particular SKU. | [optional] [readonly] 
**kind** | **str** | The Kind of resources that are supported in this SKU. | [optional] [readonly] 
**locations** | **List[str]** | The set of locations that the SKU is available. | [optional] [readonly] 
**name** | **str** | The name of SKU. | [optional] [readonly] 
**resource_type** | **str** | The type of resource the SKU applies to. | [optional] [readonly] 
**restrictions** | [**List[ResourceSkusListSkus200ResponseValueInnerRestrictionsInner]**](ResourceSkusListSkus200ResponseValueInnerRestrictionsInner.md) | The restrictions because of which SKU cannot be used. This is empty if there are no restrictions. | [optional] [readonly] 
**size** | **str** | The Size of the SKU. | [optional] [readonly] 
**tier** | **str** | Specifies the tier of DMS in a scale set. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_skus_list_skus200_response_value_inner import ResourceSkusListSkus200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkusListSkus200ResponseValueInner from a JSON string
resource_skus_list_skus200_response_value_inner_instance = ResourceSkusListSkus200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ResourceSkusListSkus200ResponseValueInner.to_json())

# convert the object into a dict
resource_skus_list_skus200_response_value_inner_dict = resource_skus_list_skus200_response_value_inner_instance.to_dict()
# create an instance of ResourceSkusListSkus200ResponseValueInner from a dict
resource_skus_list_skus200_response_value_inner_from_dict = ResourceSkusListSkus200ResponseValueInner.from_dict(resource_skus_list_skus200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


