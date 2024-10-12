# openapi_client.AddressSearchApi

All URIs are relative to *https://api.ideal-postcodes.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**address_autocomplete**](AddressSearchApi.md#address_autocomplete) | **GET** /autocomplete/addresses | Find Address
[**resolve**](AddressSearchApi.md#resolve) | **GET** /autocomplete/addresses/{address}/gbr | Resolve Address (GBR)
[**resolve_usa**](AddressSearchApi.md#resolve_usa) | **GET** /autocomplete/addresses/{address}/usa | Resolve Address (USA)


# **address_autocomplete**
> AutocompleteResponse address_autocomplete(api_key=api_key, query=query, context=context, limit=limit, postcode_outward=postcode_outward, postcode=postcode, postcode_area=postcode_area, postcode_sector=postcode_sector, post_town=post_town, uprn=uprn, country=country, postcode_type=postcode_type, su_organisation_indicator=su_organisation_indicator, box=box, bias_postcode_outward=bias_postcode_outward, bias_postcode=bias_postcode, bias_postcode_area=bias_postcode_area, bias_postcode_sector=bias_postcode_sector, bias_post_town=bias_post_town, bias_thoroughfare=bias_thoroughfare, bias_country=bias_country, bias_lonlat=bias_lonlat, bias_ip=bias_ip)

Find Address

The address autocomplete API returns a list of address suggestions that match the query ordered by relevance.  This API can be used to power realtime address finders, also known as address autofill or address autocomplete.  Consider using our Address Autocomplete JavaScript libraries to add address lookup to a form in moments.  ## Implementing Address Autocomplete  Rapid address autocompletion using our Address Autocomplete API is a 2 step process.  1. Retrieve partial address suggestions via `/autocomplete/addresses` 2. Retrieve the entire address with the ID provided in the suggestion  Step 2 will decrement your lookup balance.  Please note, this API is not intended to be a free standalone resource.  ## Filters  You can strictly narrow your result by adding filters to your querystring. For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.  If a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.  You can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.  All filters can accept multiple terms unless stated otherwise below.  Filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.  A maximum of **10** terms are allowed across all filters.  ## Biases  You can boost certain addresses results that match specific address criteria. All bias searches are prefixed with `bias_`.  Biasing (unlike filtering) also allow unmatched addresses to appear with lower precedence.  For instance, can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.  No bias effect applies to bias terms that are invalid. e.g. `bias_postcode=SW1A2AAA`  You may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: <code>bias_postcode_outward=e1,e2,e3</code>.  All biases can accept multiple terms unless stated otherwise below.  A combined maximum of **5** terms are allowed across all biases.  ## Suggestion Format  The suggestion format is prone to change over time. Attempts to parse the suggestion may result in your integration breaking. Instead use the suggestion as-is.  ## Rate Limiting  You can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.  | Header                  | Description                                                                            | | ----------------------- | -------------------------------------------------------------------------------------- | | `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           | | `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            | | `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |  ## Pricing  This API currently does not affect your balance. However, resolving a suggestion into a full address requires a paid request.  Please note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an address may be disrupted via tightened rate limits. Continued misuse will result in account suspension. 

### Example


```python
import openapi_client
from openapi_client.models.autocomplete_response import AutocompleteResponse
from openapi_client.models.bias_ip_param import BiasIpParam
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddressSearchApi(api_client)
    api_key = 'api_key_example' # str |  (optional)
    query = 'query_example' # str | Specifies the address you wish to query. Query can be shortened to `q=` (optional)
    context = 'context_example' # str |  (optional)
    limit = 10 # int | Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned.  (optional) (default to 10)
    postcode_outward = 'postcode_outward_example' # str |  (optional)
    postcode = 'postcode_example' # str |  (optional)
    postcode_area = 'postcode_area_example' # str |  (optional)
    postcode_sector = 'postcode_sector_example' # str |  (optional)
    post_town = 'post_town_example' # str |  (optional)
    uprn = 56 # int |  (optional)
    country = 'country_example' # str |  (optional)
    postcode_type = 'postcode_type_example' # str |  (optional)
    su_organisation_indicator = 'su_organisation_indicator_example' # str |  (optional)
    box = 'box_example' # str |  (optional)
    bias_postcode_outward = 'bias_postcode_outward_example' # str |  (optional)
    bias_postcode = 'bias_postcode_example' # str |  (optional)
    bias_postcode_area = 'bias_postcode_area_example' # str |  (optional)
    bias_postcode_sector = 'bias_postcode_sector_example' # str |  (optional)
    bias_post_town = 'bias_post_town_example' # str |  (optional)
    bias_thoroughfare = 'bias_thoroughfare_example' # str |  (optional)
    bias_country = 'bias_country_example' # str |  (optional)
    bias_lonlat = 'bias_lonlat_example' # str |  (optional)
    bias_ip = openapi_client.BiasIpParam() # BiasIpParam |  (optional)

    try:
        # Find Address
        api_response = api_instance.address_autocomplete(api_key=api_key, query=query, context=context, limit=limit, postcode_outward=postcode_outward, postcode=postcode, postcode_area=postcode_area, postcode_sector=postcode_sector, post_town=post_town, uprn=uprn, country=country, postcode_type=postcode_type, su_organisation_indicator=su_organisation_indicator, box=box, bias_postcode_outward=bias_postcode_outward, bias_postcode=bias_postcode, bias_postcode_area=bias_postcode_area, bias_postcode_sector=bias_postcode_sector, bias_post_town=bias_post_town, bias_thoroughfare=bias_thoroughfare, bias_country=bias_country, bias_lonlat=bias_lonlat, bias_ip=bias_ip)
        print("The response of AddressSearchApi->address_autocomplete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddressSearchApi->address_autocomplete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | [optional] 
 **query** | **str**| Specifies the address you wish to query. Query can be shortened to &#x60;q&#x3D;&#x60; | [optional] 
 **context** | **str**|  | [optional] 
 **limit** | **int**| Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned.  | [optional] [default to 10]
 **postcode_outward** | **str**|  | [optional] 
 **postcode** | **str**|  | [optional] 
 **postcode_area** | **str**|  | [optional] 
 **postcode_sector** | **str**|  | [optional] 
 **post_town** | **str**|  | [optional] 
 **uprn** | **int**|  | [optional] 
 **country** | **str**|  | [optional] 
 **postcode_type** | **str**|  | [optional] 
 **su_organisation_indicator** | **str**|  | [optional] 
 **box** | **str**|  | [optional] 
 **bias_postcode_outward** | **str**|  | [optional] 
 **bias_postcode** | **str**|  | [optional] 
 **bias_postcode_area** | **str**|  | [optional] 
 **bias_postcode_sector** | **str**|  | [optional] 
 **bias_post_town** | **str**|  | [optional] 
 **bias_thoroughfare** | **str**|  | [optional] 
 **bias_country** | **str**|  | [optional] 
 **bias_lonlat** | **str**|  | [optional] 
 **bias_ip** | [**BiasIpParam**](.md)|  | [optional] 

### Return type

[**AutocompleteResponse**](AutocompleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * X-RateLimit-Limit - The maximum number of requests that can be made in 5 minutes <br>  * X-RateLimit-Remaining - The remaining requests within the current rate limit window <br>  * X-RateLimit-Reset - The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds.  <br>  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resolve**
> GbrResolveAddressResponse resolve(address, api_key=api_key)

Resolve Address (GBR)

Resolves an address autocompletion by its address ID.  Resolved addresses (including global addresses) are returned in a UK format (up to 3 address lines) using UK nomenclature (like postcode and county). 

### Example


```python
import openapi_client
from openapi_client.models.gbr_resolve_address_response import GbrResolveAddressResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddressSearchApi(api_client)
    address = 'address_example' # str | ID of address suggestion
    api_key = 'api_key_example' # str |  (optional)

    try:
        # Resolve Address (GBR)
        api_response = api_instance.resolve(address, api_key=api_key)
        print("The response of AddressSearchApi->resolve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddressSearchApi->resolve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| ID of address suggestion | 
 **api_key** | **str**|  | [optional] 

### Return type

[**GbrResolveAddressResponse**](GbrResolveAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resolve_usa**
> UsaResolveAddressResponse resolve_usa(address, api_key=api_key)

Resolve Address (USA)

Resolves an address autocompletion by its address ID.  Resolved addresses (including global addresses) are returned in a US format (up to 2 address lines) using US nomenclature (like zipcode, state and city). 

### Example


```python
import openapi_client
from openapi_client.models.usa_resolve_address_response import UsaResolveAddressResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddressSearchApi(api_client)
    address = 'address_example' # str | ID of address suggestion
    api_key = 'api_key_example' # str |  (optional)

    try:
        # Resolve Address (USA)
        api_response = api_instance.resolve_usa(address, api_key=api_key)
        print("The response of AddressSearchApi->resolve_usa:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddressSearchApi->resolve_usa: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| ID of address suggestion | 
 **api_key** | **str**|  | [optional] 

### Return type

[**UsaResolveAddressResponse**](UsaResolveAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

