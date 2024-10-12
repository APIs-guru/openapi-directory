# ResourceSkusListSkus200ResponseValueInnerRestrictionsInner

Describes scaling information of a SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason_code** | **str** | The reason code for restriction. | [optional] [readonly] 
**type** | **str** | The type of restrictions. | [optional] [readonly] 
**values** | **List[str]** | The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_skus_list_skus200_response_value_inner_restrictions_inner import ResourceSkusListSkus200ResponseValueInnerRestrictionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkusListSkus200ResponseValueInnerRestrictionsInner from a JSON string
resource_skus_list_skus200_response_value_inner_restrictions_inner_instance = ResourceSkusListSkus200ResponseValueInnerRestrictionsInner.from_json(json)
# print the JSON string representation of the object
print(ResourceSkusListSkus200ResponseValueInnerRestrictionsInner.to_json())

# convert the object into a dict
resource_skus_list_skus200_response_value_inner_restrictions_inner_dict = resource_skus_list_skus200_response_value_inner_restrictions_inner_instance.to_dict()
# create an instance of ResourceSkusListSkus200ResponseValueInnerRestrictionsInner from a dict
resource_skus_list_skus200_response_value_inner_restrictions_inner_from_dict = ResourceSkusListSkus200ResponseValueInnerRestrictionsInner.from_dict(resource_skus_list_skus200_response_value_inner_restrictions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


