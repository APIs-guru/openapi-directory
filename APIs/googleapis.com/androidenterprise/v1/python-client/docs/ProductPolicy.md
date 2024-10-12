# ProductPolicy

The policy for a product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_install_policy** | [**AutoInstallPolicy**](AutoInstallPolicy.md) |  | [optional] 
**auto_update_mode** | **str** | The auto-update mode for the product. When autoUpdateMode is used, it always takes precedence over the user&#39;s choice. So when a user makes changes to the device settings manually, these changes are ignored. | [optional] 
**enterprise_authentication_app_link_configs** | [**List[EnterpriseAuthenticationAppLinkConfig]**](EnterpriseAuthenticationAppLinkConfig.md) | An authentication URL configuration for the authenticator app of an identity provider. This helps to launch the identity provider&#39;s authenticator app during the authentication happening in a private app using Android WebView. Authenticator app should already be the default handler for the authentication url on the device. | [optional] 
**managed_configuration** | [**ManagedConfiguration**](ManagedConfiguration.md) |  | [optional] 
**product_id** | **str** | The ID of the product. For example, \&quot;app:com.google.android.gm\&quot;. | [optional] 
**track_ids** | **List[str]** | Grants the device visibility to the specified product release track(s), identified by trackIds. The list of release tracks of a product can be obtained by calling Products.Get. | [optional] 
**tracks** | **List[str]** | Deprecated. Use trackIds instead. | [optional] 

## Example

```python
from openapi_client.models.product_policy import ProductPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPolicy from a JSON string
product_policy_instance = ProductPolicy.from_json(json)
# print the JSON string representation of the object
print(ProductPolicy.to_json())

# convert the object into a dict
product_policy_dict = product_policy_instance.to_dict()
# create an instance of ProductPolicy from a dict
product_policy_from_dict = ProductPolicy.from_dict(product_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


