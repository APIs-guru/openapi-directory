# openapi_client.BookingServicesApi

All URIs are relative to *https://viatorapi.viator.com/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**booking_availability**](BookingServicesApi.md#booking_availability) | **POST** /booking/availability | /booking/availability
[**booking_availability_dates**](BookingServicesApi.md#booking_availability_dates) | **GET** /booking/availability/dates | /booking/availability/dates
[**booking_availability_tourgrades**](BookingServicesApi.md#booking_availability_tourgrades) | **POST** /booking/availability/tourgrades | /booking/availability/tourgrades
[**booking_availability_tourgrades_pricingmatrix**](BookingServicesApi.md#booking_availability_tourgrades_pricingmatrix) | **POST** /booking/availability/tourgrades/pricingmatrix | /booking/availability/tourgrades/pricingmatrix
[**booking_book**](BookingServicesApi.md#booking_book) | **POST** /booking/book | /booking/book
[**booking_calculateprice**](BookingServicesApi.md#booking_calculateprice) | **POST** /booking/calculateprice | /booking/calculateprice
[**booking_hotels**](BookingServicesApi.md#booking_hotels) | **GET** /booking/hotels | /booking/hotels
[**booking_mybookings**](BookingServicesApi.md#booking_mybookings) | **GET** /booking/mybookings | /booking/mybookings
[**booking_pastbooking**](BookingServicesApi.md#booking_pastbooking) | **GET** /booking/pastbooking | /booking/pastbooking
[**booking_pricingmatrix**](BookingServicesApi.md#booking_pricingmatrix) | **POST** /booking/pricingmatrix | /booking/pricingmatrix
[**booking_status**](BookingServicesApi.md#booking_status) | **POST** /booking/status | /booking/status
[**booking_status_items**](BookingServicesApi.md#booking_status_items) | **POST** /booking/status/items | /booking/status/items
[**booking_voucher**](BookingServicesApi.md#booking_voucher) | **GET** /booking/voucher | /booking/voucher
[**cancel_booking**](BookingServicesApi.md#cancel_booking) | **POST** /bookings/{booking-reference}/cancel | /bookings/{booking-reference}/cancel
[**cancel_booking_quote**](BookingServicesApi.md#cancel_booking_quote) | **GET** /bookings/{booking-reference}/cancel-quote | /bookings/{booking-reference}/cancel-quote
[**cancellation_reasons**](BookingServicesApi.md#cancellation_reasons) | **GET** /bookings/cancel-reasons | /bookings/cancel-reasons


# **booking_availability**
> BookingAvailability200Response booking_availability(accept_language, booking_availability_request=booking_availability_request)

/booking/availability

Get the tour-grade with the lowest price that is available for a product on each day of the specified month  This service: - returns  - useful when displaying a calendar of available tours - For more information, see: [Availability services](#section/Key-concepts/Availability-services) - **Notes:**    - [/booking/availability/dates](#operation/bookingAvailabilityDates) provides all availability in one call and is more suitable for calendars, etc.    - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.  

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_availability200_response import BookingAvailability200Response
from openapi_client.models.booking_availability_request import BookingAvailabilityRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    booking_availability_request = {"ageBands":[{"bandId":1,"count":1}],"currencyCode":"AUD","month":"12","productCode":"5010SYDNEY","year":"2020"} # BookingAvailabilityRequest |  (optional)

    try:
        # /booking/availability
        api_response = api_instance.booking_availability(accept_language, booking_availability_request=booking_availability_request)
        print("The response of BookingServicesApi->booking_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **booking_availability_request** | [**BookingAvailabilityRequest**](BookingAvailabilityRequest.md)|  | [optional] 

### Return type

[**BookingAvailability200Response**](BookingAvailability200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_availability_dates**
> BookingAvailabilityDates200Response booking_availability_dates(accept_language, product_code=product_code)

/booking/availability/dates

Get dates on which a product is available  This service: - retrieves all available dates for a product, excluding days it does not operate and blocked-out dates - returns a multi-dimensional array of year-month -&gt; days that have any availabile tour grade or traveler mix - useful to present the user with a list of dates for selection on which *this* product is available for booking - **Notes**:     - The user's desired traveler mix may not be eligible for booking; these details can be displayed when you retrieve its list of tour grades   - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.  

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_availability_dates200_response import BookingAvailabilityDates200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    product_code = '2280AAHT' # str | **unique alphanumeric identifier** of the product (optional)

    try:
        # /booking/availability/dates
        api_response = api_instance.booking_availability_dates(accept_language, product_code=product_code)
        print("The response of BookingServicesApi->booking_availability_dates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_availability_dates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **product_code** | **str**| **unique alphanumeric identifier** of the product | [optional] 

### Return type

[**BookingAvailabilityDates200Response**](BookingAvailabilityDates200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_availability_tourgrades**
> BookingAvailabilityTourgrades200Response booking_availability_tourgrades(accept_language, booking_availability_tourgrades_request=booking_availability_tourgrades_request)

/booking/availability/tourgrades

Get the tour grades of a product that are currently available  This service reports: - all tour grades for the specified product, on the specified day, that are available for the specified age bands - the pricing breakdown and the total depending on the travel date and traveler mix  **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.  

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_availability_tourgrades200_response import BookingAvailabilityTourgrades200Response
from openapi_client.models.booking_availability_tourgrades_request import BookingAvailabilityTourgradesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    booking_availability_tourgrades_request = {"ageBands":[{"bandId":1,"count":1}],"bookingDate":"2020-12-28","currencyCode":"AUD","productCode":"5010SYDNEY"} # BookingAvailabilityTourgradesRequest |  (optional)

    try:
        # /booking/availability/tourgrades
        api_response = api_instance.booking_availability_tourgrades(accept_language, booking_availability_tourgrades_request=booking_availability_tourgrades_request)
        print("The response of BookingServicesApi->booking_availability_tourgrades:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_availability_tourgrades: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **booking_availability_tourgrades_request** | [**BookingAvailabilityTourgradesRequest**](BookingAvailabilityTourgradesRequest.md)|  | [optional] 

### Return type

[**BookingAvailabilityTourgrades200Response**](BookingAvailabilityTourgrades200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_availability_tourgrades_pricingmatrix**
> BookingAvailabilityTourgradesPricingmatrix200Response booking_availability_tourgrades_pricingmatrix(accept_language, booking_availability_tourgrades_pricingmatrix_request=booking_availability_tourgrades_pricingmatrix_request)

/booking/availability/tourgrades/pricingmatrix

Get a pricing matrix that includes availability and tour-grades for a product  Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.  - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.  

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_availability_tourgrades_pricingmatrix200_response import BookingAvailabilityTourgradesPricingmatrix200Response
from openapi_client.models.booking_availability_tourgrades_pricingmatrix_request import BookingAvailabilityTourgradesPricingmatrixRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    booking_availability_tourgrades_pricingmatrix_request = {"currenctCode":"USD","month":"12","productCode":"2280AAHT","year":"2020"} # BookingAvailabilityTourgradesPricingmatrixRequest |  (optional)

    try:
        # /booking/availability/tourgrades/pricingmatrix
        api_response = api_instance.booking_availability_tourgrades_pricingmatrix(accept_language, booking_availability_tourgrades_pricingmatrix_request=booking_availability_tourgrades_pricingmatrix_request)
        print("The response of BookingServicesApi->booking_availability_tourgrades_pricingmatrix:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_availability_tourgrades_pricingmatrix: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **booking_availability_tourgrades_pricingmatrix_request** | [**BookingAvailabilityTourgradesPricingmatrixRequest**](BookingAvailabilityTourgradesPricingmatrixRequest.md)|  | [optional] 

### Return type

[**BookingAvailabilityTourgradesPricingmatrix200Response**](BookingAvailabilityTourgradesPricingmatrix200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_book**
> BookingBook200Response booking_book(accept_language, booking_book_request=booking_book_request)

/booking/book

Make a booking  For more information, see:     - [Cancellation policy](#section/Key-concepts/Cancellation-policy)   - [Booking concepts](#section/Key-concepts/Booking-concepts)   - [Booking process flow](#section/Common-workflows-and-data-validation/Booking-process-flow)   - [Making a booking](#section/Common-workflows-and-data-validation/Making-a-booking)   - [Supplier communications](#section/Key-concepts/Supplier-communications) 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_book200_response import BookingBook200Response
from openapi_client.models.booking_book_request import BookingBookRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    booking_book_request = {"booker":{"email":"apitest@viator.com","firstname":"Homer Test","surname":"Simpson Test","title":"Mr"},"currencyCode":"USD","demo":true,"items":[{"bookingQuestionAnswers":[{"answer":"0123456789, 9876543210","questionId":5},{"answer":"Australia, Fiji","questionId":4},{"answer":"01 July 2022, 31 May 2022","questionId":3}],"hotelId":{"$ref":"#/components/examples/product-example-1/value/data/pas"},"languageOptionCode":"en/SERVICE_GUIDE","partnerItemDetail":{"distributorItemRef":"distroItemRef8348234535_1"},"pickupPoint":{"$ref":"#/components/examples/product-example-1/value/data/pas"},"productCode":"100022P1","specialRequirements":"","tourGradeCode":"TG1","travelDate":"2020-12-30","travellers":[{"bandId":1,"firstname":"Homer1","leadTraveller":true,"surname":"Simpson Test","title":"Mr"},{"bandId":1,"firstname":"Homer2","leadTraveller":true,"surname":"Simpson Test","title":"Mr"}]}],"partnerDetail":{"distributorRef":"distroRef34398534535"}} # BookingBookRequest |  (optional)

    try:
        # /booking/book
        api_response = api_instance.booking_book(accept_language, booking_book_request=booking_book_request)
        print("The response of BookingServicesApi->booking_book:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_book: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **booking_book_request** | [**BookingBookRequest**](BookingBookRequest.md)|  | [optional] 

### Return type

[**BookingBook200Response**](BookingBook200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_calculateprice**
> BookingCalculateprice200Response booking_calculateprice(accept_language, booking_calculateprice_request=booking_calculateprice_request)

/booking/calculateprice

Confirm the price of a tour / activity prior to booking  For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)    - **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_calculateprice200_response import BookingCalculateprice200Response
from openapi_client.models.booking_calculateprice_request import BookingCalculatepriceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    booking_calculateprice_request = {"currencyCode":"USD","items":[{"productCode":"5010SYDNEY","tourGradeCode":"24HOUR","travelDate":"2020-12-12","travellers":[{"bandId":1}]}]} # BookingCalculatepriceRequest |  (optional)

    try:
        # /booking/calculateprice
        api_response = api_instance.booking_calculateprice(accept_language, booking_calculateprice_request=booking_calculateprice_request)
        print("The response of BookingServicesApi->booking_calculateprice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_calculateprice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **booking_calculateprice_request** | [**BookingCalculatepriceRequest**](BookingCalculatepriceRequest.md)|  | [optional] 

### Return type

[**BookingCalculateprice200Response**](BookingCalculateprice200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_hotels**
> BookingHotels200Response booking_hotels(accept_language, product_code=product_code, dest_id=dest_id)

/booking/hotels

Get hotel pick-ups Lists the hotel pickups available for either a product or a destination 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_hotels200_response import BookingHotels200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    product_code = '2280AAHT' # str | **unique alphanumeric identifier** of the product (optional)
    dest_id = 123 # int | **unique numeric identifier** of the destination (optional)

    try:
        # /booking/hotels
        api_response = api_instance.booking_hotels(accept_language, product_code=product_code, dest_id=dest_id)
        print("The response of BookingServicesApi->booking_hotels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_hotels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **product_code** | **str**| **unique alphanumeric identifier** of the product | [optional] 
 **dest_id** | **int**| **unique numeric identifier** of the destination | [optional] 

### Return type

[**BookingHotels200Response**](BookingHotels200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_mybookings**
> BookingMybookings200Response booking_mybookings(accept_language, voucher_key=voucher_key, email=email, itinerary_or_item_id=itinerary_or_item_id)

/booking/mybookings

Get a user's bookings with travel dates in the future.   This service can also be used to check the status of a booking.   **Provide either:**  - A `voucherKey`, **or...**  - An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references)) 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_mybookings200_response import BookingMybookings200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    voucher_key = '3299307:93c7f36a56b18ba1068787ba7fb7988da5c8ad08db77604110141ff21498603e:600033670' # str | **voucher key** for the booking (optional)
    email = 'apitest@viator.com' # str | **email address** of the booker for the booking (optional)
    itinerary_or_item_id = '700179574' # str | The booking reference number of the item - **Note**: For more information, see [Booking references](#section/Key-concepts/Booking-references)  (optional)

    try:
        # /booking/mybookings
        api_response = api_instance.booking_mybookings(accept_language, voucher_key=voucher_key, email=email, itinerary_or_item_id=itinerary_or_item_id)
        print("The response of BookingServicesApi->booking_mybookings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_mybookings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **voucher_key** | **str**| **voucher key** for the booking | [optional] 
 **email** | **str**| **email address** of the booker for the booking | [optional] 
 **itinerary_or_item_id** | **str**| The booking reference number of the item - **Note**: For more information, see [Booking references](#section/Key-concepts/Booking-references)  | [optional] 

### Return type

[**BookingMybookings200Response**](BookingMybookings200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_pastbooking**
> BookingPastbooking200Response booking_pastbooking(accept_language, voucher_key=voucher_key, email=email, item_id=item_id)

/booking/pastbooking

Get the details of a single specific past booking based on the `voucherKey` or `itemId` and email address sent in the request.  **Note**: this service will only return past bookings that were made with the same API key that was used to make the booking  **Sample query parameters**: - email=apitest@viator.com&amp;itemId=580669678  **or** - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678  **email** - The email address passed must match the email address associated with the booking  **Departure details**  - Departure details such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` is included in the response.  - These fields may contain HTML escape characters such as &amp;amp; and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response as it will cause your JSON to be invalid.  For more information, see: [Reviewing bookings](#section/Common-workflows-and-data-validation/Reviewing-bookings) 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_pastbooking200_response import BookingPastbooking200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    voucher_key = '1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678' # str | **specifier** of past booking type (use *one* of: `itemId` (booking reference) *and* `'voucherKey'` *or* `'email'`) (optional)
    email = 'apitest@viator.com' # str | **email address** by which to search for past bookings (optional)
    item_id = '580669678' # str | Search for a booking with this **unique booking-reference number**. See [Booking references](#section/Key-concepts/Booking-references) for more information.  (optional)

    try:
        # /booking/pastbooking
        api_response = api_instance.booking_pastbooking(accept_language, voucher_key=voucher_key, email=email, item_id=item_id)
        print("The response of BookingServicesApi->booking_pastbooking:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_pastbooking: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **voucher_key** | **str**| **specifier** of past booking type (use *one* of: &#x60;itemId&#x60; (booking reference) *and* &#x60;&#39;voucherKey&#39;&#x60; *or* &#x60;&#39;email&#39;&#x60;) | [optional] 
 **email** | **str**| **email address** by which to search for past bookings | [optional] 
 **item_id** | **str**| Search for a booking with this **unique booking-reference number**. See [Booking references](#section/Key-concepts/Booking-references) for more information.  | [optional] 

### Return type

[**BookingPastbooking200Response**](BookingPastbooking200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_pricingmatrix**
> BookingPricingmatrix200Response booking_pricingmatrix(accept_language, booking_pricingmatrix_request=booking_pricingmatrix_request)

/booking/pricingmatrix

Get the pricing matrix for tour-grades, product age bands and pax mixes  For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix) 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_pricingmatrix200_response import BookingPricingmatrix200Response
from openapi_client.models.booking_pricingmatrix_request import BookingPricingmatrixRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    booking_pricingmatrix_request = {"bookingDate":"2020-12-12","currencyCode":"EUR","productCode":"5010SYDNEY","tourGradeCode":"24HOUR"} # BookingPricingmatrixRequest |  (optional)

    try:
        # /booking/pricingmatrix
        api_response = api_instance.booking_pricingmatrix(accept_language, booking_pricingmatrix_request=booking_pricingmatrix_request)
        print("The response of BookingServicesApi->booking_pricingmatrix:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_pricingmatrix: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **booking_pricingmatrix_request** | [**BookingPricingmatrixRequest**](BookingPricingmatrixRequest.md)|  | [optional] 

### Return type

[**BookingPricingmatrix200Response**](BookingPricingmatrix200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_status**
> BookingStatus200Response booking_status(accept_language, booking_status_request=booking_status_request)

/booking/status

Get the booking status for multiple items based on different criteria  This service:  - is ideally be used in software for bulk updates of pending bookings - returns a maximum of 1000 bookings (narrow your search if you expect a greater number of results) - will return &lt;u&gt;both&lt;/u&gt; live &lt;u&gt;and&lt;/u&gt; test bookings - rate limited to &lt;u&gt;one request every 30 minutes&lt;/u&gt; - For more information, see: [Get the bookiing status for multiple items](#section/Common-workflows-and-data-validation/Get-the-booking-status-for-multiple-items)  **Exceeding the rate limit** - You will receive the following error message if you exceed the rate limit allowed for this service. Set `test` to `true` to bypass this limit: ```javascript {     \"data\": null     \"vmid\": 221002     \"errorMessage\": [\"Access allowed every 30 minutes\"]     \"errorType\": \"EXCEPTION\"     \"dateStamp\": \"2013-03-26T10:28:51+0000\"     \"errorReference\": 55315512721712161381352771     \"errorMessageText\": [\"Access allowed every 30 minutes\"]     \"success\": false     \"totalCount\": 1     \"errorName\": \"PollingDeniedException\"   } ``` 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_status200_response import BookingStatus200Response
from openapi_client.models.booking_status_request import BookingStatusRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    booking_status_request = {"bookingDateFrom":"2020-12-21","bookingDateTo":"2020-12-31","distributorItemRefs":["itemRef1000000"],"itemIds":[580669678],"leadFirstName":"Homer test","leadSurname":"Simpson test","test":true} # BookingStatusRequest |  (optional)

    try:
        # /booking/status
        api_response = api_instance.booking_status(accept_language, booking_status_request=booking_status_request)
        print("The response of BookingServicesApi->booking_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **booking_status_request** | [**BookingStatusRequest**](BookingStatusRequest.md)|  | [optional] 

### Return type

[**BookingStatus200Response**](BookingStatus200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_status_items**
> BookingStatusItems200Response booking_status_items(accept_language, booking_status_items_request=booking_status_items_request)

/booking/status/items

Get brief booking statuses  This service is similar to [/booking/status](#operation/bookingStatus) in that it: - retrieves the booking status for multiple items based on different criteria - has the same request parameters as [/booking/status](#operation/bookingStatus)  However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus). 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_status_items200_response import BookingStatusItems200Response
from openapi_client.models.booking_status_items_request import BookingStatusItemsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    booking_status_items_request = {"bookingDateFrom":"2020-12-21","bookingDateTo":"2020-12-31","distributorItemRefs":["itemRef1000000"],"itemIds":[580669678],"leadFirstName":"Homer test","leadSurname":"Simpson test","test":true} # BookingStatusItemsRequest |  (optional)

    try:
        # /booking/status/items
        api_response = api_instance.booking_status_items(accept_language, booking_status_items_request=booking_status_items_request)
        print("The response of BookingServicesApi->booking_status_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_status_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **booking_status_items_request** | [**BookingStatusItemsRequest**](BookingStatusItemsRequest.md)|  | [optional] 

### Return type

[**BookingStatusItems200Response**](BookingStatusItems200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booking_voucher**
> BookingVoucher200Response booking_voucher(accept_language, lead_last_name=lead_last_name, item_id=item_id, embedded_resources=embedded_resources, voucher_key=voucher_key, full_html=full_html, mobile_voucher=mobile_voucher)

/booking/voucher

Get voucher details - Use this service to retrieve the voucher details of a booked item. - The data returned is HTML-formatted and can be wrapped in a header and/or footer.  **Sample query parameters** - leadLastName=Simpson test&amp;itemId=580669678  **or**  - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;fullHTML=true&amp;mobileVoucher=true 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.booking_voucher200_response import BookingVoucher200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    lead_last_name = 'Simpson' # str | **surname** of *this* lead traveler (optional)
    item_id = 600033670 # int | Booking-reference number generated by Viator    - **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)  (optional)
    embedded_resources = false # bool | ignore (Viator only) (optional)
    voucher_key = '3299307:93c7f36a56b18ba1068787ba7fb7988da5c8ad08db77604110141ff21498603e:600033670' # str | **identifier** for the voucher - **note**: use &lt;u&gt;either&lt;/u&gt; `voucherKey` &lt;u&gt;or&lt;/u&gt; the three separate parameters - if `voucherKey` is provided as well as the other parameters, then `voucherKey` overrides the other paramaters - `voucherKey` is obtained from [/booking/mybookings](#operation/bookingMybookings) or in the response from [/booking/book](#operation/bookingBook) when you make a booking  (optional)
    full_html = true # bool | **specifier**: - set to `true` if you wish to retrieve the full HTML-formatted voucher - set to `false` if you want the div fragment (optional)  (optional)
    mobile_voucher = true # bool | **specifier**:  - if set to `true`, the service returns the mobile (cut down) HTML-formatted voucher - if `false` the full voucher HTML is returned (ignoring `fullHTML`) - default: `true`  - this field should only be enabled for products that have a `voucherOption` of `'VOUCHER_E'` - do not enable `mobileVouchers` for paper vouchers (`voucherOption` of `'VOUCHER_PAPER_ONLY'`) as no barcode is returned - the voucher information is available in the response from [/product](#operation/product), [/booking/book](#operation/bookingBook), [/booking/pastbooking](#operation/bookingPastbooking), [/booking/mybookings](#operation/bookingMybookings) (it is also displayed under the 'Redemption Info' heading in this service)  (optional)

    try:
        # /booking/voucher
        api_response = api_instance.booking_voucher(accept_language, lead_last_name=lead_last_name, item_id=item_id, embedded_resources=embedded_resources, voucher_key=voucher_key, full_html=full_html, mobile_voucher=mobile_voucher)
        print("The response of BookingServicesApi->booking_voucher:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->booking_voucher: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **lead_last_name** | **str**| **surname** of *this* lead traveler | [optional] 
 **item_id** | **int**| Booking-reference number generated by Viator    - **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)  | [optional] 
 **embedded_resources** | **bool**| ignore (Viator only) | [optional] 
 **voucher_key** | **str**| **identifier** for the voucher - **note**: use &amp;lt;u&amp;gt;either&amp;lt;/u&amp;gt; &#x60;voucherKey&#x60; &amp;lt;u&amp;gt;or&amp;lt;/u&amp;gt; the three separate parameters - if &#x60;voucherKey&#x60; is provided as well as the other parameters, then &#x60;voucherKey&#x60; overrides the other paramaters - &#x60;voucherKey&#x60; is obtained from [/booking/mybookings](#operation/bookingMybookings) or in the response from [/booking/book](#operation/bookingBook) when you make a booking  | [optional] 
 **full_html** | **bool**| **specifier**: - set to &#x60;true&#x60; if you wish to retrieve the full HTML-formatted voucher - set to &#x60;false&#x60; if you want the div fragment (optional)  | [optional] 
 **mobile_voucher** | **bool**| **specifier**:  - if set to &#x60;true&#x60;, the service returns the mobile (cut down) HTML-formatted voucher - if &#x60;false&#x60; the full voucher HTML is returned (ignoring &#x60;fullHTML&#x60;) - default: &#x60;true&#x60;  - this field should only be enabled for products that have a &#x60;voucherOption&#x60; of &#x60;&#39;VOUCHER_E&#39;&#x60; - do not enable &#x60;mobileVouchers&#x60; for paper vouchers (&#x60;voucherOption&#x60; of &#x60;&#39;VOUCHER_PAPER_ONLY&#39;&#x60;) as no barcode is returned - the voucher information is available in the response from [/product](#operation/product), [/booking/book](#operation/bookingBook), [/booking/pastbooking](#operation/bookingPastbooking), [/booking/mybookings](#operation/bookingMybookings) (it is also displayed under the &#39;Redemption Info&#39; heading in this service)  | [optional] 

### Return type

[**BookingVoucher200Response**](BookingVoucher200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_booking**
> CancelBookingResponse cancel_booking(booking_reference, accept_language, cancellation_request=cancellation_request)

/bookings/{booking-reference}/cancel

Submits a cancellation request for the specified booking  For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)  **Note**:     * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel` 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.cancel_booking_response import CancelBookingResponse
from openapi_client.models.cancellation_request import CancellationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    booking_reference = 'booking_reference_example' # str | The ID of the booking
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    cancellation_request = {"reasonCode":"Customer_Service.I_canceled_my_entire_trip"} # CancellationRequest |  (optional)

    try:
        # /bookings/{booking-reference}/cancel
        api_response = api_instance.cancel_booking(booking_reference, accept_language, cancellation_request=cancellation_request)
        print("The response of BookingServicesApi->cancel_booking:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->cancel_booking: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **booking_reference** | **str**| The ID of the booking | 
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **cancellation_request** | [**CancellationRequest**](CancellationRequest.md)|  | [optional] 

### Return type

[**CancelBookingResponse**](CancelBookingResponse.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**406** | Not Acceptable |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_booking_quote**
> CancelBookingQuoteResponse cancel_booking_quote(booking_reference)

/bookings/{booking-reference}/cancel-quote

Retrieves a quote for the cancellation of a booking  For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)  **Note**:     * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote` 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.cancel_booking_quote_response import CancelBookingQuoteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    booking_reference = 'booking_reference_example' # str | Unique numeric identifier of the booking for which to retrieve a cancellation quote

    try:
        # /bookings/{booking-reference}/cancel-quote
        api_response = api_instance.cancel_booking_quote(booking_reference)
        print("The response of BookingServicesApi->cancel_booking_quote:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->cancel_booking_quote: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **booking_reference** | **str**| Unique numeric identifier of the booking for which to retrieve a cancellation quote | 

### Return type

[**CancelBookingQuoteResponse**](CancelBookingQuoteResponse.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**406** | Not Acceptable |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancellation_reasons**
> List[CancellationReasonsResponse] cancellation_reasons(accept_language)

/bookings/cancel-reasons

Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).  For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)  **Note**:     * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons` 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.cancellation_reasons_response import CancellationReasonsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookingServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 

    try:
        # /bookings/cancel-reasons
        api_response = api_instance.cancellation_reasons(accept_language)
        print("The response of BookingServicesApi->cancellation_reasons:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookingServicesApi->cancellation_reasons: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 

### Return type

[**List[CancellationReasonsResponse]**](CancellationReasonsResponse.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**406** | Not Acceptable |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

