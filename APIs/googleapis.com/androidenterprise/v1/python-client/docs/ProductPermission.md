# ProductPermission

A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin. The API can be used to read the set of permissions, and also to update the set to indicate that permissions have been accepted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission_id** | **str** | An opaque string uniquely identifying the permission. | [optional] 
**state** | **str** | Whether the permission has been accepted or not. | [optional] 

## Example

```python
from openapi_client.models.product_permission import ProductPermission

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPermission from a JSON string
product_permission_instance = ProductPermission.from_json(json)
# print the JSON string representation of the object
print(ProductPermission.to_json())

# convert the object into a dict
product_permission_dict = product_permission_instance.to_dict()
# create an instance of ProductPermission from a dict
product_permission_from_dict = ProductPermission.from_dict(product_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


