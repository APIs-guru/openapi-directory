# GroupLicense

Group license objects allow you to keep track of licenses (called entitlements) for both free and paid apps. For a free app, a group license is created when an enterprise admin first approves the product in Google Play or when the first entitlement for the product is created for a user via the API. For a paid app, a group license object is only created when an enterprise admin purchases the product in Google Play for the first time. Use the API to query group licenses. A Grouplicenses resource includes the total number of licenses purchased (paid apps only) and the total number of licenses currently in use. In other words, the total number of Entitlements that exist for the product. Only one group license object is created per product and group license objects are never deleted. If a product is unapproved, its group license remains. This allows enterprise admins to keep track of any remaining entitlements for the product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquisition_kind** | **str** | How this group license was acquired. \&quot;bulkPurchase\&quot; means that this Grouplicenses resource was created because the enterprise purchased licenses for this product; otherwise, the value is \&quot;free\&quot; (for free products). | [optional] 
**approval** | **str** | Whether the product to which this group license relates is currently approved by the enterprise. Products are approved when a group license is first created, but this approval may be revoked by an enterprise admin via Google Play. Unapproved products will not be visible to end users in collections, and new entitlements to them should not normally be created. | [optional] 
**num_provisioned** | **int** | The total number of provisioned licenses for this product. Returned by read operations, but ignored in write operations. | [optional] 
**num_purchased** | **int** | The number of purchased licenses (possibly in multiple purchases). If this field is omitted, then there is no limit on the number of licenses that can be provisioned (for example, if the acquisition kind is \&quot;free\&quot;). | [optional] 
**permissions** | **str** | The permission approval status of the product. This field is only set if the product is approved. Possible states are: - \&quot;currentApproved\&quot;, the current set of permissions is approved, but additional permissions will require the administrator to reapprove the product (If the product was approved without specifying the approved permissions setting, then this is the default behavior.), - \&quot;needsReapproval\&quot;, the product has unapproved permissions. No additional product licenses can be assigned until the product is reapproved, - \&quot;allCurrentAndFutureApproved\&quot;, the current permissions are approved and any future permission updates will be automatically approved without administrator review.  | [optional] 
**product_id** | **str** | The ID of the product that the license is for. For example, \&quot;app:com.google.android.gm\&quot;. | [optional] 

## Example

```python
from openapi_client.models.group_license import GroupLicense

# TODO update the JSON string below
json = "{}"
# create an instance of GroupLicense from a JSON string
group_license_instance = GroupLicense.from_json(json)
# print the JSON string representation of the object
print(GroupLicense.to_json())

# convert the object into a dict
group_license_dict = group_license_instance.to_dict()
# create an instance of GroupLicense from a dict
group_license_from_dict = GroupLicense.from_dict(group_license_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


