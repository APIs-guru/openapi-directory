# ProductsApproveRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_url_info** | [**ApprovalUrlInfo**](ApprovalUrlInfo.md) |  | [optional] 
**approved_permissions** | **str** | Sets how new permission requests for the product are handled. \&quot;allPermissions\&quot; automatically approves all current and future permissions for the product. \&quot;currentPermissionsOnly\&quot; approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved. | [optional] 

## Example

```python
from openapi_client.models.products_approve_request import ProductsApproveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsApproveRequest from a JSON string
products_approve_request_instance = ProductsApproveRequest.from_json(json)
# print the JSON string representation of the object
print(ProductsApproveRequest.to_json())

# convert the object into a dict
products_approve_request_dict = products_approve_request_instance.to_dict()
# create an instance of ProductsApproveRequest from a dict
products_approve_request_from_dict = ProductsApproveRequest.from_dict(products_approve_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


