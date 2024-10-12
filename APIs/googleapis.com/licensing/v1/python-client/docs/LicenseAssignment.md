# LicenseAssignment

Representation of a license assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etags** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | Identifies the resource as a LicenseAssignment, which is &#x60;licensing#licenseAssignment&#x60;. | [optional] [default to 'licensing#licenseAssignment']
**product_id** | **str** | A product&#39;s unique identifier. For more information about products in this version of the API, see Product and SKU IDs. | [optional] 
**product_name** | **str** | Display Name of the product. | [optional] 
**self_link** | **str** | Link to this page. | [optional] 
**sku_id** | **str** | A product SKU&#39;s unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. | [optional] 
**sku_name** | **str** | Display Name of the sku of the product. | [optional] 
**user_id** | **str** | The user&#39;s current primary email address. If the user&#39;s email address changes, use the new email address in your API requests. Since a &#x60;userId&#x60; is subject to change, do not use a &#x60;userId&#x60; value as a key for persistent data. This key could break if the current user&#39;s email address changes. If the &#x60;userId&#x60; is suspended, the license status changes. | [optional] 

## Example

```python
from openapi_client.models.license_assignment import LicenseAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseAssignment from a JSON string
license_assignment_instance = LicenseAssignment.from_json(json)
# print the JSON string representation of the object
print(LicenseAssignment.to_json())

# convert the object into a dict
license_assignment_dict = license_assignment_instance.to_dict()
# create an instance of LicenseAssignment from a dict
license_assignment_from_dict = LicenseAssignment.from_dict(license_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


