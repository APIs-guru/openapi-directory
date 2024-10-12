# ProductPermissions

Information about the permissions required by a specific app and whether they have been accepted by the enterprise.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission** | [**List[ProductPermission]**](ProductPermission.md) | The permissions required by the app. | [optional] 
**product_id** | **str** | The ID of the app that the permissions relate to, e.g. \&quot;app:com.google.android.gm\&quot;. | [optional] 

## Example

```python
from openapi_client.models.product_permissions import ProductPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPermissions from a JSON string
product_permissions_instance = ProductPermissions.from_json(json)
# print the JSON string representation of the object
print(ProductPermissions.to_json())

# convert the object into a dict
product_permissions_dict = product_permissions_instance.to_dict()
# create an instance of ProductPermissions from a dict
product_permissions_from_dict = ProductPermissions.from_dict(product_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


