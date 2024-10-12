# openapi_client.UKApi

All URIs are relative to *https://api.ideal-postcodes.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**address_cleanse**](UKApi.md#address_cleanse) | **POST** /cleanse/addresses | Cleanse
[**addresses**](UKApi.md#addresses) | **GET** /addresses | Extract Addresses
[**postcodes**](UKApi.md#postcodes) | **GET** /postcodes/{postcode} | Lookup Postcode
[**u_dprn**](UKApi.md#u_dprn) | **GET** /udprn/{udprn} | Retrieve by UDPRN
[**u_mprn**](UKApi.md#u_mprn) | **GET** /umprn/{umprn} | Retrieve by UMPRN


# **address_cleanse**
> CleanseResponse address_cleanse(address_cleanse_request, api_key=api_key)

Cleanse

The address cleanse API attempts to return the closest matching address for any given address inputs. We also return a number of Match Level indicators that describe the degree to which the suggested address matches the input address. The more impaired the input address, the harder it is to cleanse.  ## Confidence Score  The confidence score is a number ranging between 0 and 1. Where 1 implies a full match and 0 implies no major elements completely match. Each incorrect, missing or misspelled element will subtract from the overall confidence score.  ### Deciding on an Acceptable Confidence Score Threshold  Different address cleanse projects can have radically different inputs. However, within each project, the inputs tend to repeat the same errors. For instance, some input datasets may be exclusively inputted manually and be prone to typos. Others may have a persistently missing datapoint such as organistation name or postcode. For this reason, it is important to understand that there is no absolute Confidence Score threshold. Instead, the acceptable confidence score must be determined on a project by project basis based on systematic errors present in the data and business goals.  When determining an acceptable Confidence Score threshold you should load a subset of the dataset into a spreadsheet application like Excel and sort on the score. Scrolling from top-to-bottom you will be able to observe matches from best to worst. As you start to hit the lower quality searches, you will be able to roughly determine: - Which confidence scores indicate ambigious matches (i.e. up to building level only) - Which confidence scores indicate a poor or no match (i.e. the nearest matching address is too far from the input address)  Depending on your business goals, you can also use the Match Levels to determine an acceptable match. For instance, do you need to match up to the throroughfare or building name only? Are accurate organisation names an important feature? 

### Example


```python
import openapi_client
from openapi_client.models.address_cleanse_request import AddressCleanseRequest
from openapi_client.models.cleanse_response import CleanseResponse
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
    api_instance = openapi_client.UKApi(api_client)
    address_cleanse_request = openapi_client.AddressCleanseRequest() # AddressCleanseRequest | 
    api_key = 'api_key_example' # str |  (optional)

    try:
        # Cleanse
        api_response = api_instance.address_cleanse(address_cleanse_request, api_key=api_key)
        print("The response of UKApi->address_cleanse:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UKApi->address_cleanse: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address_cleanse_request** | [**AddressCleanseRequest**](AddressCleanseRequest.md)|  | 
 **api_key** | **str**|  | [optional] 

### Return type

[**CleanseResponse**](CleanseResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Rate Limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addresses**
> AddressResponse addresses(api_key, query=query, limit=limit, page=page, filter=filter, lon=lon, lat=lat, postcode_outward=postcode_outward, postcode=postcode, postcode_area=postcode_area, postcode_sector=postcode_sector, post_town=post_town, uprn=uprn, country=country, postcode_type=postcode_type, su_organisation_indicator=su_organisation_indicator, box=box, bias_postcode_outward=bias_postcode_outward, bias_postcode=bias_postcode, bias_postcode_area=bias_postcode_area, bias_postcode_sector=bias_postcode_sector, bias_post_town=bias_post_town, bias_thoroughfare=bias_thoroughfare, bias_country=bias_country, bias_lonlat=bias_lonlat)

Extract Addresses

Extract a list of complete addresses that match the query ordered by relevance score. This query accepts an optional limit and page query (defaults to 10 and 0 respectively).  If a valid postcode is passed as the query string, the entire address list for that postcode is passed as a result. Note, in these cases, limit and page parameters are ignored.  This API is designed as a multi-purpose tool for generating address lists, cleansing and wholesale data extraction according to specific parameters.  For address autocomplete, see our address finder API - which is designed for speed and address completion.  ## Reverse Geocoding  Return a list of addresses around a point using the lon= and lat= querystring arguments. Addresses will be sorted in order of distance to the point. The search radius is 100m.  ## Filters  You can strictly narrow your result by adding filters to your query string which correspond with an address attribute.  For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.  If a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.  You can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.  All filters can accept multiple terms unless stated otherwise below.  Multiple filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.  A combined maximum of 5 terms are allowed across all filters.  ## Biases  You can boost certain addresses results that correspond with a certain address attribute. All bias searches are prefixed with `bias_`.  Biased searches, unlike filtered searches, also allow unmatched addresses to appear . These will rank lower.  For instance, you can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.  If a bias term is invalid, e.g. `bias_postcode=SW1A2AAA` no bias effect is applied.  You may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: `bias_postcode_outward=e1,e2,e3`.  All biases can accept multiple terms unless stated otherwise below.  A combined maximum of 5 terms are allowed across all biases.  ## Search by Postcode and Building Name or Number  Search by postcode and building attribute with the postcode filter and query argument. E.g. For \"SW1A 2AA Prime Minister\" `/v1/addresses?postcode=sw1a2aa&q=prime minister`.  The advantage of using filters is a postcode mismatch does not result in a lookup as no results are returned.  #### Search By UPRN  Search by UPRN using the `uprn` filter and excluding the query argument. E.g. `/v1/addresses?uprn=100`.  ## Testing  - **ID1 1QD** Returns a successful query response `2000` - **ID1 KFA** Returns an empty query response `2000` - **ID1 CLIP** Returns \"no lookups remaining\" error `4020` - **ID1 CHOP** Returns \"daily (or individual) lookup limit breached\" error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup. 

### Example


```python
import openapi_client
from openapi_client.models.address_response import AddressResponse
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
    api_instance = openapi_client.UKApi(api_client)
    api_key = 'api_key_example' # str | 
    query = 'query_example' # str | Specifies the address you wish to query. Query can be shortened to `q=` (optional)
    limit = 10 # int |  (optional) (default to 10)
    page = 0 # int |  (optional) (default to 0)
    filter = 'filter_example' # str |  (optional)
    lon = 3.4 # float |  (optional)
    lat = 3.4 # float |  (optional)
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

    try:
        # Extract Addresses
        api_response = api_instance.addresses(api_key, query=query, limit=limit, page=page, filter=filter, lon=lon, lat=lat, postcode_outward=postcode_outward, postcode=postcode, postcode_area=postcode_area, postcode_sector=postcode_sector, post_town=post_town, uprn=uprn, country=country, postcode_type=postcode_type, su_organisation_indicator=su_organisation_indicator, box=box, bias_postcode_outward=bias_postcode_outward, bias_postcode=bias_postcode, bias_postcode_area=bias_postcode_area, bias_postcode_sector=bias_postcode_sector, bias_post_town=bias_post_town, bias_thoroughfare=bias_thoroughfare, bias_country=bias_country, bias_lonlat=bias_lonlat)
        print("The response of UKApi->addresses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UKApi->addresses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **query** | **str**| Specifies the address you wish to query. Query can be shortened to &#x60;q&#x3D;&#x60; | [optional] 
 **limit** | **int**|  | [optional] [default to 10]
 **page** | **int**|  | [optional] [default to 0]
 **filter** | **str**|  | [optional] 
 **lon** | **float**|  | [optional] 
 **lat** | **float**|  | [optional] 
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

### Return type

[**AddressResponse**](AddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Postcode Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postcodes**
> PostcodeResponse postcodes(postcode, api_key=api_key, filter=filter, page=page)

Lookup Postcode

Returns the complete list of addresses for a postcode. Postcode searches are space and case insensitive.  The Postcode Lookup API provides a JSON interface to search UK addresses from a postcode. It can be used to power Postcode Lookup driven address searches, like [Postcode Lookup](/postcode-lookup).  ## Postcode Not Found  Lookup balance is unaffected by invalid postcodes. The API returns a `404` response with response body:  ```json {   \"code\": 4040,   \"message\": \"Postcode not found\",   \"suggestions\": [\"SW1A 0AA\"] } ```  ### Suggestions  If a postcode cannot be found, the API will provide up to 5 closest matching postcodes. Common errors will be corrected first (e.g. mixing up `O` and `0` or `I` and `1`).  If the suggestion list is small (fewer than 3), there is a high probability the correct postcode is there. You may notify the user or immediately trigger new searches.  The suggestion list will be empty if the postcode has deviated too far from a valid postcode format.  ## Multiple Residence  A small number of postcodes will return more than 100 premises. These may require pagination. Use `page` to paginate the result set. 

### Example


```python
import openapi_client
from openapi_client.models.postcode_response import PostcodeResponse
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
    api_instance = openapi_client.UKApi(api_client)
    postcode = 'postcode_example' # str | Postcode to retrieve
    api_key = 'api_key_example' # str |  (optional)
    filter = 'filter_example' # str |  (optional)
    page = 0 # int |  (optional) (default to 0)

    try:
        # Lookup Postcode
        api_response = api_instance.postcodes(postcode, api_key=api_key, filter=filter, page=page)
        print("The response of UKApi->postcodes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UKApi->postcodes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postcode** | **str**| Postcode to retrieve | 
 **api_key** | **str**|  | [optional] 
 **filter** | **str**|  | [optional] 
 **page** | **int**|  | [optional] [default to 0]

### Return type

[**PostcodeResponse**](PostcodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Postcode Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **u_dprn**
> UDPRNResponse u_dprn(udprn, api_key=api_key, filter=filter)

Retrieve by UDPRN

Returns an address as identified by its Unique Delivery Point Reference Number (UDPRN).  You may find it useful to store UDPRN information as it can be used to retrieve the most recent information for an address. It can also be used to test for a deleted address.  UDPRNs are an eight digit unique numeric code (e.g. 25962203) for any premise on the Postcode Address File. It's essentially a unique identifier for every address in the UK that Royal Mail has in its database.  ## Testing  To test your implementation of our API we have a range of test UDPRNs that yield both successful and unsuccessful responses to your request.  They are the following:  - `0` Returns a successful UDPRN lookup response   `2000` - `-1` Returns \"UDPRN not found\", error `4044` - `-2` Returns \"no lookups remaining\", error `4020` - `-3` Returns \"daily (or individual) lookup limit breached\",   error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.

### Example


```python
import openapi_client
from openapi_client.models.udprn_response import UDPRNResponse
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
    api_instance = openapi_client.UKApi(api_client)
    udprn = 'udprn_example' # str | UDPRN to be retrieved
    api_key = 'api_key_example' # str |  (optional)
    filter = 'filter_example' # str |  (optional)

    try:
        # Retrieve by UDPRN
        api_response = api_instance.u_dprn(udprn, api_key=api_key, filter=filter)
        print("The response of UKApi->u_dprn:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UKApi->u_dprn: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **udprn** | **str**| UDPRN to be retrieved | 
 **api_key** | **str**|  | [optional] 
 **filter** | **str**|  | [optional] 

### Return type

[**UDPRNResponse**](UDPRNResponse.md)

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

# **u_mprn**
> UMPRNResponse u_mprn(umprn, api_key=api_key, filter=filter)

Retrieve by UMPRN

Returns a multiple occupancy address identifited via its UMPRN (Multiple Residence Unique ID).  UMPRNs are a unique numeric code for any Multiple Residence household on the optional Multiple Residence dataset.  ## Testing  To test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following  - `0` Returns a successful UMPRN lookup response `2000` - `-1` Returns \"UMPRN not found\", error `4044` - `-2` Returns \"no lookups remaining\", error `4020` - `-3` Returns \"daily (or individual) lookup limit breached\", error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.  ### Pricing  Per lookup charges apply. Empty responses are not charged. 

### Example


```python
import openapi_client
from openapi_client.models.umprn_response import UMPRNResponse
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
    api_instance = openapi_client.UKApi(api_client)
    umprn = 'umprn_example' # str | UMPRN to be retrieved
    api_key = 'api_key_example' # str |  (optional)
    filter = 'filter_example' # str |  (optional)

    try:
        # Retrieve by UMPRN
        api_response = api_instance.u_mprn(umprn, api_key=api_key, filter=filter)
        print("The response of UKApi->u_mprn:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UKApi->u_mprn: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **umprn** | **str**| UMPRN to be retrieved | 
 **api_key** | **str**|  | [optional] 
 **filter** | **str**|  | [optional] 

### Return type

[**UMPRNResponse**](UMPRNResponse.md)

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

