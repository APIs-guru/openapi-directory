# ProductGroupCreateOrUpdate200Response

Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the Group entity. | [optional] 
**built_in** | **bool** | true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false. | [optional] [readonly] 
**description** | **str** | Group description. Can contain HTML formatting tags. | [optional] 
**external_id** | **str** | For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://&lt;tenant&gt;.onmicrosoft.com/groups/&lt;group object id&gt;; otherwise the value is null. | [optional] 
**name** | **str** | Group name. | 
**type** | **str** | Group type. | [optional] 

## Example

```python
from openapi_client.models.product_group_create_or_update200_response import ProductGroupCreateOrUpdate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupCreateOrUpdate200Response from a JSON string
product_group_create_or_update200_response_instance = ProductGroupCreateOrUpdate200Response.from_json(json)
# print the JSON string representation of the object
print(ProductGroupCreateOrUpdate200Response.to_json())

# convert the object into a dict
product_group_create_or_update200_response_dict = product_group_create_or_update200_response_instance.to_dict()
# create an instance of ProductGroupCreateOrUpdate200Response from a dict
product_group_create_or_update200_response_from_dict = ProductGroupCreateOrUpdate200Response.from_dict(product_group_create_or_update200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


