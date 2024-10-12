# openapi_client.AccountApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**account_cart_add**](AccountApi.md#account_cart_add) | **POST** /account.cart.add.json | 
[**account_cart_list**](AccountApi.md#account_cart_list) | **GET** /account.cart.list.json | 
[**account_config_update**](AccountApi.md#account_config_update) | **PUT** /account.config.update.json | 
[**account_failed_webhooks**](AccountApi.md#account_failed_webhooks) | **GET** /account.failed_webhooks.json | 
[**account_supported_platforms**](AccountApi.md#account_supported_platforms) | **GET** /account.supported_platforms.json | 


# **account_cart_add**
> AccountCartAdd200Response account_cart_add(account_cart_add)



Add store to the account

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.account_cart_add import AccountCartAdd
from openapi_client.models.account_cart_add200_response import AccountCartAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    account_cart_add = openapi_client.AccountCartAdd() # AccountCartAdd | 

    try:
        api_response = api_instance.account_cart_add(account_cart_add)
        print("The response of AccountApi->account_cart_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_cart_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_cart_add** | [**AccountCartAdd**](AccountCartAdd.md)|  | 

### Return type

[**AccountCartAdd200Response**](AccountCartAdd200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_cart_list**
> AccountCartList200Response account_cart_list(params=params, exclude=exclude, request_from_date=request_from_date, request_to_date=request_to_date, store_url=store_url, store_key=store_key)



Get list of carts.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.account_cart_list200_response import AccountCartList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    params = 'force_all' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'force_all')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    request_from_date = 'request_from_date_example' # str | Retrieve entities from their creation date (optional)
    request_to_date = 'request_to_date_example' # str | Retrieve entities to their creation date (optional)
    store_url = 'store_url_example' # str | A web address of a store (optional)
    store_key = 'store_key_example' # str | Find store by store key (optional)

    try:
        api_response = api_instance.account_cart_list(params=params, exclude=exclude, request_from_date=request_from_date, request_to_date=request_to_date, store_url=store_url, store_key=store_key)
        print("The response of AccountApi->account_cart_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_cart_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;force_all&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **request_from_date** | **str**| Retrieve entities from their creation date | [optional] 
 **request_to_date** | **str**| Retrieve entities to their creation date | [optional] 
 **store_url** | **str**| A web address of a store | [optional] 
 **store_key** | **str**| Find store by store key | [optional] 

### Return type

[**AccountCartList200Response**](AccountCartList200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_config_update**
> AccountConfigUpdate200Response account_config_update(new_store_key=new_store_key, bridge_url=bridge_url, store_root=store_root, db_tables_prefix=db_tables_prefix, var_3dcart_private_key=var_3dcart_private_key, var_3dcart_access_token=var_3dcart_access_token, var_3dcartapi_api_key=var_3dcartapi_api_key, amazon_sp_client_id=amazon_sp_client_id, amazon_sp_client_secret=amazon_sp_client_secret, amazon_sp_aws_user_key_id=amazon_sp_aws_user_key_id, amazon_sp_aws_user_secret=amazon_sp_aws_user_secret, amazon_sp_aws_region=amazon_sp_aws_region, amazon_sp_aws_role_arn=amazon_sp_aws_role_arn, amazon_sp_refresh_token=amazon_sp_refresh_token, amazon_sp_api_environment=amazon_sp_api_environment, amazon_access_token=amazon_access_token, amazon_seller_id=amazon_seller_id, amazon_marketplaces_ids=amazon_marketplaces_ids, amazon_secret_key=amazon_secret_key, amazon_access_key_id=amazon_access_key_id, aspdotnetstorefront_api_user=aspdotnetstorefront_api_user, aspdotnetstorefront_api_pass=aspdotnetstorefront_api_pass, bigcommerceapi_admin_account=bigcommerceapi_admin_account, bigcommerceapi_api_path=bigcommerceapi_api_path, bigcommerceapi_api_key=bigcommerceapi_api_key, bigcommerceapi_client_id=bigcommerceapi_client_id, bigcommerceapi_access_token=bigcommerceapi_access_token, bigcommerceapi_context=bigcommerceapi_context, demandware_client_id=demandware_client_id, demandware_api_password=demandware_api_password, demandware_user_name=demandware_user_name, demandware_user_password=demandware_user_password, ebay_client_id=ebay_client_id, ebay_client_secret=ebay_client_secret, ebay_runame=ebay_runame, ebay_access_token=ebay_access_token, ebay_refresh_token=ebay_refresh_token, ebay_environment=ebay_environment, ebay_site_id=ebay_site_id, ecwid_acess_token=ecwid_acess_token, ecwid_store_id=ecwid_store_id, etsy_keystring=etsy_keystring, etsy_shared_secret=etsy_shared_secret, etsy_access_token=etsy_access_token, etsy_token_secret=etsy_token_secret, etsy_client_id=etsy_client_id, etsy_refresh_token=etsy_refresh_token, neto_api_key=neto_api_key, neto_api_username=neto_api_username, shopify_api_key=shopify_api_key, shopify_api_password=shopify_api_password, shopify_shared_secret=shopify_shared_secret, shopify_access_token=shopify_access_token, shopware_access_key=shopware_access_key, shopware_api_key=shopware_api_key, shopware_api_secret=shopware_api_secret, volusion_login=volusion_login, volusion_password=volusion_password, walmart_client_id=walmart_client_id, walmart_client_secret=walmart_client_secret, walmart_environment=walmart_environment, walmart_channel_type=walmart_channel_type, squarespace_api_key=squarespace_api_key, hybris_client_id=hybris_client_id, hybris_client_secret=hybris_client_secret, hybris_username=hybris_username, hybris_password=hybris_password, hybris_websites=hybris_websites, lightspeed_api_key=lightspeed_api_key, lightspeed_api_secret=lightspeed_api_secret, commercehq_api_key=commercehq_api_key, commercehq_api_password=commercehq_api_password, wc_consumer_key=wc_consumer_key, wc_consumer_secret=wc_consumer_secret, magento_consumer_key=magento_consumer_key, magento_consumer_secret=magento_consumer_secret, magento_access_token=magento_access_token, magento_token_secret=magento_token_secret, prestashop_webservice_key=prestashop_webservice_key, wix_app_id=wix_app_id, wix_app_secret_key=wix_app_secret_key, wix_refresh_token=wix_refresh_token, mercado_libre_app_id=mercado_libre_app_id, mercado_libre_app_secret_key=mercado_libre_app_secret_key, mercado_libre_refresh_token=mercado_libre_refresh_token, zid_client_id=zid_client_id, zid_client_secret=zid_client_secret, zid_access_token=zid_access_token, zid_authorization=zid_authorization, zid_refresh_token=zid_refresh_token)



Update configs in the API2Cart database.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.account_config_update200_response import AccountConfigUpdate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    new_store_key = 'new_store_key_example' # str | Update store key (optional)
    bridge_url = 'bridge_url_example' # str | This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store) (optional)
    store_root = 'store_root_example' # str | Absolute path to the store root directory (used with \"bridge_url\" parameter) (optional)
    db_tables_prefix = 'db_tables_prefix_example' # str | DB tables prefix (optional)
    var_3dcart_private_key = 'var_3dcart_private_key_example' # str | 3DCart Private Key (optional)
    var_3dcart_access_token = 'var_3dcart_access_token_example' # str | 3DCart Token (optional)
    var_3dcartapi_api_key = 'var_3dcartapi_api_key_example' # str | 3DCart API Key (optional)
    amazon_sp_client_id = 'amazon_sp_client_id_example' # str | Amazon SP API app client id (optional)
    amazon_sp_client_secret = 'amazon_sp_client_secret_example' # str | Amazon SP API app client secret (optional)
    amazon_sp_aws_user_key_id = 'amazon_sp_aws_user_key_id_example' # str | Amazon AWS user access key ID (optional)
    amazon_sp_aws_user_secret = 'amazon_sp_aws_user_secret_example' # str | Amazon AWS user secret access key (optional)
    amazon_sp_aws_region = 'amazon_sp_aws_region_example' # str | Amazon AWS Region (optional)
    amazon_sp_aws_role_arn = 'amazon_sp_aws_role_arn_example' # str | Amazon AWS Role ARN (optional)
    amazon_sp_refresh_token = 'amazon_sp_refresh_token_example' # str | Amazon SP API OAuth refresh token (optional)
    amazon_sp_api_environment = 'production' # str | Amazon SP API environment (optional) (default to 'production')
    amazon_access_token = 'amazon_access_token_example' # str | MWS Auth Token. Access token authorizing the app to access resources on behalf of a user (optional)
    amazon_seller_id = 'amazon_seller_id_example' # str | Amazon Seller ID (Merchant token) (optional)
    amazon_marketplaces_ids = 'amazon_marketplaces_ids_example' # str | Amazon Marketplace IDs comma separated string (optional)
    amazon_secret_key = 'amazon_secret_key_example' # str | Amazon Secret Key (optional)
    amazon_access_key_id = 'amazon_access_key_id_example' # str | Amazon Secret Key Id (optional)
    aspdotnetstorefront_api_user = 'aspdotnetstorefront_api_user_example' # str | It's a AspDotNetStorefront account for which API is available (optional)
    aspdotnetstorefront_api_pass = 'aspdotnetstorefront_api_pass_example' # str | AspDotNetStorefront API Password (optional)
    bigcommerceapi_admin_account = 'bigcommerceapi_admin_account_example' # str | It's a BigCommerce account for which API is enabled (optional)
    bigcommerceapi_api_path = 'bigcommerceapi_api_path_example' # str | BigCommerce API URL (optional)
    bigcommerceapi_api_key = 'bigcommerceapi_api_key_example' # str | Bigcommerce API Key (optional)
    bigcommerceapi_client_id = 'bigcommerceapi_client_id_example' # str | Client ID of the requesting app (optional)
    bigcommerceapi_access_token = 'bigcommerceapi_access_token_example' # str | Access token authorizing the app to access resources on behalf of a user (optional)
    bigcommerceapi_context = 'bigcommerceapi_context_example' # str | API Path section unique to the store (optional)
    demandware_client_id = 'demandware_client_id_example' # str | Demandware client id (optional)
    demandware_api_password = 'demandware_api_password_example' # str | Demandware api password (optional)
    demandware_user_name = 'demandware_user_name_example' # str | Demandware user name (optional)
    demandware_user_password = 'demandware_user_password_example' # str | Demandware user password (optional)
    ebay_client_id = 'ebay_client_id_example' # str | Application ID (AppID). (optional)
    ebay_client_secret = 'ebay_client_secret_example' # str | Shared Secret from eBay application (optional)
    ebay_runame = 'ebay_runame_example' # str | The RuName value that eBay assigns to your application. (optional)
    ebay_access_token = 'ebay_access_token_example' # str | Used to authenticate API requests. (optional)
    ebay_refresh_token = 'ebay_refresh_token_example' # str | Used to renew the access token. (optional)
    ebay_environment = 'ebay_environment_example' # str | eBay environment (optional)
    ebay_site_id = 0 # int | eBay global ID (optional) (default to 0)
    ecwid_acess_token = 'ecwid_acess_token_example' # str | Access token authorizing the app to access resources on behalf of a user (optional)
    ecwid_store_id = 'ecwid_store_id_example' # str | Store Id (optional)
    etsy_keystring = 'etsy_keystring_example' # str | Etsy keystring (optional)
    etsy_shared_secret = 'etsy_shared_secret_example' # str | Etsy shared secret (optional)
    etsy_access_token = 'etsy_access_token_example' # str | Access token authorizing the app to access resources on behalf of a user (optional)
    etsy_token_secret = 'etsy_token_secret_example' # str | Secret token authorizing the app to access resources on behalf of a user (optional)
    etsy_client_id = 'etsy_client_id_example' # str | Etsy Client Id (optional)
    etsy_refresh_token = 'etsy_refresh_token_example' # str | Etsy Refresh token (optional)
    neto_api_key = 'neto_api_key_example' # str | Neto API Key (optional)
    neto_api_username = 'neto_api_username_example' # str | Neto User Name (optional)
    shopify_api_key = 'shopify_api_key_example' # str | Shopify API Key (optional)
    shopify_api_password = 'shopify_api_password_example' # str | Shopify API Password (optional)
    shopify_shared_secret = 'shopify_shared_secret_example' # str | Shared secret (optional)
    shopify_access_token = 'shopify_access_token_example' # str | Access token authorizing the app to access resources on behalf of a user (optional)
    shopware_access_key = 'shopware_access_key_example' # str | Shopware access key (optional)
    shopware_api_key = 'shopware_api_key_example' # str | Shopware api key (optional)
    shopware_api_secret = 'shopware_api_secret_example' # str | Shopware client secret access key (optional)
    volusion_login = 'volusion_login_example' # str | It's a Volusion account for which API is enabled (optional)
    volusion_password = 'volusion_password_example' # str | Volusion API Password (optional)
    walmart_client_id = 'walmart_client_id_example' # str | Walmart client ID (optional)
    walmart_client_secret = 'walmart_client_secret_example' # str | Walmart client secret (optional)
    walmart_environment = 'production' # str | Walmart environment (optional) (default to 'production')
    walmart_channel_type = 'walmart_channel_type_example' # str | Walmart WM_CONSUMER.CHANNEL.TYPE header (optional)
    squarespace_api_key = 'squarespace_api_key_example' # str | Squarespace API Key (optional)
    hybris_client_id = 'hybris_client_id_example' # str | Omni Commerce Connector Client ID (optional)
    hybris_client_secret = 'hybris_client_secret_example' # str | Omni Commerce Connector Client Secret (optional)
    hybris_username = 'hybris_username_example' # str | User Name (optional)
    hybris_password = 'hybris_password_example' # str | User password (optional)
    hybris_websites = ['hybris_websites_example'] # List[str] | Websites to stores mapping data (optional)
    lightspeed_api_key = 'lightspeed_api_key_example' # str | LightSpeed api key (optional)
    lightspeed_api_secret = 'lightspeed_api_secret_example' # str | LightSpeed api secret (optional)
    commercehq_api_key = 'commercehq_api_key_example' # str | CommerceHQ api key (optional)
    commercehq_api_password = 'commercehq_api_password_example' # str | CommerceHQ api password (optional)
    wc_consumer_key = 'wc_consumer_key_example' # str | Woocommerce consumer key (optional)
    wc_consumer_secret = 'wc_consumer_secret_example' # str | Woocommerce consumer secret (optional)
    magento_consumer_key = 'magento_consumer_key_example' # str | Magento Consumer Key (optional)
    magento_consumer_secret = 'magento_consumer_secret_example' # str | Magento Consumer Secret (optional)
    magento_access_token = 'magento_access_token_example' # str | Magento Access Token (optional)
    magento_token_secret = 'magento_token_secret_example' # str | Magento Token Secret (optional)
    prestashop_webservice_key = 'prestashop_webservice_key_example' # str | Prestashop webservice key (optional)
    wix_app_id = 'wix_app_id_example' # str | Wix App ID (optional)
    wix_app_secret_key = 'wix_app_secret_key_example' # str | Wix App Secret Key (optional)
    wix_refresh_token = 'wix_refresh_token_example' # str | Wix refresh token (optional)
    mercado_libre_app_id = 'mercado_libre_app_id_example' # str | Mercado Libre App ID (optional)
    mercado_libre_app_secret_key = 'mercado_libre_app_secret_key_example' # str | Mercado Libre App Secret Key (optional)
    mercado_libre_refresh_token = 'mercado_libre_refresh_token_example' # str | Mercado Libre Refresh Token (optional)
    zid_client_id = 56 # int | Zid Client ID (optional)
    zid_client_secret = 'zid_client_secret_example' # str | Zid Client Secret (optional)
    zid_access_token = 'zid_access_token_example' # str | Zid Access Token (optional)
    zid_authorization = 'zid_authorization_example' # str | Zid Authorization (optional)
    zid_refresh_token = 'zid_refresh_token_example' # str | Zid refresh token (optional)

    try:
        api_response = api_instance.account_config_update(new_store_key=new_store_key, bridge_url=bridge_url, store_root=store_root, db_tables_prefix=db_tables_prefix, var_3dcart_private_key=var_3dcart_private_key, var_3dcart_access_token=var_3dcart_access_token, var_3dcartapi_api_key=var_3dcartapi_api_key, amazon_sp_client_id=amazon_sp_client_id, amazon_sp_client_secret=amazon_sp_client_secret, amazon_sp_aws_user_key_id=amazon_sp_aws_user_key_id, amazon_sp_aws_user_secret=amazon_sp_aws_user_secret, amazon_sp_aws_region=amazon_sp_aws_region, amazon_sp_aws_role_arn=amazon_sp_aws_role_arn, amazon_sp_refresh_token=amazon_sp_refresh_token, amazon_sp_api_environment=amazon_sp_api_environment, amazon_access_token=amazon_access_token, amazon_seller_id=amazon_seller_id, amazon_marketplaces_ids=amazon_marketplaces_ids, amazon_secret_key=amazon_secret_key, amazon_access_key_id=amazon_access_key_id, aspdotnetstorefront_api_user=aspdotnetstorefront_api_user, aspdotnetstorefront_api_pass=aspdotnetstorefront_api_pass, bigcommerceapi_admin_account=bigcommerceapi_admin_account, bigcommerceapi_api_path=bigcommerceapi_api_path, bigcommerceapi_api_key=bigcommerceapi_api_key, bigcommerceapi_client_id=bigcommerceapi_client_id, bigcommerceapi_access_token=bigcommerceapi_access_token, bigcommerceapi_context=bigcommerceapi_context, demandware_client_id=demandware_client_id, demandware_api_password=demandware_api_password, demandware_user_name=demandware_user_name, demandware_user_password=demandware_user_password, ebay_client_id=ebay_client_id, ebay_client_secret=ebay_client_secret, ebay_runame=ebay_runame, ebay_access_token=ebay_access_token, ebay_refresh_token=ebay_refresh_token, ebay_environment=ebay_environment, ebay_site_id=ebay_site_id, ecwid_acess_token=ecwid_acess_token, ecwid_store_id=ecwid_store_id, etsy_keystring=etsy_keystring, etsy_shared_secret=etsy_shared_secret, etsy_access_token=etsy_access_token, etsy_token_secret=etsy_token_secret, etsy_client_id=etsy_client_id, etsy_refresh_token=etsy_refresh_token, neto_api_key=neto_api_key, neto_api_username=neto_api_username, shopify_api_key=shopify_api_key, shopify_api_password=shopify_api_password, shopify_shared_secret=shopify_shared_secret, shopify_access_token=shopify_access_token, shopware_access_key=shopware_access_key, shopware_api_key=shopware_api_key, shopware_api_secret=shopware_api_secret, volusion_login=volusion_login, volusion_password=volusion_password, walmart_client_id=walmart_client_id, walmart_client_secret=walmart_client_secret, walmart_environment=walmart_environment, walmart_channel_type=walmart_channel_type, squarespace_api_key=squarespace_api_key, hybris_client_id=hybris_client_id, hybris_client_secret=hybris_client_secret, hybris_username=hybris_username, hybris_password=hybris_password, hybris_websites=hybris_websites, lightspeed_api_key=lightspeed_api_key, lightspeed_api_secret=lightspeed_api_secret, commercehq_api_key=commercehq_api_key, commercehq_api_password=commercehq_api_password, wc_consumer_key=wc_consumer_key, wc_consumer_secret=wc_consumer_secret, magento_consumer_key=magento_consumer_key, magento_consumer_secret=magento_consumer_secret, magento_access_token=magento_access_token, magento_token_secret=magento_token_secret, prestashop_webservice_key=prestashop_webservice_key, wix_app_id=wix_app_id, wix_app_secret_key=wix_app_secret_key, wix_refresh_token=wix_refresh_token, mercado_libre_app_id=mercado_libre_app_id, mercado_libre_app_secret_key=mercado_libre_app_secret_key, mercado_libre_refresh_token=mercado_libre_refresh_token, zid_client_id=zid_client_id, zid_client_secret=zid_client_secret, zid_access_token=zid_access_token, zid_authorization=zid_authorization, zid_refresh_token=zid_refresh_token)
        print("The response of AccountApi->account_config_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_config_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **new_store_key** | **str**| Update store key | [optional] 
 **bridge_url** | **str**| This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store) | [optional] 
 **store_root** | **str**| Absolute path to the store root directory (used with \&quot;bridge_url\&quot; parameter) | [optional] 
 **db_tables_prefix** | **str**| DB tables prefix | [optional] 
 **var_3dcart_private_key** | **str**| 3DCart Private Key | [optional] 
 **var_3dcart_access_token** | **str**| 3DCart Token | [optional] 
 **var_3dcartapi_api_key** | **str**| 3DCart API Key | [optional] 
 **amazon_sp_client_id** | **str**| Amazon SP API app client id | [optional] 
 **amazon_sp_client_secret** | **str**| Amazon SP API app client secret | [optional] 
 **amazon_sp_aws_user_key_id** | **str**| Amazon AWS user access key ID | [optional] 
 **amazon_sp_aws_user_secret** | **str**| Amazon AWS user secret access key | [optional] 
 **amazon_sp_aws_region** | **str**| Amazon AWS Region | [optional] 
 **amazon_sp_aws_role_arn** | **str**| Amazon AWS Role ARN | [optional] 
 **amazon_sp_refresh_token** | **str**| Amazon SP API OAuth refresh token | [optional] 
 **amazon_sp_api_environment** | **str**| Amazon SP API environment | [optional] [default to &#39;production&#39;]
 **amazon_access_token** | **str**| MWS Auth Token. Access token authorizing the app to access resources on behalf of a user | [optional] 
 **amazon_seller_id** | **str**| Amazon Seller ID (Merchant token) | [optional] 
 **amazon_marketplaces_ids** | **str**| Amazon Marketplace IDs comma separated string | [optional] 
 **amazon_secret_key** | **str**| Amazon Secret Key | [optional] 
 **amazon_access_key_id** | **str**| Amazon Secret Key Id | [optional] 
 **aspdotnetstorefront_api_user** | **str**| It&#39;s a AspDotNetStorefront account for which API is available | [optional] 
 **aspdotnetstorefront_api_pass** | **str**| AspDotNetStorefront API Password | [optional] 
 **bigcommerceapi_admin_account** | **str**| It&#39;s a BigCommerce account for which API is enabled | [optional] 
 **bigcommerceapi_api_path** | **str**| BigCommerce API URL | [optional] 
 **bigcommerceapi_api_key** | **str**| Bigcommerce API Key | [optional] 
 **bigcommerceapi_client_id** | **str**| Client ID of the requesting app | [optional] 
 **bigcommerceapi_access_token** | **str**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **bigcommerceapi_context** | **str**| API Path section unique to the store | [optional] 
 **demandware_client_id** | **str**| Demandware client id | [optional] 
 **demandware_api_password** | **str**| Demandware api password | [optional] 
 **demandware_user_name** | **str**| Demandware user name | [optional] 
 **demandware_user_password** | **str**| Demandware user password | [optional] 
 **ebay_client_id** | **str**| Application ID (AppID). | [optional] 
 **ebay_client_secret** | **str**| Shared Secret from eBay application | [optional] 
 **ebay_runame** | **str**| The RuName value that eBay assigns to your application. | [optional] 
 **ebay_access_token** | **str**| Used to authenticate API requests. | [optional] 
 **ebay_refresh_token** | **str**| Used to renew the access token. | [optional] 
 **ebay_environment** | **str**| eBay environment | [optional] 
 **ebay_site_id** | **int**| eBay global ID | [optional] [default to 0]
 **ecwid_acess_token** | **str**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **ecwid_store_id** | **str**| Store Id | [optional] 
 **etsy_keystring** | **str**| Etsy keystring | [optional] 
 **etsy_shared_secret** | **str**| Etsy shared secret | [optional] 
 **etsy_access_token** | **str**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **etsy_token_secret** | **str**| Secret token authorizing the app to access resources on behalf of a user | [optional] 
 **etsy_client_id** | **str**| Etsy Client Id | [optional] 
 **etsy_refresh_token** | **str**| Etsy Refresh token | [optional] 
 **neto_api_key** | **str**| Neto API Key | [optional] 
 **neto_api_username** | **str**| Neto User Name | [optional] 
 **shopify_api_key** | **str**| Shopify API Key | [optional] 
 **shopify_api_password** | **str**| Shopify API Password | [optional] 
 **shopify_shared_secret** | **str**| Shared secret | [optional] 
 **shopify_access_token** | **str**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **shopware_access_key** | **str**| Shopware access key | [optional] 
 **shopware_api_key** | **str**| Shopware api key | [optional] 
 **shopware_api_secret** | **str**| Shopware client secret access key | [optional] 
 **volusion_login** | **str**| It&#39;s a Volusion account for which API is enabled | [optional] 
 **volusion_password** | **str**| Volusion API Password | [optional] 
 **walmart_client_id** | **str**| Walmart client ID | [optional] 
 **walmart_client_secret** | **str**| Walmart client secret | [optional] 
 **walmart_environment** | **str**| Walmart environment | [optional] [default to &#39;production&#39;]
 **walmart_channel_type** | **str**| Walmart WM_CONSUMER.CHANNEL.TYPE header | [optional] 
 **squarespace_api_key** | **str**| Squarespace API Key | [optional] 
 **hybris_client_id** | **str**| Omni Commerce Connector Client ID | [optional] 
 **hybris_client_secret** | **str**| Omni Commerce Connector Client Secret | [optional] 
 **hybris_username** | **str**| User Name | [optional] 
 **hybris_password** | **str**| User password | [optional] 
 **hybris_websites** | [**List[str]**](str.md)| Websites to stores mapping data | [optional] 
 **lightspeed_api_key** | **str**| LightSpeed api key | [optional] 
 **lightspeed_api_secret** | **str**| LightSpeed api secret | [optional] 
 **commercehq_api_key** | **str**| CommerceHQ api key | [optional] 
 **commercehq_api_password** | **str**| CommerceHQ api password | [optional] 
 **wc_consumer_key** | **str**| Woocommerce consumer key | [optional] 
 **wc_consumer_secret** | **str**| Woocommerce consumer secret | [optional] 
 **magento_consumer_key** | **str**| Magento Consumer Key | [optional] 
 **magento_consumer_secret** | **str**| Magento Consumer Secret | [optional] 
 **magento_access_token** | **str**| Magento Access Token | [optional] 
 **magento_token_secret** | **str**| Magento Token Secret | [optional] 
 **prestashop_webservice_key** | **str**| Prestashop webservice key | [optional] 
 **wix_app_id** | **str**| Wix App ID | [optional] 
 **wix_app_secret_key** | **str**| Wix App Secret Key | [optional] 
 **wix_refresh_token** | **str**| Wix refresh token | [optional] 
 **mercado_libre_app_id** | **str**| Mercado Libre App ID | [optional] 
 **mercado_libre_app_secret_key** | **str**| Mercado Libre App Secret Key | [optional] 
 **mercado_libre_refresh_token** | **str**| Mercado Libre Refresh Token | [optional] 
 **zid_client_id** | **int**| Zid Client ID | [optional] 
 **zid_client_secret** | **str**| Zid Client Secret | [optional] 
 **zid_access_token** | **str**| Zid Access Token | [optional] 
 **zid_authorization** | **str**| Zid Authorization | [optional] 
 **zid_refresh_token** | **str**| Zid refresh token | [optional] 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_failed_webhooks**
> AccountFailedWebhooks200Response account_failed_webhooks(count=count, start=start, ids=ids)



List webhooks that was not delivered to the callback.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.account_failed_webhooks200_response import AccountFailedWebhooks200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    ids = 'ids_example' # str | List of сomma-separated webhook ids (optional)

    try:
        api_response = api_instance.account_failed_webhooks(count=count, start=start, ids=ids)
        print("The response of AccountApi->account_failed_webhooks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_failed_webhooks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **ids** | **str**| List of сomma-separated webhook ids | [optional] 

### Return type

[**AccountFailedWebhooks200Response**](AccountFailedWebhooks200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_supported_platforms**
> AccountSupportedPlatforms200Response account_supported_platforms()



Get list of supported platforms

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.account_supported_platforms200_response import AccountSupportedPlatforms200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)

    try:
        api_response = api_instance.account_supported_platforms()
        print("The response of AccountApi->account_supported_platforms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_supported_platforms: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AccountSupportedPlatforms200Response**](AccountSupportedPlatforms200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

