# SeveralAssociationTypesPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Association type code | 
**is_quantified** | **bool** | When true, the association is a quantified association (Only available in the PIM Serenity version.) | [optional] [default to False]
**is_two_way** | **bool** | When true, the association is a two-way association (Only available in the PIM Serenity version.) | [optional] [default to False]
**labels** | [**AssociationTypesAllOfEmbeddedItemsInnerAllOfLabels**](AssociationTypesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 

## Example

```python
from openapi_client.models.several_association_types_patch_request import SeveralAssociationTypesPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SeveralAssociationTypesPatchRequest from a JSON string
several_association_types_patch_request_instance = SeveralAssociationTypesPatchRequest.from_json(json)
# print the JSON string representation of the object
print(SeveralAssociationTypesPatchRequest.to_json())

# convert the object into a dict
several_association_types_patch_request_dict = several_association_types_patch_request_instance.to_dict()
# create an instance of SeveralAssociationTypesPatchRequest from a dict
several_association_types_patch_request_from_dict = SeveralAssociationTypesPatchRequest.from_dict(several_association_types_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


