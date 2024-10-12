# openapi_client.DataApi

All URIs are relative to *https://connect.apptigent.com/api/utilities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**csv_to_json**](DataApi.md#csv_to_json) | **POST** /CSVtoJSON | Data - CSV to JSON
[**json_to_csv**](DataApi.md#json_to_csv) | **POST** /JSONtoCSV | Data - JSON to CSV
[**json_to_html**](DataApi.md#json_to_html) | **POST** /JSONtoHTML | Data - JSON to HTML Table
[**json_to_xml**](DataApi.md#json_to_xml) | **POST** /JSONtoXML | Data - JSON to XML
[**query_json**](DataApi.md#query_json) | **POST** /QueryJSON | Data - Query JSON
[**query_xml**](DataApi.md#query_xml) | **POST** /QueryXML | Data - Query XML
[**xml_to_json**](DataApi.md#xml_to_json) | **POST** /XMLtoJSON | Data - XML to JSON


# **csv_to_json**
> OutputString csv_to_json(csv_conversion_json=csv_conversion_json)

Data - CSV to JSON

Convert a CSV string to a JSON array

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_csv_conversion_json import InputCsvConversionJSON
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataApi(api_client)
    csv_conversion_json = openapi_client.InputCsvConversionJSON() # InputCsvConversionJSON |  (optional)

    try:
        # Data - CSV to JSON
        api_response = api_instance.csv_to_json(csv_conversion_json=csv_conversion_json)
        print("The response of DataApi->csv_to_json:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataApi->csv_to_json: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **csv_conversion_json** | [**InputCsvConversionJSON**](InputCsvConversionJSON.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **json_to_csv**
> OutputString json_to_csv(json_conversion_csv=json_conversion_csv)

Data - JSON to CSV

Convert a JSON array to CSV string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_json_conversion_csv import InputJsonConversionCSV
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataApi(api_client)
    json_conversion_csv = openapi_client.InputJsonConversionCSV() # InputJsonConversionCSV |  (optional)

    try:
        # Data - JSON to CSV
        api_response = api_instance.json_to_csv(json_conversion_csv=json_conversion_csv)
        print("The response of DataApi->json_to_csv:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataApi->json_to_csv: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json_conversion_csv** | [**InputJsonConversionCSV**](InputJsonConversionCSV.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **json_to_html**
> OutputString json_to_html(json_conversion_html=json_conversion_html)

Data - JSON to HTML Table

Convert a JSON array to an HTML table

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_json_conversion_html import InputJsonConversionHTML
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataApi(api_client)
    json_conversion_html = openapi_client.InputJsonConversionHTML() # InputJsonConversionHTML |  (optional)

    try:
        # Data - JSON to HTML Table
        api_response = api_instance.json_to_html(json_conversion_html=json_conversion_html)
        print("The response of DataApi->json_to_html:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataApi->json_to_html: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json_conversion_html** | [**InputJsonConversionHTML**](InputJsonConversionHTML.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **json_to_xml**
> OutputString json_to_xml(json_conversion_xml=json_conversion_xml)

Data - JSON to XML

Convert a JSON object to an XML string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_json_conversion_xml import InputJsonConversionXML
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataApi(api_client)
    json_conversion_xml = openapi_client.InputJsonConversionXML() # InputJsonConversionXML |  (optional)

    try:
        # Data - JSON to XML
        api_response = api_instance.json_to_xml(json_conversion_xml=json_conversion_xml)
        print("The response of DataApi->json_to_xml:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataApi->json_to_xml: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json_conversion_xml** | [**InputJsonConversionXML**](InputJsonConversionXML.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_json**
> OutputString query_json(input_data_query=input_data_query)

Data - Query JSON

Query a JSON object using a JSONPath expression

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_data_query import InputDataQuery
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataApi(api_client)
    input_data_query = openapi_client.InputDataQuery() # InputDataQuery |  (optional)

    try:
        # Data - Query JSON
        api_response = api_instance.query_json(input_data_query=input_data_query)
        print("The response of DataApi->query_json:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataApi->query_json: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input_data_query** | [**InputDataQuery**](InputDataQuery.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_xml**
> OutputString query_xml(input_data_query=input_data_query)

Data - Query XML

Query an XML string using an XPath expression

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_data_query import InputDataQuery
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataApi(api_client)
    input_data_query = openapi_client.InputDataQuery() # InputDataQuery |  (optional)

    try:
        # Data - Query XML
        api_response = api_instance.query_xml(input_data_query=input_data_query)
        print("The response of DataApi->query_xml:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataApi->query_xml: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input_data_query** | [**InputDataQuery**](InputDataQuery.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **xml_to_json**
> OutputString xml_to_json(xml_conversion_json=xml_conversion_json)

Data - XML to JSON

Convert an XML string to a JSON object

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_xml_conversion_json import InputXmlConversionJSON
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataApi(api_client)
    xml_conversion_json = openapi_client.InputXmlConversionJSON() # InputXmlConversionJSON |  (optional)

    try:
        # Data - XML to JSON
        api_response = api_instance.xml_to_json(xml_conversion_json=xml_conversion_json)
        print("The response of DataApi->xml_to_json:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataApi->xml_to_json: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xml_conversion_json** | [**InputXmlConversionJSON**](InputXmlConversionJSON.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

