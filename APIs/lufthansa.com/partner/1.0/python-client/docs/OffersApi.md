# openapi_client.OffersApi

All URIs are relative to *https://api.lufthansa.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**all_fares**](OffersApi.md#all_fares) | **GET** /offers/fares/allfares | All Fares
[**best_fares**](OffersApi.md#best_fares) | **GET** /offers/fares/bestfares | Best Fares
[**deep_links**](OffersApi.md#deep_links) | **GET** /offers/fares/deeplink | Deep Links
[**fares**](OffersApi.md#fares) | **GET** /offers/fares/fares | Fares
[**fares_subscriptions**](OffersApi.md#fares_subscriptions) | **GET** /offers/fares/subscriptions | Fares Subscriptions
[**l_h_deep_links__ffp**](OffersApi.md#l_h_deep_links__ffp) | **GET** /offers/fares/deeplink/ffp | LH Deep Links - FFP
[**l_h_deep_links__itco**](OffersApi.md#l_h_deep_links__itco) | **GET** /offers/fares/deeplink/itco | LH Deep Links - ITCO
[**lowest_fares**](OffersApi.md#lowest_fares) | **GET** /offers/fares/lowestfares | Lowest Fares
[**o_nd_route**](OffersApi.md#o_nd_route) | **GET** /offers/ond/route/{origin}/{destination} | OND Route
[**o_nd_status**](OffersApi.md#o_nd_status) | **GET** /offers/ond/status | OND Status
[**top_ond**](OffersApi.md#top_ond) | **GET** /offers/ond/top | Top OND


# **all_fares**
> str all_fares(catalogues, origin, destination, travel_date, return_date=return_date, cabin_class=cabin_class, travelers=travelers, fare_family=fare_family, trackingid=trackingid, accept=accept)

All Fares

Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OffersApi(api_client)
    catalogues = 'catalogues_example' # str | Specifies in which catalogue the fares need to be searched (e.g.'4U;OS').
    origin = 'origin_example' # str | Enter journey origin (e.g 'FRA').
    destination = 'destination_example' # str | Enter journey destination (e.g 'MAD').
    travel_date = 'travel_date_example' # str | Enter journey travel-date (e.g 2016-10-20)
    return_date = 'return_date_example' # str | Enter journey return-date (e.g 2016-10-31)'. (optional)
    cabin_class = 'economy' # str | Enter the required cabin class (e.g econonmy, business etc.). (Acceptable values are: \"\", \"economy\", \"premium economy\", \"business\", \"first\") (optional) (default to 'economy')
    travelers = 'travelers_example' # str | Specifies the type and number of travelers (e.g. '(adult=2;child=2;infant=1)') For LH only (adult=1) possible. (optional)
    fare_family = 'smart' # str | Mandatory for 4U. Specifies, which fares to be returned, such as basic, smart, best, smartflex, bestflex . (Acceptable values are: \"\", \"basic\", \"smart\", \"best\", \"smartflex\", \"bestflex\") (optional) (default to 'smart')
    trackingid = 'trackingid_example' # str | Austrian Airlines only - specify the web tracking id to be used in OS Deep link. (optional)
    accept = 'application/json' # str | Mandatory http header:  application/xml or application/json (optional) (default to 'application/json')

    try:
        # All Fares
        api_response = api_instance.all_fares(catalogues, origin, destination, travel_date, return_date=return_date, cabin_class=cabin_class, travelers=travelers, fare_family=fare_family, trackingid=trackingid, accept=accept)
        print("The response of OffersApi->all_fares:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->all_fares: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogues** | **str**| Specifies in which catalogue the fares need to be searched (e.g.&#39;4U;OS&#39;). | 
 **origin** | **str**| Enter journey origin (e.g &#39;FRA&#39;). | 
 **destination** | **str**| Enter journey destination (e.g &#39;MAD&#39;). | 
 **travel_date** | **str**| Enter journey travel-date (e.g 2016-10-20) | 
 **return_date** | **str**| Enter journey return-date (e.g 2016-10-31)&#39;. | [optional] 
 **cabin_class** | **str**| Enter the required cabin class (e.g econonmy, business etc.). (Acceptable values are: \&quot;\&quot;, \&quot;economy\&quot;, \&quot;premium economy\&quot;, \&quot;business\&quot;, \&quot;first\&quot;) | [optional] [default to &#39;economy&#39;]
 **travelers** | **str**| Specifies the type and number of travelers (e.g. &#39;(adult&#x3D;2;child&#x3D;2;infant&#x3D;1)&#39;) For LH only (adult&#x3D;1) possible. | [optional] 
 **fare_family** | **str**| Mandatory for 4U. Specifies, which fares to be returned, such as basic, smart, best, smartflex, bestflex . (Acceptable values are: \&quot;\&quot;, \&quot;basic\&quot;, \&quot;smart\&quot;, \&quot;best\&quot;, \&quot;smartflex\&quot;, \&quot;bestflex\&quot;) | [optional] [default to &#39;smart&#39;]
 **trackingid** | **str**| Austrian Airlines only - specify the web tracking id to be used in OS Deep link. | [optional] 
 **accept** | **str**| Mandatory http header:  application/xml or application/json | [optional] [default to &#39;application/json&#39;]

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **best_fares**
> str best_fares(catalogues, origin, destination, travel_date, trip_duration, range, accept, cabin_class=cabin_class, country=country, trackingid=trackingid, fare_family=fare_family)

Best Fares

Retrieve best fares for the requested journey across multiple days or multiple months.

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OffersApi(api_client)
    catalogues = 'catalogues_example' # str | Search fares from these carriers' catalogues (e.g. '4U;OS;LH')
    origin = 'origin_example' # str | Journey origin. 3-letter IATA airport code (e.g. 'FRA')
    destination = 'destination_example' # str | Journey destination. 3-letter IATA airport code (e.g. 'MAD')
    travel_date = 'travel_date_example' # str | Journey travel-date (YYYY-MM-DD)
    trip_duration = 'trip_duration_example' # str | Trip duration in days (e.g. '7')
    range = 'range_example' # str | Fare range: 'byday' or 'bymonth' (Acceptable values are: \"byday\", \"bymonth\")
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    cabin_class = 'cabin_class_example' # str | Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: \"\", \"economy\", \"premium_economy\", \"business\", \"first\") (optional)
    country = 'country_example' # str | Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de') (optional)
    trackingid = 'trackingid_example' # str | Austrian Airlines only - specify the web tracking id to be used in OS Deep link. (optional)
    fare_family = 'fare_family_example' # str | Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: \"\", \"basic\", \"smart\", \"best\", \"smartflex\", \"bestflex\") (optional)

    try:
        # Best Fares
        api_response = api_instance.best_fares(catalogues, origin, destination, travel_date, trip_duration, range, accept, cabin_class=cabin_class, country=country, trackingid=trackingid, fare_family=fare_family)
        print("The response of OffersApi->best_fares:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->best_fares: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogues** | **str**| Search fares from these carriers&#39; catalogues (e.g. &#39;4U;OS;LH&#39;) | 
 **origin** | **str**| Journey origin. 3-letter IATA airport code (e.g. &#39;FRA&#39;) | 
 **destination** | **str**| Journey destination. 3-letter IATA airport code (e.g. &#39;MAD&#39;) | 
 **travel_date** | **str**| Journey travel-date (YYYY-MM-DD) | 
 **trip_duration** | **str**| Trip duration in days (e.g. &#39;7&#39;) | 
 **range** | **str**| Fare range: &#39;byday&#39; or &#39;bymonth&#39; (Acceptable values are: \&quot;byday\&quot;, \&quot;bymonth\&quot;) | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **cabin_class** | **str**| Cabin class: &#39;economy&#39;, &#39;premium_economy&#39;, &#39;business&#39;, &#39;first&#39; (Acceptable values are: \&quot;\&quot;, \&quot;economy\&quot;, \&quot;premium_economy\&quot;, \&quot;business\&quot;, \&quot;first\&quot;) | [optional] 
 **country** | **str**| Country code of requestor. 2-letter ISO 3166-1 country code (e.g. &#39;de&#39;) | [optional] 
 **trackingid** | **str**| Austrian Airlines only - specify the web tracking id to be used in OS Deep link. | [optional] 
 **fare_family** | **str**| Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: \&quot;\&quot;, \&quot;basic\&quot;, \&quot;smart\&quot;, \&quot;best\&quot;, \&quot;smartflex\&quot;, \&quot;bestflex\&quot;) | [optional] 

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deep_links**
> str deep_links(catalogues, trackingid, country, lang, accept, origin=origin, origin_name=origin_name, destination=destination, destination_name=destination_name, travel_date=travel_date, return_date=return_date, cabin_class=cabin_class, outbound_segments=outbound_segments, return_segments=return_segments, travelers=travelers, fare=fare, net_fare=net_fare, fare_currency=fare_currency, partnerid=partnerid, encryption_key=encryption_key)

Deep Links

Returns valid deep links for the provided input parameters

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OffersApi(api_client)
    catalogues = 'catalogues_example' # str | Carrier for which the deep link will be created (e.g. 'LH')
    trackingid = 'trackingid_example' # str | Deep link tracking ID
    country = 'country_example' # str | 2-letter ISO 3166-1 country code
    lang = 'lang_example' # str | 2-letter ISO 3166-1 language code
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    origin = 'origin_example' # str | Journey origin. 3-letter IATA airport or city code (e.g. 'FRA') (optional)
    origin_name = 'origin_name_example' # str | Journey origin airport or city name (e.g. 'frankfurt') (optional)
    destination = 'destination_example' # str | Journey destination. 3-letter IATA airport or city code (e.g. 'MAD') (optional)
    destination_name = 'destination_name_example' # str | Journey destination airport or city name (e.g. 'madrid') (optional)
    travel_date = 'travel_date_example' # str | Journey travel-date (YYYY-MM-DD) (optional)
    return_date = 'return_date_example' # str | Journey return-date (YYYY-MM-DD) (optional)
    cabin_class = 'cabin_class_example' # str | Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: \"\", \"economy\", \"premium_economy\", \"business\", \"first\") (optional)
    outbound_segments = 'outbound_segments_example' # str | Outbound flight segments in the sequence of travel (e.g. 'LH096;LH480') (optional)
    return_segments = 'return_segments_example' # str | Flight segments in the sequence of travel (e.g. 'LH7465;LH431') (optional)
    travelers = 'travelers_example' # str | Type and number of travelers (e.g. '(adult=2;child=2;infant=1)') (optional)
    fare = 'fare_example' # str | Travel fare (e.g. '1341.45') (optional)
    net_fare = 'net_fare_example' # str | Travel net fare. Total fare less taxes and charges (e.g. '1140') (optional)
    fare_currency = 'fare_currency_example' # str | Fare currency (e.g. 'EUR') (optional)
    partnerid = 'partnerid_example' # str | Deep link partner id (e.g. '1247') (optional)
    encryption_key = 'encryption_key_example' # str | Deep link encryption-key (optional)

    try:
        # Deep Links
        api_response = api_instance.deep_links(catalogues, trackingid, country, lang, accept, origin=origin, origin_name=origin_name, destination=destination, destination_name=destination_name, travel_date=travel_date, return_date=return_date, cabin_class=cabin_class, outbound_segments=outbound_segments, return_segments=return_segments, travelers=travelers, fare=fare, net_fare=net_fare, fare_currency=fare_currency, partnerid=partnerid, encryption_key=encryption_key)
        print("The response of OffersApi->deep_links:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->deep_links: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogues** | **str**| Carrier for which the deep link will be created (e.g. &#39;LH&#39;) | 
 **trackingid** | **str**| Deep link tracking ID | 
 **country** | **str**| 2-letter ISO 3166-1 country code | 
 **lang** | **str**| 2-letter ISO 3166-1 language code | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **origin** | **str**| Journey origin. 3-letter IATA airport or city code (e.g. &#39;FRA&#39;) | [optional] 
 **origin_name** | **str**| Journey origin airport or city name (e.g. &#39;frankfurt&#39;) | [optional] 
 **destination** | **str**| Journey destination. 3-letter IATA airport or city code (e.g. &#39;MAD&#39;) | [optional] 
 **destination_name** | **str**| Journey destination airport or city name (e.g. &#39;madrid&#39;) | [optional] 
 **travel_date** | **str**| Journey travel-date (YYYY-MM-DD) | [optional] 
 **return_date** | **str**| Journey return-date (YYYY-MM-DD) | [optional] 
 **cabin_class** | **str**| Cabin class: &#39;economy&#39;, &#39;premium_economy&#39;, &#39;business&#39;, &#39;first&#39; (Acceptable values are: \&quot;\&quot;, \&quot;economy\&quot;, \&quot;premium_economy\&quot;, \&quot;business\&quot;, \&quot;first\&quot;) | [optional] 
 **outbound_segments** | **str**| Outbound flight segments in the sequence of travel (e.g. &#39;LH096;LH480&#39;) | [optional] 
 **return_segments** | **str**| Flight segments in the sequence of travel (e.g. &#39;LH7465;LH431&#39;) | [optional] 
 **travelers** | **str**| Type and number of travelers (e.g. &#39;(adult&#x3D;2;child&#x3D;2;infant&#x3D;1)&#39;) | [optional] 
 **fare** | **str**| Travel fare (e.g. &#39;1341.45&#39;) | [optional] 
 **net_fare** | **str**| Travel net fare. Total fare less taxes and charges (e.g. &#39;1140&#39;) | [optional] 
 **fare_currency** | **str**| Fare currency (e.g. &#39;EUR&#39;) | [optional] 
 **partnerid** | **str**| Deep link partner id (e.g. &#39;1247&#39;) | [optional] 
 **encryption_key** | **str**| Deep link encryption-key | [optional] 

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fares**
> str fares(catalogues, segments, carriers, accept, travelers=travelers, fare_types=fare_types)

Fares

Retrieve all available fares per fare family for a specific Origin & Destination on a given date

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OffersApi(api_client)
    catalogues = 'catalogues_example' # str | Search fares from these carriers' catalogues - currently active for Germanwings only  (4U)
    segments = 'segments_example' # str | Journey details  e.g. (origin=TXL;destination=CGN;travel-date=2016-12-15;return-date=2016-12-20;cabin=Economy)
    carriers = 'carriers_example' # str | Include fares for these carriers e.g. ('4U;LH')
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    travelers = 'travelers_example' # str | Type and number of travelers e.g. (adult=1;child=1;infant=1) (optional)
    fare_types = 'basic' # str | Fares family: basic,smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: \"\", \"basic\", \"smart\", \"best\", \"smartflex\", \"bestflex\") (optional) (default to 'basic')

    try:
        # Fares
        api_response = api_instance.fares(catalogues, segments, carriers, accept, travelers=travelers, fare_types=fare_types)
        print("The response of OffersApi->fares:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->fares: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogues** | **str**| Search fares from these carriers&#39; catalogues - currently active for Germanwings only  (4U) | 
 **segments** | **str**| Journey details  e.g. (origin&#x3D;TXL;destination&#x3D;CGN;travel-date&#x3D;2016-12-15;return-date&#x3D;2016-12-20;cabin&#x3D;Economy) | 
 **carriers** | **str**| Include fares for these carriers e.g. (&#39;4U;LH&#39;) | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **travelers** | **str**| Type and number of travelers e.g. (adult&#x3D;1;child&#x3D;1;infant&#x3D;1) | [optional] 
 **fare_types** | **str**| Fares family: basic,smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: \&quot;\&quot;, \&quot;basic\&quot;, \&quot;smart\&quot;, \&quot;best\&quot;, \&quot;smartflex\&quot;, \&quot;bestflex\&quot;) | [optional] [default to &#39;basic&#39;]

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fares_subscriptions**
> str fares_subscriptions(origin, destination, cabin_class, trip_duration, email, lang, accept, country=country, trackingid=trackingid)

Fares Subscriptions

Create a subscription for best price O&D. Receive regular updates on lowest fares

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OffersApi(api_client)
    origin = 'origin_example' # str | Journey origin. 3-leter IATA airport code (e.g. 'FRA')
    destination = 'destination_example' # str | Journey destination. 3-letter IATA airport code (e.g. 'MAD')
    cabin_class = 'cabin_class_example' # str | Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: \"\", \"economy\", \"premium_economy\", \"business\", \"first\")
    trip_duration = 'trip_duration_example' # str | Trip duration in days (e.g. '7')
    email = 'email_example' # str | Email Address')
    lang = 'lang_example' # str | 2-letter ISO 3166-1 language code
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    country = 'country_example' # str | 2-letter ISO 3166-1 country code (optional)
    trackingid = 'trackingid_example' # str | Tracking parameter (optional)

    try:
        # Fares Subscriptions
        api_response = api_instance.fares_subscriptions(origin, destination, cabin_class, trip_duration, email, lang, accept, country=country, trackingid=trackingid)
        print("The response of OffersApi->fares_subscriptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->fares_subscriptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin** | **str**| Journey origin. 3-leter IATA airport code (e.g. &#39;FRA&#39;) | 
 **destination** | **str**| Journey destination. 3-letter IATA airport code (e.g. &#39;MAD&#39;) | 
 **cabin_class** | **str**| Cabin class: &#39;economy&#39;, &#39;premium_economy&#39;, &#39;business&#39;, &#39;first&#39; (Acceptable values are: \&quot;\&quot;, \&quot;economy\&quot;, \&quot;premium_economy\&quot;, \&quot;business\&quot;, \&quot;first\&quot;) | 
 **trip_duration** | **str**| Trip duration in days (e.g. &#39;7&#39;) | 
 **email** | **str**| Email Address&#39;) | 
 **lang** | **str**| 2-letter ISO 3166-1 language code | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **country** | **str**| 2-letter ISO 3166-1 country code | [optional] 
 **trackingid** | **str**| Tracking parameter | [optional] 

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **l_h_deep_links__ffp**
> str l_h_deep_links__ffp(catalogues, origin, destination, travel_date, trackingid, country, lang, accept, return_date=return_date, cabin_class=cabin_class, travelers=travelers, partnerid=partnerid, encryption_key=encryption_key)

LH Deep Links - FFP

Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OffersApi(api_client)
    catalogues = 'catalogues_example' # str | Carrier for which the deep link will be created (e.g. 'LH')
    origin = 'origin_example' # str | Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')
    destination = 'destination_example' # str | Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')
    travel_date = 'travel_date_example' # str | Journey travel-date (YYYY-MM-DD)
    trackingid = 'trackingid_example' # str | Deep link tracking ID
    country = 'country_example' # str | 2-letter ISO 3166-1 country code
    lang = 'lang_example' # str | 2-letter ISO 3166-1 language code
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    return_date = 'return_date_example' # str | Journey return-date (YYYY-MM-DD) (optional)
    cabin_class = 'cabin_class_example' # str | Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: \"\", \"economy\", \"premium_economy\", \"business\", \"first\") (optional)
    travelers = 'travelers_example' # str | Type and number of travelers (e.g. '(adult=2;child=2;infant=1)') (optional)
    partnerid = 'partnerid_example' # str | Deep link partner id (e.g. '1247') (optional)
    encryption_key = 'encryption_key_example' # str | Deep link encryption-key (optional)

    try:
        # LH Deep Links - FFP
        api_response = api_instance.l_h_deep_links__ffp(catalogues, origin, destination, travel_date, trackingid, country, lang, accept, return_date=return_date, cabin_class=cabin_class, travelers=travelers, partnerid=partnerid, encryption_key=encryption_key)
        print("The response of OffersApi->l_h_deep_links__ffp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->l_h_deep_links__ffp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogues** | **str**| Carrier for which the deep link will be created (e.g. &#39;LH&#39;) | 
 **origin** | **str**| Journey origin. 3-letter IATA airport or city code (e.g. &#39;FRA&#39;) | 
 **destination** | **str**| Journey destination. 3-letter IATA airport or city code (e.g. &#39;MAD&#39;) | 
 **travel_date** | **str**| Journey travel-date (YYYY-MM-DD) | 
 **trackingid** | **str**| Deep link tracking ID | 
 **country** | **str**| 2-letter ISO 3166-1 country code | 
 **lang** | **str**| 2-letter ISO 3166-1 language code | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **return_date** | **str**| Journey return-date (YYYY-MM-DD) | [optional] 
 **cabin_class** | **str**| Cabin class: &#39;economy&#39;, &#39;premium_economy&#39;, &#39;business&#39;, &#39;first&#39; (Acceptable values are: \&quot;\&quot;, \&quot;economy\&quot;, \&quot;premium_economy\&quot;, \&quot;business\&quot;, \&quot;first\&quot;) | [optional] 
 **travelers** | **str**| Type and number of travelers (e.g. &#39;(adult&#x3D;2;child&#x3D;2;infant&#x3D;1)&#39;) | [optional] 
 **partnerid** | **str**| Deep link partner id (e.g. &#39;1247&#39;) | [optional] 
 **encryption_key** | **str**| Deep link encryption-key | [optional] 

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **l_h_deep_links__itco**
> str l_h_deep_links__itco(catalogues, origin, destination, travel_date, outbound_segments, fare, fare_currency, trackingid, country, lang, accept, return_date=return_date, cabin_class=cabin_class, return_segments=return_segments, travelers=travelers, net_fare=net_fare, partnerid=partnerid, encryption_key=encryption_key)

LH Deep Links - ITCO

Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OffersApi(api_client)
    catalogues = 'catalogues_example' # str | Carrier for which the deep link will be created (e.g. 'LH')
    origin = 'origin_example' # str | Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')
    destination = 'destination_example' # str | Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')
    travel_date = 'travel_date_example' # str | Journey travel-date (YYYY-MM-DD)
    outbound_segments = 'outbound_segments_example' # str | Outbound flight segments in the sequence of travel (e.g. 'LH096;LH480')
    fare = 'fare_example' # str | Travel fare (e.g. '1341.45')
    fare_currency = 'fare_currency_example' # str | Fare currency (e.g. 'EUR')
    trackingid = 'trackingid_example' # str | Deep link tracking ID
    country = 'country_example' # str | 2-letter ISO 3166-1 country code
    lang = 'lang_example' # str | 2-letter ISO 3166-1 language code
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    return_date = 'return_date_example' # str | Journey return-date (YYYY-MM-DD) (optional)
    cabin_class = 'cabin_class_example' # str | Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: \"\", \"economy\", \"premium_economy\", \"business\", \"first\") (optional)
    return_segments = 'return_segments_example' # str | Flight segments in the sequence of travel (e.g. 'LH7465;LH431') (optional)
    travelers = 'travelers_example' # str | Type and number of travelers (e.g. '(adult=2;child=2;infant=1)') (optional)
    net_fare = 'net_fare_example' # str | Travel net fare. Total fare less taxes and charges (e.g. '1140') (optional)
    partnerid = 'partnerid_example' # str | Deep link partner id (e.g. '1247') (optional)
    encryption_key = 'encryption_key_example' # str | Deep link encryption-key (optional)

    try:
        # LH Deep Links - ITCO
        api_response = api_instance.l_h_deep_links__itco(catalogues, origin, destination, travel_date, outbound_segments, fare, fare_currency, trackingid, country, lang, accept, return_date=return_date, cabin_class=cabin_class, return_segments=return_segments, travelers=travelers, net_fare=net_fare, partnerid=partnerid, encryption_key=encryption_key)
        print("The response of OffersApi->l_h_deep_links__itco:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->l_h_deep_links__itco: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogues** | **str**| Carrier for which the deep link will be created (e.g. &#39;LH&#39;) | 
 **origin** | **str**| Journey origin. 3-letter IATA airport or city code (e.g. &#39;FRA&#39;) | 
 **destination** | **str**| Journey destination. 3-letter IATA airport or city code (e.g. &#39;MAD&#39;) | 
 **travel_date** | **str**| Journey travel-date (YYYY-MM-DD) | 
 **outbound_segments** | **str**| Outbound flight segments in the sequence of travel (e.g. &#39;LH096;LH480&#39;) | 
 **fare** | **str**| Travel fare (e.g. &#39;1341.45&#39;) | 
 **fare_currency** | **str**| Fare currency (e.g. &#39;EUR&#39;) | 
 **trackingid** | **str**| Deep link tracking ID | 
 **country** | **str**| 2-letter ISO 3166-1 country code | 
 **lang** | **str**| 2-letter ISO 3166-1 language code | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **return_date** | **str**| Journey return-date (YYYY-MM-DD) | [optional] 
 **cabin_class** | **str**| Cabin class: &#39;economy&#39;, &#39;premium_economy&#39;, &#39;business&#39;, &#39;first&#39; (Acceptable values are: \&quot;\&quot;, \&quot;economy\&quot;, \&quot;premium_economy\&quot;, \&quot;business\&quot;, \&quot;first\&quot;) | [optional] 
 **return_segments** | **str**| Flight segments in the sequence of travel (e.g. &#39;LH7465;LH431&#39;) | [optional] 
 **travelers** | **str**| Type and number of travelers (e.g. &#39;(adult&#x3D;2;child&#x3D;2;infant&#x3D;1)&#39;) | [optional] 
 **net_fare** | **str**| Travel net fare. Total fare less taxes and charges (e.g. &#39;1140&#39;) | [optional] 
 **partnerid** | **str**| Deep link partner id (e.g. &#39;1247&#39;) | [optional] 
 **encryption_key** | **str**| Deep link encryption-key | [optional] 

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lowest_fares**
> str lowest_fares(catalogues, origin, destination, travel_date, accept, return_date=return_date, cabin_class=cabin_class, travelers=travelers, fare_family=fare_family, country=country)

Lowest Fares

Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OffersApi(api_client)
    catalogues = 'catalogues_example' # str | Search fares from these carriers' catalogues e.g. '4U;OS;LH'
    origin = 'origin_example' # str | Journey origin. 3-letter IATA aiport code e.g. 'FRA'
    destination = 'destination_example' # str | Journey destination. 3-letter IATA airport code e.g. 'MAD'
    travel_date = 'travel_date_example' # str | Journey travel-date YYYY-MM-DD
    accept = 'accept_example' # str | http header: application/json or application/xml (Acceptable values are: \"application/json\", \"application/xml\")
    return_date = 'return_date_example' # str | Journey return-date - mandatory for OS and LH searches YYYY-MM-DD (optional)
    cabin_class = 'cabin_class_example' # str | Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: \"\", \"economy\", \"premium_economy\", \"business\", \"first\") (optional)
    travelers = 'travelers_example' # str | Type and number of travelers e.g. '(adult=2;child=2;infant=1)'. For LH only (adult=1) possible (optional)
    fare_family = 'basic' # str | Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: \"\", \"basic\", \"smart\", \"best\", \"smartflex\", \"bestflex\") (optional) (default to 'basic')
    country = 'country_example' # str | Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de') (optional)

    try:
        # Lowest Fares
        api_response = api_instance.lowest_fares(catalogues, origin, destination, travel_date, accept, return_date=return_date, cabin_class=cabin_class, travelers=travelers, fare_family=fare_family, country=country)
        print("The response of OffersApi->lowest_fares:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->lowest_fares: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogues** | **str**| Search fares from these carriers&#39; catalogues e.g. &#39;4U;OS;LH&#39; | 
 **origin** | **str**| Journey origin. 3-letter IATA aiport code e.g. &#39;FRA&#39; | 
 **destination** | **str**| Journey destination. 3-letter IATA airport code e.g. &#39;MAD&#39; | 
 **travel_date** | **str**| Journey travel-date YYYY-MM-DD | 
 **accept** | **str**| http header: application/json or application/xml (Acceptable values are: \&quot;application/json\&quot;, \&quot;application/xml\&quot;) | 
 **return_date** | **str**| Journey return-date - mandatory for OS and LH searches YYYY-MM-DD | [optional] 
 **cabin_class** | **str**| Cabin class: &#39;economy&#39;, &#39;premium_economy&#39;, &#39;business&#39;, &#39;first&#39; (Acceptable values are: \&quot;\&quot;, \&quot;economy\&quot;, \&quot;premium_economy\&quot;, \&quot;business\&quot;, \&quot;first\&quot;) | [optional] 
 **travelers** | **str**| Type and number of travelers e.g. &#39;(adult&#x3D;2;child&#x3D;2;infant&#x3D;1)&#39;. For LH only (adult&#x3D;1) possible | [optional] 
 **fare_family** | **str**| Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: \&quot;\&quot;, \&quot;basic\&quot;, \&quot;smart\&quot;, \&quot;best\&quot;, \&quot;smartflex\&quot;, \&quot;bestflex\&quot;) | [optional] [default to &#39;basic&#39;]
 **country** | **str**| Country code of requestor. 2-letter ISO 3166-1 country code (e.g. &#39;de&#39;) | [optional] 

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **o_nd_route**
> str o_nd_route(origin, destination, accept, catalogues=catalogues, limit=limit, offset=offset)

OND Route

Returns LH route origin & destination information

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OffersApi(api_client)
    origin = 'origin_example' # str | Enter either the orgin city or orgin country code (e.g 'FRA' or 'DE'). Enter '*' for all
    destination = 'destination_example' # str | Enter either the destination city or country code (e.g 'MAD' or 'ES'). Enter '*' for all
    accept = 'accept_example' # str | Mandatory http header:  application/xml or application/json
    catalogues = 'LH' # str | Carrier for which the OND will be retrieved (e.g. 'LH') (optional) (default to 'LH')
    limit = 'limit_example' # str | Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) (optional)
    offset = 'offset_example' # str | Number of records skipped. Defaults to 0 (optional)

    try:
        # OND Route
        api_response = api_instance.o_nd_route(origin, destination, accept, catalogues=catalogues, limit=limit, offset=offset)
        print("The response of OffersApi->o_nd_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->o_nd_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin** | **str**| Enter either the orgin city or orgin country code (e.g &#39;FRA&#39; or &#39;DE&#39;). Enter &#39;*&#39; for all | 
 **destination** | **str**| Enter either the destination city or country code (e.g &#39;MAD&#39; or &#39;ES&#39;). Enter &#39;*&#39; for all | 
 **accept** | **str**| Mandatory http header:  application/xml or application/json | 
 **catalogues** | **str**| Carrier for which the OND will be retrieved (e.g. &#39;LH&#39;) | [optional] [default to &#39;LH&#39;]
 **limit** | **str**| Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken) | [optional] 
 **offset** | **str**| Number of records skipped. Defaults to 0 | [optional] 

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **o_nd_status**
> str o_nd_status(accept, catalogues=catalogues, new_routes=new_routes, old_routes=old_routes)

OND Status

Returns LH network route status information. Search for recently added or retired routes

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OffersApi(api_client)
    accept = 'accept_example' # str | Mandatory http header:  application/xml or application/json
    catalogues = 'LH' # str | Carrier for which the OND will be retrieved (e.g. 'LH') (optional) (default to 'LH')
    new_routes = 'new_routes_example' # str | Enter if newly added routes should be returned in the response. (Acceptable values are: \"\", \"true\", \"false\") (optional)
    old_routes = 'old_routes_example' # str | Enter if old (deleted) routes should be returned in the response. (Acceptable values are: \"\", \"true\", \"false\") (optional)

    try:
        # OND Status
        api_response = api_instance.o_nd_status(accept, catalogues=catalogues, new_routes=new_routes, old_routes=old_routes)
        print("The response of OffersApi->o_nd_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->o_nd_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **str**| Mandatory http header:  application/xml or application/json | 
 **catalogues** | **str**| Carrier for which the OND will be retrieved (e.g. &#39;LH&#39;) | [optional] [default to &#39;LH&#39;]
 **new_routes** | **str**| Enter if newly added routes should be returned in the response. (Acceptable values are: \&quot;\&quot;, \&quot;true\&quot;, \&quot;false\&quot;) | [optional] 
 **old_routes** | **str**| Enter if old (deleted) routes should be returned in the response. (Acceptable values are: \&quot;\&quot;, \&quot;true\&quot;, \&quot;false\&quot;) | [optional] 

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **top_ond**
> str top_ond(accept, catalogues=catalogues, origin=origin)

Top OND

Returns LH Top routes per country or across all countries

### Example

* OAuth Authentication (auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lufthansa.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.lufthansa.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OffersApi(api_client)
    accept = 'accept_example' # str | Mandatory http header:  application/xml or application/json
    catalogues = 'LH' # str | Carrier for which the OND will be retrieved (e.g. 'LH') (optional) (default to 'LH')
    origin = 'origin_example' # str | Enter the origin country code (e.g. 'DE'). Leave empty to search Top OND across all countries (optional)

    try:
        # Top OND
        api_response = api_instance.top_ond(accept, catalogues=catalogues, origin=origin)
        print("The response of OffersApi->top_ond:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OffersApi->top_ond: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **str**| Mandatory http header:  application/xml or application/json | 
 **catalogues** | **str**| Carrier for which the OND will be retrieved (e.g. &#39;LH&#39;) | [optional] [default to &#39;LH&#39;]
 **origin** | **str**| Enter the origin country code (e.g. &#39;DE&#39;). Leave empty to search Top OND across all countries | [optional] 

### Return type

**str**

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

