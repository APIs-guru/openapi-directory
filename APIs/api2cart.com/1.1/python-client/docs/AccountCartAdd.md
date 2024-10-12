# AccountCartAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_3dcart_access_token** | **str** | 3DCart Token | [optional] 
**var_3dcart_private_key** | **str** | 3DCart Private Key | [optional] 
**var_3dcartapi_api_key** | **str** | 3DCart API Key | [optional] 
**amazon_access_key_id** | **str** | Amazon Secret Key Id | [optional] 
**amazon_access_token** | **str** | MWS Auth Token. Access token authorizing the app to access resources on behalf of a user | [optional] 
**amazon_marketplaces_ids** | **str** | Amazon Marketplace IDs comma separated string | [optional] 
**amazon_secret_key** | **str** | Amazon Secret Key | [optional] 
**amazon_seller_id** | **str** | Amazon Seller ID (Merchant token) | [optional] 
**amazon_sp_api_environment** | **str** | Amazon SP API environment | [optional] [default to 'production']
**amazon_sp_aws_region** | **str** | Amazon AWS Region | 
**amazon_sp_aws_role_arn** | **str** | Amazon AWS Role ARN | 
**amazon_sp_aws_user_key_id** | **str** | Amazon AWS user access key ID | 
**amazon_sp_aws_user_secret** | **str** | Amazon AWS user secret access key | 
**amazon_sp_client_id** | **str** | Amazon SP API app client id | 
**amazon_sp_client_secret** | **str** | Amazon SP API app client secret | 
**amazon_sp_refresh_token** | **str** | Amazon SP API OAuth refresh token | 
**aspdotnetstorefront_api_pass** | **str** | AspDotNetStorefront API Password | [optional] 
**aspdotnetstorefront_api_user** | **str** | It&#39;s a AspDotNetStorefront account for which API is available | [optional] 
**bigcommerceapi_access_token** | **str** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**bigcommerceapi_admin_account** | **str** | It&#39;s a BigCommerce account for which API is enabled | [optional] 
**bigcommerceapi_api_key** | **str** | Bigcommerce API Key | [optional] 
**bigcommerceapi_api_path** | **str** | BigCommerce API URL | [optional] 
**bigcommerceapi_client_id** | **str** | Client ID of the requesting app | [optional] 
**bigcommerceapi_context** | **str** | API Path section unique to the store | [optional] 
**bridge_url** | **str** | This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store) | [optional] 
**cart_id** | **str** | Store’s identifier which you can get from cart_list method | 
**commercehq_api_key** | **str** | CommerceHQ api key | [optional] 
**commercehq_api_password** | **str** | CommerceHQ api password | [optional] 
**db_tables_prefix** | **str** | DB tables prefix | [optional] 
**demandware_api_password** | **str** | Demandware api password | [optional] 
**demandware_client_id** | **str** | Demandware client id | [optional] 
**demandware_user_name** | **str** | Demandware user name | [optional] 
**demandware_user_password** | **str** | Demandware user password | [optional] 
**ebay_access_token** | **str** | Used to authenticate API requests. | [optional] 
**ebay_client_id** | **str** | Application ID (AppID). | [optional] 
**ebay_client_secret** | **str** | Shared Secret from eBay application | [optional] 
**ebay_environment** | **str** | eBay environment | [optional] [default to 'production']
**ebay_refresh_token** | **str** | Used to renew the access token. | [optional] 
**ebay_runame** | **str** | The RuName value that eBay assigns to your application. | [optional] 
**ebay_site_id** | **int** | eBay global ID | [optional] [default to 0]
**ecwid_acess_token** | **str** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**ecwid_store_id** | **str** | Store Id | [optional] 
**etsy_access_token** | **str** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**etsy_client_id** | **str** | Etsy Client Id | 
**etsy_keystring** | **str** | Etsy keystring | [optional] 
**etsy_refresh_token** | **str** | Etsy Refresh token | 
**etsy_shared_secret** | **str** | Etsy shared secret | [optional] 
**etsy_token_secret** | **str** | Secret token authorizing the app to access resources on behalf of a user | [optional] 
**ftp_host** | **str** | FTP connection host | [optional] 
**ftp_password** | **str** | FTP Password | [optional] 
**ftp_port** | **int** | FTP Port | [optional] 
**ftp_store_dir** | **str** | FTP Store dir | [optional] 
**ftp_user** | **str** | FTP User | [optional] 
**hybris_client_id** | **str** | Omni Commerce Connector Client ID | [optional] 
**hybris_client_secret** | **str** | Omni Commerce Connector Client Secret | [optional] 
**hybris_password** | **str** | User password | [optional] 
**hybris_username** | **str** | User Name | [optional] 
**hybris_websites** | [**List[AccountCartAddHybrisWebsitesInner]**](AccountCartAddHybrisWebsitesInner.md) | Websites to stores mapping data | [optional] 
**lightspeed_api_key** | **str** | LightSpeed api key | [optional] 
**lightspeed_api_secret** | **str** | LightSpeed api secret | [optional] 
**magento_access_token** | **str** | Magento Access Token | [optional] 
**magento_consumer_key** | **str** | Magento Consumer Key | [optional] 
**magento_consumer_secret** | **str** | Magento Consumer Secret | [optional] 
**magento_token_secret** | **str** | Magento Token Secret | [optional] 
**mercado_libre_app_id** | **str** | Mercado Libre App ID | [optional] 
**mercado_libre_app_secret_key** | **str** | Mercado Libre App Secret Key | [optional] 
**mercado_libre_refresh_token** | **str** | Mercado Libre Refresh Token | [optional] 
**neto_api_key** | **str** | Neto API Key | [optional] 
**neto_api_username** | **str** | Neto User Name | [optional] 
**prestashop_webservice_key** | **str** | Prestashop webservice key | [optional] 
**shopify_access_token** | **str** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**shopify_api_key** | **str** | Shopify API Key | [optional] 
**shopify_api_password** | **str** | Shopify API Password | [optional] 
**shopify_shared_secret** | **str** | Shared secret | [optional] 
**shopware_access_key** | **str** | Shopware access key | [optional] 
**shopware_api_key** | **str** | Shopware api key | [optional] 
**shopware_api_secret** | **str** | Shopware client secret access key | [optional] 
**squarespace_api_key** | **str** | Squarespace API Key | [optional] 
**store_key** | **str** | Set this parameter if bridge is already uploaded to store | [optional] 
**store_root** | **str** | Absolute path to the store root directory (used with \&quot;bridge_url\&quot; parameter) | [optional] 
**store_url** | **str** | A web address of a store that you would like to connect to API2Cart | 
**validate_version** | **bool** | Specify if api2cart should validate cart version | [optional] [default to False]
**verify** | **bool** | Enables or disables cart&#39;s verification | [optional] [default to True]
**volusion_login** | **str** | It&#39;s a Volusion account for which API is enabled | [optional] 
**volusion_password** | **str** | Volusion API Password | [optional] 
**walmart_channel_type** | **str** | Walmart WM_CONSUMER.CHANNEL.TYPE header | [optional] 
**walmart_client_id** | **str** | Walmart client ID | [optional] 
**walmart_client_secret** | **str** | Walmart client secret | [optional] 
**walmart_environment** | **str** | Walmart environment | [optional] [default to 'production']
**wc_consumer_key** | **str** | Woocommerce consumer key | [optional] 
**wc_consumer_secret** | **str** | Woocommerce consumer secret | [optional] 
**wix_app_id** | **str** | Wix App ID | [optional] 
**wix_app_secret_key** | **str** | Wix App Secret Key | [optional] 
**wix_refresh_token** | **str** | Wix refresh token | [optional] 
**zid_access_token** | **str** | Zid Access Token | [optional] 
**zid_authorization** | **str** | Zid Authorization | [optional] 
**zid_client_id** | **int** | Zid Client ID | [optional] 
**zid_client_secret** | **str** | Zid Client Secret | [optional] 
**zid_refresh_token** | **str** | Zid refresh token | [optional] 

## Example

```python
from openapi_client.models.account_cart_add import AccountCartAdd

# TODO update the JSON string below
json = "{}"
# create an instance of AccountCartAdd from a JSON string
account_cart_add_instance = AccountCartAdd.from_json(json)
# print the JSON string representation of the object
print(AccountCartAdd.to_json())

# convert the object into a dict
account_cart_add_dict = account_cart_add_instance.to_dict()
# create an instance of AccountCartAdd from a dict
account_cart_add_from_dict = AccountCartAdd.from_dict(account_cart_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


