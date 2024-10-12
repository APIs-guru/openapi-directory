# openapi_client.CountryApi

All URIs are relative to *https://api.ebay.com/sell/metadata/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_sales_tax_jurisdictions**](CountryApi.md#get_sales_tax_jurisdictions) | **GET** /country/{countryCode}/sales_tax_jurisdiction | 


# **get_sales_tax_jurisdictions**
> SalesTaxJurisdictions get_sales_tax_jurisdictions(country_code)



This method retrieves all the sales tax jurisdictions for the country that you specify in the <b>countryCode</b> path parameter. Countries with valid sales tax jurisdictions are Canada and the US.  <br/><br/>The response from this call tells you the jurisdictions for which a seller can configure tax tables. Although setting up tax tables is optional, you can use the <b>createOrReplaceSalesTax</b> in the <b>Account API</b> call to configure the tax tables for the jurisdictions you sell to.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.sales_tax_jurisdictions import SalesTaxJurisdictions
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/metadata/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/metadata/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CountryApi(api_client)
    country_code = 'country_code_example' # str | This path parameter specifies the two-letter <a href=\"https://www.iso.org/iso-3166-country-codes.html \" title=\"https://www.iso.org \" target=\"_blank\">ISO 3166</a> country code for the country whose jurisdictions you want to retrieve. eBay provides sales tax jurisdiction information for Canada and the United States.Valid values for this path parameter are <code>CA</code> and <code>US</code>.

    try:
        api_response = api_instance.get_sales_tax_jurisdictions(country_code)
        print("The response of CountryApi->get_sales_tax_jurisdictions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountryApi->get_sales_tax_jurisdictions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **str**| This path parameter specifies the two-letter &lt;a href&#x3D;\&quot;https://www.iso.org/iso-3166-country-codes.html \&quot; title&#x3D;\&quot;https://www.iso.org \&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 3166&lt;/a&gt; country code for the country whose jurisdictions you want to retrieve. eBay provides sales tax jurisdiction information for Canada and the United States.Valid values for this path parameter are &lt;code&gt;CA&lt;/code&gt; and &lt;code&gt;US&lt;/code&gt;. | 

### Return type

[**SalesTaxJurisdictions**](SalesTaxJurisdictions.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

