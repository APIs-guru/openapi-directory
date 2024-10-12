# openapi_client.AddressesApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**parse_address**](AddressesApi.md#parse_address) | **PUT** /v1/addresses/recognize | Parse an address
[**validate_address**](AddressesApi.md#validate_address) | **POST** /v1/addresses/validate | Validate An Address


# **parse_address**
> ParseAddressResponseBody parse_address(parse_address_request_body)

Parse an address

The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.  Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that's used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.  > **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.parse_address_request_body import ParseAddressRequestBody
from openapi_client.models.parse_address_response_body import ParseAddressResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
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
    api_instance = openapi_client.AddressesApi(api_client)
    parse_address_request_body = {"address":{"address_residential_indicator":true,"country_code":"US"},"text":"Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652."} # ParseAddressRequestBody | The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines. 

    try:
        # Parse an address
        api_response = api_instance.parse_address(parse_address_request_body)
        print("The response of AddressesApi->parse_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddressesApi->parse_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parse_address_request_body** | [**ParseAddressRequestBody**](ParseAddressRequestBody.md)| The only required field is &#x60;text&#x60;, which is the text to be parsed. You can optionally also provide an &#x60;address&#x60; containing already-known values. For example, you may already know the recipient&#39;s name, city, and country, and only want to parse the street address into separate lines.  | 

### Return type

[**ParseAddressResponseBody**](ParseAddressResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.  |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_address**
> List[AddressValidationResult] validate_address(address_to_validate)

Validate An Address

Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.address_to_validate import AddressToValidate
from openapi_client.models.address_validation_result import AddressValidationResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
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
    api_instance = openapi_client.AddressesApi(api_client)
    address_to_validate = [{"address_line1":"500 South Buena Vista Street","city_locality":"Burbank","company_name":"The Walt Disney Company","country_code":"US","name":"Mickey and Minnie Mouse","phone":"714-781-4565","postal_code":91521,"state_province":"CA"}] # List[AddressToValidate] | 

    try:
        # Validate An Address
        api_response = api_instance.validate_address(address_to_validate)
        print("The response of AddressesApi->validate_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddressesApi->validate_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address_to_validate** | [**List[AddressToValidate]**](AddressToValidate.md)|  | 

### Return type

[**List[AddressValidationResult]**](AddressValidationResult.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

