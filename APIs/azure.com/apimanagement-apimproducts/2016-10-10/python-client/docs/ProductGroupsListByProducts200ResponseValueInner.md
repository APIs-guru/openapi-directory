# ProductGroupsListByProducts200ResponseValueInner

Developer group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_in** | **bool** | true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false. | [optional] [readonly] 
**description** | **str** | Group description. Can contain HTML formatting tags. | [optional] 
**external_id** | **str** | For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://&lt;tenant&gt;.onmicrosoft.com/groups/&lt;group object id&gt;; otherwise the value is null. | [optional] [readonly] 
**id** | **str** | Uniquely identifies the group within the current API Management service instance. The value is a valid relative URL in the format of /groups/{groupId} where {groupId} is a group identifier. | [optional] [readonly] 
**name** | **str** | Group name. | 
**type** | **str** | Group type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_groups_list_by_products200_response_value_inner import ProductGroupsListByProducts200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupsListByProducts200ResponseValueInner from a JSON string
product_groups_list_by_products200_response_value_inner_instance = ProductGroupsListByProducts200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ProductGroupsListByProducts200ResponseValueInner.to_json())

# convert the object into a dict
product_groups_list_by_products200_response_value_inner_dict = product_groups_list_by_products200_response_value_inner_instance.to_dict()
# create an instance of ProductGroupsListByProducts200ResponseValueInner from a dict
product_groups_list_by_products200_response_value_inner_from_dict = ProductGroupsListByProducts200ResponseValueInner.from_dict(product_groups_list_by_products200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


