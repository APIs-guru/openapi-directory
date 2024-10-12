# AssociationTypesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Association type code | 
**is_quantified** | **bool** | When true, the association is a quantified association (Only available in the PIM Serenity version.) | [optional] [default to False]
**is_two_way** | **bool** | When true, the association is a two-way association (Only available in the PIM Serenity version.) | [optional] [default to False]
**labels** | [**AssociationTypesAllOfEmbeddedItemsInnerAllOfLabels**](AssociationTypesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 

## Example

```python
from openapi_client.models.association_types_post_request import AssociationTypesPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssociationTypesPostRequest from a JSON string
association_types_post_request_instance = AssociationTypesPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssociationTypesPostRequest.to_json())

# convert the object into a dict
association_types_post_request_dict = association_types_post_request_instance.to_dict()
# create an instance of AssociationTypesPostRequest from a dict
association_types_post_request_from_dict = AssociationTypesPostRequest.from_dict(association_types_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


